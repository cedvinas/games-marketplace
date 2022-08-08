<?php

use App\Http\Controllers\AdminController;
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

    Route::prefix('/admin')->group(function (){
        Route::get('/game/listall', [AdminController::class, 'listAllGames']);
        Route::get('/game/delete/{id}', [AdminController::class, 'destroyGame']);
        Route::get('/users/listall', [AdminController::class, 'listAllUsers']);
    });
});
// Route::resource('games', GameController::class);

Route::prefix('/cart')->group(function(){
    Route::get('/show', [CartController::class, 'show']);
    Route::get('/add/{id}', [CartController::class, 'add']);
});


Route::get('/game/{id}', [GameController::class, 'show']);

Route::post('addsellerrole', [UserController::class, 'addSellerRole'])->name('addSellerRole');
Route::match(['get', 'post'],'/dashboard', [UserController::class, 'checkRole'])->name('checkRole');
Route::post('/dashboard', [UserController::class, 'checkRole'])->name('checkRole');


require __DIR__.'/auth.php';
