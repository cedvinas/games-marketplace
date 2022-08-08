<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function listAllGames()
    {
        $games = Game::all();
        return Inertia::render('Admin/AllGames', ['games' => $games]);
    }

    public function destroyGame(int $id, Game $game)
    {
        $game = Game::findOrFail($id);
        $game->delete();
        return redirect('/')->with('success', 'Game removed!');
    }

    public function listAllUsers(){
        $users = User::all();
        return Inertia::render('Admin/AllUsers', ['users' => $users]);


        
    }
}
