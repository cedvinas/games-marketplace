<?php

namespace App\Services\Basket;

use App\DTO\Basket;
use App\DTO\BasketItem;
use App\Models\Auction;
use App\Models\Game;

class BasketManager
{
    private BasketSessionStorage $basketSessionStorage;

    public function __construct(BasketSessionStorage $basketSessionStorage)
    {
        $this->basketSessionStorage = $basketSessionStorage;
    }

    public function addItem(Game $game, int $quantity = 1): void
    {
        $basket = $this->getBasket();

        if ($basket->hasItem($game->id)) {
            $basketItem = $basket->getItem($game->id);
            $basketItem->setQuantity($basketItem->getQuantity() + $quantity);
        } else {
            $basketItem = new BasketItem(
                $game->id,
                $game->title,
                $game->price,
                $quantity,
                $game->key,
                $game->stock,
                $game->price * $game->quantity,
            );


            $basket->addItem($basketItem);
        }

        $this->recalculate();

        //Jeigu būčiau sylius saugočiau į DB
        $this->basketSessionStorage->store($basket);
//        Session::put('basket', $basket);

    }

    public function removeItem(int $gameId): void
    {
        $basket = $this->getBasket();

        if ($basket->hasItem($gameId)) {
            $basket->removeItem($gameId);
            $this->recalculate();
//            Session::put('basket', $basket);
            $this->basketSessionStorage->store($basket);
        }
//        else {
//            throw new \InvalidArgumentException('Invalid product id Provided');
//        }
        // else jei norim galim mesti exception
    }

    public function changeQuantity(int $gameId, int $quantity): void
    {
        $basket = $this->getBasket();

        if ($basket->hasItem($gameId)) {
            $basketItem = $basket->getItem($gameId);
            $basketItem->setQuantity($quantity);
            $this->recalculate();
//            Session::put('basket', $basket);
            $this->basketSessionStorage->store($basket);
        }
    }

    public function recalculate(): void
    {
        $basket = $this->getBasket();
        $total = 0;

        foreach ($basket->getItems() as $item) {
            $total += $item->getQuantity() * $item->getUnitPrice();
        }

        //apply discount

        $basket->setTotalPrice($total);
    }

    public function getBasket(): Basket
    {
        $basket = $this->basketSessionStorage->get();

        return $basket ?: new Basket();
    }

    public function clear(): void
    {
        //jeigu būčiau sylius trinčiau record iš db
        //Session::remove('basket');
        $this->basketSessionStorage->clear();
    }
}