<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\odels\Producto;
class ChatbotController extends Controller
{
    public function handle(Request $request)
    {
        $message = strtolower(trim($request->input('message')));
        $history = $request->input('history', []);

        // Búsqueda de productos
        if (str_contains($message, 'producto') || str_contains($message, 'buscar')) {
            $term = str_replace(['producto', 'productos', 'buscar', 'encontrar'], '', $message);
            $products = Producto::where('nombre', 'like', "%$term%")
                ->orWhere('descripcion', 'like', "%$term%")
                ->orWhere('categoria', 'like', "%$term%")
                ->limit(5)
                ->get();

            return response()->json([
                'response' => $this->formatProductsResponse($products)
            ]);
        }

        // Consulta de categorías
        if (str_contains($message, 'categoría') || str_contains($message, 'categorias')) {
            $categories = Producto::select('categoria')
                ->distinct()
                ->pluck('categoria');

            return response()->json([
                'response' => $this->formatCategoriesResponse($categories)
            ]);
        }

        // Ofertas
        if (str_contains($message, 'oferta') || str_contains($message, 'promoción')) {
            $products = Producto::where('en_oferta', true)
                ->limit(3)
                ->get();

            return response()->json([
                'response' => $this->formatProductsResponse($products, 'Ofertas especiales:')
            ]);
        }

        // Respuesta por defecto
        return response()->json([
            'response' => 'Puedo ayudarte a buscar productos o mostrarte categorías. ' .
                         'Por ejemplo, puedes preguntar: "¿Qué productos tienen para dolor de cabeza?" o ' .
                         '"¿Qué categorías de medicamentos tienen?"'
        ]);
    }

    private function formatProductsResponse($products, $title = 'Productos encontrados:')
    {
        if ($products->isEmpty()) {
            return "No encontré productos que coincidan con tu búsqueda.";
        }

        $response = "🔍 $title\n\n";
        foreach ($products as $product) {
            $response .= "• {$product->nombre}\n";
            $response .= "  💵 Precio: \${$product->precio_contado}";
            if ($product->precio_credito) {
                $response .= " (crédito: \${$product->precio_credito})";
            }
            $response .= "\n";
            $response .= "  📦 Stock: {$product->stock}\n";
            $response .= "  📝 {$product->accion_terapeutica}\n\n";
        }

        return $response;
    }

    private function formatCategoriesResponse($categories)
    {
        if ($categories->isEmpty()) {
            return "No hay categorías disponibles en este momento.";
        }

        $response = "📋 Categorías disponibles:\n\n";
        foreach ($categories as $category) {
            $response .= "• " . ucfirst($category) . "\n";
        }

        return $response . "\n¿Qué categoría te interesa? Puedes preguntar por ejemplo: 'Mostrar productos de analgesicos'";
    }
}