<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GameController extends Controller
{
    public function index(){
        $games = Game::all();
        return Inertia::render('Index', ['games' => $games]);
    }

    public function list(){
        $games = Game::get();
        return Inertia::render('ListedGames', ['games' => $games]);
    }

    public function add(Request $request){
        if ($request->isMethod('post')) {
            $request->validate([
                'title' => 'required',
                'quantity' => 'required',
                'description' => 'required',
                'imageUrl' => 'required',
                'key' => 'required',
                'price' => 'required',
                
            ]);
            $game = new Game();
            $data = array(
                'title' => $request->input('title'),
                'quantity' => $request->input('quantity'),
                'description' => $request->input('description'),
                'image-link' => $request->input('imageUrl'),
                'key' => $request->input('key'),
                'price' => $request->input('price'),
            );
            $game->create($data);
            return Inertia::render('SellerDashboard');
        }
        return Inertia::render('AddGame');
    }

   
}
