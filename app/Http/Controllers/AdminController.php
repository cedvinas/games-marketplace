<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function listAllGames()
    {
        if (Auth::check()) {
            $games = Game::all();
            return Inertia::render('Admin/AllGames', ['games' => $games]);
        }
        return redirect('/')->with('error', "You're not an administrator!");
    }

    public function destroyGame(int $id, Game $game)
    {
        if (Auth::check()) {
            $game = Game::findOrFail($id);
            $game->delete();
            return redirect('/')->with('success', 'Game removed!');
        }
        return redirect('/')->with('error', "You're not an administrator!");
    }

    public function listAllUsers()
    {
        if (Auth::check()) {
            $users = User::all();
            return Inertia::render('Admin/AllUsers', ['users' => $users]);
        }
        return redirect('/')->with('error', "You're not an administrator!");
    }

    public function deleteUser(int $id)
    {
        if (Auth::check()) {
            $user = User::findOrFail($id);
            $user->delete();
            return redirect('/')->with('success', 'User removed!');
        }
        return redirect('/')->with('error', "You're not an administrator!");
    }
}
