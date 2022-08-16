<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BasketController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CartController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });



Route::get('/', [GameController::class, 'index']);
Route::prefix('/dashboard')->group(function () {
    Route::get('/add', [GameController::class, 'add']);
    Route::post('/add', [GameController::class, 'add']);
    Route::post('/edit/{id}', [GameController::class, 'edit']);
    Route::get('/edit/{id}', [GameController::class, 'edit']);
    Route::match(['get', 'post'], '/listedgames', [GameController::class, 'list']);
    Route::get('/delete/{id}', [GameController::class, 'destroy']);
    Route::prefix('/order')->group(function () {
        Route::get('/history/{id}', [UserController::class, 'orderHistory']);
    });

    Route::prefix('/admin')->group(function () {
        Route::get('/game/listall', [AdminController::class, 'listAllGames']);
        Route::get('/game/delete/{id}', [AdminController::class, 'destroyGame']);
        Route::get('/users/listall', [AdminController::class, 'listAllUsers']);
        Route::get('/delete/user/{id}', [AdminController::class, 'deleteUser']);
    });
});

Route::prefix('/cart')->group(function () {
    Route::get('/show', [BasketController::class, 'getBasket']);
    Route::post('/add', [BasketController::class, 'addItem'])->name('add.item');
    Route::post('/checkout', [BasketController::class, 'checkout']);
    Route::get('/clear', [BasketController::class, 'clear']);
});


Route::get('/game/{id}', [GameController::class, 'show']);

Route::post('addsellerrole', [UserController::class, 'addSellerRole'])->name('addSellerRole');
Route::get('/dashboard', [UserController::class, 'dashboard']);


require __DIR__ . '/auth.php';
