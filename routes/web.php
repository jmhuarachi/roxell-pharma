<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReactController;
use Inertia\Inertia;
use App\Http\Controllers\ProductoController;

// Rutas públicas
Route::get('/', function () {
    return Inertia::render('HomePage');
})->name('home');
    
Route::get('/home', function () {
    return Inertia::render('HomePage');
})->name('home');
Route::get('/productos', function () {
    return Inertia::render('ProductosPage');
})->name('productos');

// Ruta corregida para productos (solo una definición)
//Route::get('/productos', [ProductoController::class, 'index'])->name('ProductosPage');
// Route::get('/productos', function () {
//     return Inertia::render('ProductosPage');
// });
Route::get('/about', function () {
    return Inertia::render('AboutPage');
})->name('about');

Route::get('/nosotros', function () {
    return Inertia::render('AboutPage');
})->name('about');

Route::get('/pedidos', function () {
    return Inertia::render('PedidosPage');
})->name('pedidos');

Route::get('/nuevo', function () {
    return Inertia::render('NuevoPage');
})->name('nuevo');

Route::get('/recursos', function () {
    return Inertia::render('RecursosPage');
})->name('recursos');

Route::get('/admin', function () {
    return Inertia::render('AdminPage');
})->name('admin');

Route::get('/farmacovigilancia', function () {
    return Inertia::render('FarmacovigilanciaPage');
})->name('farmacovigilancia');

Route::get('/contacto', function () {
    return Inertia::render('ContactoPage');
})->name('contacto');

Route::get('/politicas', function () {
    return Inertia::render('PoliticasPage');
})->name('politicas');

Route::get('/terminos', function () {
    return Inertia::render('TerminosPage');
})->name('terminos');

Route::get('/politicas-de-privacidad', function () {
    return Inertia::render('PoliticasPrivacidadPage');
})->name('politicas-privacidad');

Route::get('/politicas-de-cookies', function () {
    return Inertia::render('PoliticasCookiesPage');
})->name('politicas-cookies');

// Rutas de autenticación
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

require __DIR__.'/auth.php';