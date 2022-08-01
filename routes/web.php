<?php

use App\Http\Controllers\GameController;
use App\Http\Controllers\UserController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', [GameController::class, 'index']);
Route::prefix('/dashboard')->group(function () {
    Route::get('/add', [GameController::class, 'add']);
    Route::post('/add', [GameController::class, 'add']);
    Route::get('/listedgames', [GameController::class, 'list']);
});

Route::resource('games', GameController::class);

Route::post('addsellerrole', [UserController::class, 'addSellerRole'])->name('addSellerRole');

require __DIR__.'/auth.php';
