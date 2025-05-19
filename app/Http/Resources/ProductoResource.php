<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductoResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            'composicion' => $this->composicion,
            'presentacion' => $this->presentacion,
            'accion_terapeutica' => $this->accion_terapeutica,
            'via_administracion' => $this->via_administracion,
            'indicaciones' => $this->indicaciones,
            'contraindicaciones' => $this->contraindicaciones,
            'precio_contado' => $this->precio_contado,
            'precio_credito' => $this->precio_credito,
            'imagen' => $this->imagen,
            'stock' => $this->stock,
            'categoria' => $this->categoria,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}