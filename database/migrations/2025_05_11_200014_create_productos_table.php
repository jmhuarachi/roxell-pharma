<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('composicion');
            $table->string('presentacion');
            $table->string('accion_terapeutica');
            $table->string('via_administracion');
            $table->text('indicaciones');
            $table->text('contraindicaciones');
            $table->decimal('precio_contado', 10, 2);
            $table->decimal('precio_credito', 10, 2);
            $table->string('imagen')->nullable();
            $table->integer('stock');
            $table->string('categoria');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('productos');
    }
};