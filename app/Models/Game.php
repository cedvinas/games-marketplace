<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    

    protected $fillable = [
        'title',
        'description',
        'price',
        'quantity',
        'key',
        'image_link',
        'user_id',
    ];

    
}
