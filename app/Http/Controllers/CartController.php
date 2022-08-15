<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    public function show(Request $request)
    {
        $gameIds = $request->session()->get('gameIds');
        $games = $this->getGamesById($gameIds);
        return Inertia::render('Cart', ['games' => $games]);
    }

    public function add(int $id, Request $request)
    {

        $request->session()->push('gameIds', $id);
        return redirect('/')->with('success', 'Game added to cart!');
    }

    public function getGamesById($gameIds)
    {
        $games = Game::findMany($gameIds);
        return $games;
    }
}
