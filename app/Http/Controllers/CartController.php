<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Cart;
use App\Models\Purchase;
use Illuminate\Support\Facades\Auth;



class CartController extends Controller
{
    public function store(Request $request)
    {

        $product = Cart::findOrFail($request->input('product_id'));

        $purchase = new Purchase([
            'product_id' => $product->id,
            'quantity' => $request->input('quantity'),
            'price' => $product->price * $request->input('quantity'),
            'user_id' => Auth::id(),
            'purchased_at' => now(),
        ]);

        $purchase->save();

        return response()->json([
            'message' => 'Purchase saved successfully!',
            'purchase' => $purchase,
        ]);
    }

    public function index()
    {
        $purchases = Cart::with('product')->where('user_id', Auth::id())->get();

        return response()->json([
            'purchases' => $purchases,
        ]);
    }
}
