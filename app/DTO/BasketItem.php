<?php

namespace App\DTO;

class BasketItem
{

    public int $gameId;

    public string $title;

    public int $unitPrice;

    public int $quantity;

    public function __construct(
        int $gameId,
        string $title,
        int $unitPrice,
        int $quantity,
        string $key,
        int $stock,
        int $total,
    ) {
        $this->gameId = $gameId;
        $this->title = $title;
        $this->quantity = $quantity;
        $this->unitPrice = $unitPrice;
        $this->key = $key;
        $this->stock = $stock;
        $this->total = $unitPrice * $quantity;
    }

    public function getGameId(): int
    {
        return $this->gameId;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getUnitPrice(): int
    {
        return $this->unitPrice;
    }

    public function getQuantity(): int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): void
    {
        $this->quantity = $quantity;
    }
}