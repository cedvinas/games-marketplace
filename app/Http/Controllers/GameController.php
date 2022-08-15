<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GameController extends Controller
{
    public function index(Request $request)
    {
        $games = Game::all();
        return Inertia::render('Index', ['games' => $games]);
    }

    public function list(Request $request)
    {
        $userId = $request->input('userId');
        $games = Game::where('user_id', '=', $userId)->get();
        return Inertia::render('ListedGames', ['games' => $games]);
    }

    public function add(Request $request)
    {
        if ($request->isMethod('post')) {
            $request->validate(
                [
                    'title' => 'required',
                    'stock' => 'required',
                    'description' => 'required',
                    'imageUrl' => 'required',
                    'key' => 'required',
                    'price' => 'required',
                    'userId' => 'required',
                ]
            );
            $game = new Game();
            $data = array(
                'title' => $request->input('title'),
                'stock' => $request->input('stock'),
                'description' => $request->input('description'),
                'image_link' => $request->input('imageUrl'),
                'key' => $request->input('key'),
                'price' => $request->input('price'),
                'user_id' => $request->input('userId'),
            );
            $game->create($data);
            return Inertia::render('Dashboard');
        }

        return Inertia::render('AddGame');
    }

    public function edit(int $id, Request $request, Game $game)
    {

        $game = Game::where('id', '=', $id)->get();
        if ($request->isMethod('post')) {


            $data = array(
                'title' => $request->input('title'),
                'stock' => $request->input('stock'),
                'description' => $request->input('description'),
                'image_link' => $request->input('imageUrl'),
                'key' => $request->input('key'),
                'price' => $request->input('price'),
            );

            $gameEdit = Game::findOrFail($id);
            $gameEdit->update($data);

            return redirect('/')->with('success', 'Game updated!');
        }


        return Inertia::render('EditGame', ['game' => $game]);
    }

    public function destroy(int $id, Game $game)
    {
        $game = Game::findOrFail($id);
        $game->delete();
        return redirect('/')->with('success', 'Game deleted!');
    }

    public function show(int $id, Game $game)
    {
        $game = Game::findOrFail($id);
        return Inertia::render('ShowGame', ['game' => $game]);
    }
}
