<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'total',
        'metodo_pago',
        'estado'
    ];

    public function productos()
    {
        return $this->belongsToMany(Producto::class)
                    ->withPivot('cantidad', 'precio_unitario');
    }

    public function pagos()
    {
        return $this->hasMany(Pago::class);
    }
}