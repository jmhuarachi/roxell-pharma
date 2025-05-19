<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'composicion',
        'presentacion',
        'accion_terapeutica',
        'via_administracion',
        'indicaciones',
        'contraindicaciones',
        'precio_contado',
        'precio_credito',
        'imagen',
        'stock',
        'categoria'
    ];
}