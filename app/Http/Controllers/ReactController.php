<?php
// app/Http/Controllers/ReactController.php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Producto;

class ReactController extends Controller
{
    public function showProductos()
    {
        return Inertia::render('Productos/ProductosPage', [
            'initialProducts' => Producto::select([
                'id',
                'nombre',
                'composicion',
                'presentacion',
                'accion_terapeutica',
                'via_administracion',
                'indicaciones',
                'imagen',
                'precio_contado'
            ])->get()
        ]);
    }
}