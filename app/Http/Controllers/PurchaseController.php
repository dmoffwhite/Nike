<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Purchase;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;

class PurchaseController extends Controller
{
    public function store(Request $request)
    {
        $product = Product::findOrFail($request->input('product_id'));

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
        $purchases = Purchase::with('product')->where('user_id', Auth::id())->get();

        return response()->json([
            'purchases' => $purchases,
        ]);
    }

    public function destroy($id)
    {
        $purchase = Purchase::findOrFail($id);

        // Verificar si el usuario autenticado es el propietario de la compra
        if ($purchase->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $purchase->delete();

        return response()->json(['message' => 'Purchase deleted successfully']);
    }
}
