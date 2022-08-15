<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\Basket\BasketManager;
use Illuminate\Http\Request;
use App\Models\Game;
use App\Models\Order;
use App\Models\User;
use Inertia\Inertia;

class BasketController extends Controller
{
    private BasketManager $basketManager;

    public function __construct(BasketManager $basketManager)
    {
        $this->basketManager = $basketManager;
    }

    public function addItem(Request $request)
    {
        $game = Game::find($request->gameId);
        $quantity = $request->quantity;
        $this->basketManager->addItem($game, $quantity);
        return redirect('/')->with('success', 'Game added to cart!');
    }

    public function getBasket()
    {
        $basket = $this->basketManager->getBasket();
        return Inertia::render('Cart', ['basket' => $basket]);
    }



    public function checkout(Request $request, Game $game)
    {
        if ($request->isMethod('post')) {
            $data = $request->all();
            $user = User::find($data[1]);
            $gameList = [];
            $total = 0;
            foreach ($data[0] as $game) {
                array_push(
                    $gameList,
                    [
                        'title' => $game['title'],
                        'amount' => $game['quantity'],
                        'key' => $game['key'],
                        'gameId' => $game['gameId'],
                    ]
                );

                $total += $game['total'];
            };
            if ($total > 0) {
                $gameList = json_encode($gameList);
                Order::create([
                    'user_id' => $user->id,
                    'games' => $gameList,
                    'total' => $total,
                ]);
                $this->basketManager->clear();
                return redirect('/')->with('success', 'Order confirmed!');
            }
            return redirect('/')->with('error', 'Something went wrong!');
        }
    }

    public function clear()
    {
        $this->basketManager->clear();
        return redirect('/cart/show');
    }
}
