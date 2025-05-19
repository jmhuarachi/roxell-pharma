<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pago;
use App\Models\Pedido;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class PagoController extends Controller
{
    public function index()
    {
        $pagos = Pago::with(['pedido.user'])
            ->when(!Auth::user()->isAdmin(), function($query) {
                return $query->whereHas('pedido', function($q) {
                    $q->where('user_id', Auth::id());
                });
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json($pagos);
    }

    public function metodosDisponibles()
    {
        return response()->json([
            'metodos' => [
                [
                    'id' => 'tarjeta',
                    'nombre' => 'Tarjeta de crédito/débito',
                    'icono' => '💳',
                    'instrucciones' => 'Ingresa los datos de tu tarjeta en nuestro procesador seguro.'
                ],
                [
                    'id' => 'transferencia',
                    'nombre' => 'Transferencia bancaria',
                    'icono' => '🏦',
                    'instrucciones' => 'Te proporcionaremos los datos bancarios para realizar la transferencia.'
                ],
                [
                    'id' => 'efectivo',
                    'nombre' => 'Efectivo',
                    'icono' => '💵',
                    'instrucciones' => 'Puedes pagar en efectivo al recibir tu pedido.'
                ]
            ]
        ]);
    }

    public function iniciar(Request $request)
    {
        $request->validate([
            'productos' => 'required|array',
            'metodo' => 'required|string|in:tarjeta,transferencia,efectivo'
        ]);

        // Verificar productos
        $productos = Producto::whereIn('id', $request->productos)->get();
        
        if ($productos->isEmpty()) {
            return response()->json(['error' => 'Productos no encontrados'], 404);
        }

        // Calcular total
        $total = $productos->sum('precio_contado');

        // Crear pedido
        $pedido = Pedido::create([
            'user_id' => Auth::id(),
            'total' => $total,
            'metodo_pago' => $request->metodo,
            'estado' => 'pendiente'
        ]);

        // Adjuntar productos al pedido
        foreach ($productos as $producto) {
            $pedido->productos()->attach($producto->id, [
                'cantidad' => 1,
                'precio_unitario' => $producto->precio_contado
            ]);
        }

        // Crear pago pendiente
        $pago = Pago::create([
            'pedido_id' => $pedido->id,
            'monto' => $total,
            'metodo' => $request->metodo,
            'estado' => 'pendiente'
        ]);

        return response()->json([
            'pedido_id' => $pedido->id,
            'pago_id' => $pago->id,
            'total' => $total,
            'metodo' => $request->metodo,
            'mensaje' => $this->generarMensajeConfirmacion($productos, $total, $request->metodo)
        ]);
    }

    public function procesar(Request $request)
    {
        $request->validate([
            'pedido_id' => 'required|exists:pedidos,id',
            'confirmacion' => 'required|boolean'
        ]);

        $pedido = Pedido::findOrFail($request->pedido_id);

        // Verificar que el pedido pertenece al usuario
        if ($pedido->user_id != Auth::id()) {
            return response()->json(['error' => 'No autorizado'], 403);
        }

        if ($request->confirmacion) {
            // Simular procesamiento de pago
            $pago = Pago::where('pedido_id', $pedido->id)
                ->latest()
                ->firstOrFail();

            $pago->update([
                'estado' => 'completado',
                'referencia' => 'PAY-' . uniqid()
            ]);

            $pedido->update(['estado' => 'completado']);

            // Aquí integrarías con tu pasarela de pago real
            Log::info("Pago procesado para el pedido {$pedido->id}");

            return response()->json([
                'success' => true,
                'mensaje' => "✅ Pago procesado exitosamente. Tu pedido #{$pedido->id} ha sido confirmado. " .
                             "Recibirás un correo con los detalles. ¡Gracias por tu compra!",
                'pago' => $pago
            ]);
        }

        // Si el usuario cancela
        $pedido->update(['estado' => 'cancelado']);

        return response()->json([
            'success' => false,
            'mensaje' => "❌ Pago cancelado. Si cambias de opinión, puedes volver a intentarlo más tarde."
        ]);
    }

    public function show($id)
    {
        $pago = Pago::with(['pedido.productos', 'pedido.user'])
            ->whereHas('pedido', function($query) {
                $query->where('user_id', Auth::id());
            })
            ->findOrFail($id);

        return response()->json($pago);
    }

    private function generarMensajeConfirmacion($productos, $total, $metodo)
    {
        $metodoInfo = collect([
            'tarjeta' => ['nombre' => 'Tarjeta', 'icono' => '💳'],
            'transferencia' => ['nombre' => 'Transferencia', 'icono' => '🏦'],
            'efectivo' => ['nombre' => 'Efectivo', 'icono' => '💵']
        ])->get($metodo, ['nombre' => $metodo, 'icono' => '💲']);

        $mensaje = "✅ Pedido #" . (Pedido::max('id') + 1) . " confirmado!\n\n📦 Productos:\n";
        
        foreach ($productos as $producto) {
            $mensaje .= "- {$producto->nombre} (\${$producto->precio_contado})\n";
        }
        
        $mensaje .= "\n💵 Total: \${$total}\n";
        $mensaje .= "💳 Método de pago: {$metodoInfo['nombre']} {$metodoInfo['icono']}\n\n";
        $mensaje .= "¿Deseas proceder con el pago ahora? (Sí/No)";

        return $mensaje;
    }
}