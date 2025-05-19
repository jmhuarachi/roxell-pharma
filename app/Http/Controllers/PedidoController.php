<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pedido;
use App\Models\Producto;
use Illuminate\Support\Facades\Auth;

class PedidoController extends Controller
{
    public function index()
    {
        $pedidos = Pedido::with(['productos', 'user'])
            ->when(!Auth::user()->isAdmin(), function($query) {
                return $query->where('user_id', Auth::id());
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json($pedidos);
    }

    public function store(Request $request)
    {
        $request->validate([
            'productos' => 'required|array',
            ]);

        // Calcular total
        $productos = Producto::whereIn('id', $request->productos)->get();
        $total = $productos->sum('precio_contado');

        // Crear pedido
        $pedido = Pedido::create([
            'user_id' => Auth::id(),
            'total' => $total,
            'estado' => 'pendiente'
        ]);

        // Adjuntar productos
        foreach ($productos as $producto) {
            $pedido->productos()->attach($producto->id, [
                'cantidad' => 1,
                'precio_unitario' => $producto->precio_contado
            ]);
        }

        return response()->json([
            'message' => 'Pedido creado exitosamente',
            'pedido' => $pedido->load('productos')
        ], 201);
    }

    public function show($id)
    {
        $pedido = Pedido::with(['productos', 'user', 'pagos'])
            ->when(!Auth::user()->isAdmin(), function($query) {
                return $query->where('user_id', Auth::id());
            })
            ->findOrFail($id);

        return response()->json($pedido);
    }

    public function update(Request $request, $id)
    {
        $pedido = Pedido::findOrFail($id);

        // Validar que el usuario sea el dueño o admin
        if ($pedido->user_id != Auth::id() && !Auth::user()->isAdmin()) {
            abort(403, 'No autorizado');
        }

        $request->validate([
            'estado' => 'sometimes|in:pendiente,completado,cancelado',
        ]);

        $pedido->update($request->all());

        return response()->json([
            'message' => 'Pedido actualizado',
            'pedido' => $pedido
        ]);
    }

    public function destroy($id)
    {
        $pedido = Pedido::findOrFail($id);

        // Validar que el usuario sea el dueño o admin
        if ($pedido->user_id != Auth::id() && !Auth::user()->isAdmin()) {
            abort(403, 'No autorizado');
        }

        $pedido->delete();

        return response()->json(['message' => 'Pedido eliminado']);
    }
}