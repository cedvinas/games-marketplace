<?php

namespace App\DTO;

class Basket implements \JsonSerializable
{
    /** @var iterable|array|BasketItem[]  */
    private iterable $items;

    private int $totalPrice;

    public function __construct()
    {
        $this->items = [];
        $this->totalPrice = 0;
    }

    public function setTotalPrice(int $totalPrice): void
    {
        $this->totalPrice = $totalPrice;
    }

    public function setItems(iterable $items): void
    {
        $this->items = $items;
    }

    public function getItem(int $gameId): BasketItem
    {
        return $this->items[$gameId];
    }

    public function hasItem(int $gameId): bool
    {
        return isset($this->items[$gameId]);
    }

    public function addItem(BasketItem $item): void
    {
        $this->items[$item->getGameId()] = $item;
    }

    public function removeItem(int $gameId): void
    {
        if ($this->hasItem($gameId)) {
            unset($this->items[$gameId]);
        }
    }

    /**
     * @return iterable|BasketItem[]|array
     */
    public function getItems(): iterable
    {
        return $this->items;
    }

    public function getTotalPrice(): int
    {
        return $this->totalPrice;
    }

    public function jsonSerialize():array 
    {
       return [
           'items' => array_values($this->items),
           'totalPrice' => $this->totalPrice,
       ];
   }
}