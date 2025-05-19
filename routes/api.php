<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\PagoController;

Route::get('/productos', [ProductoController::class, 'index']);
Route::get('/productos/categorias', [ProductoController::class, 'getCategorias']);
Route::get('/productos/buscar', [ProductoController::class, 'buscar']);
Route::get('/productos/categoria/{categoria}', [ProductoController::class, 'porCategoria']);

// Endpoints para el chatbot
Route::post('/chatbot', [ChatbotController::class, 'handle']);
Route::post('/pago/iniciar', [PagoController::class, 'iniciar']);
Route::post('/pago/procesar', [PagoController::class, 'procesar']);
Route::get('/metodos-pago', [PagoController::class, 'metodosDisponibles']);

// Rutas para pedidos
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/pedidos', [PedidoController::class, 'index']);
    Route::post('/pedidos', [PedidoController::class, 'store']);
    Route::get('/pedidos/{id}', [PedidoController::class, 'show']);
    Route::put('/pedidos/{id}', [PedidoController::class, 'update']);
    Route::delete('/pedidos/{id}', [PedidoController::class, 'destroy']);
    
    // Rutas para pagos
    Route::get('/pagos', [PagoController::class, 'index']);
    Route::get('/pagos/{id}', [PagoController::class, 'show']);
});

// Rutas públicas para el chatbot
Route::get('/metodos-pago', [PagoController::class, 'metodosDisponibles']);
Route::post('/pago/iniciar', [PagoController::class, 'iniciar']);
Route::post('/pago/procesar', [PagoController::class, 'procesar']);