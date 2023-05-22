<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'id',
        'name',
        'description',
        'image',
        'price',
        'stock',
        'tipo',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
