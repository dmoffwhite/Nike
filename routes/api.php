<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);
Route::get('product', [ProductController::class, 'index']);
Route::post('productCreate', [ProductController::class, 'store']);
Route::get('/product/{id}',[ProductController::class, 'show']);
Route::post('/product/edit/{id}',[ProductController::class, 'edit']);
Route::post('/product/destroy/{id}',[ProductController::class, 'destroy']);
Route::get('/search/product', [ProductController::class, 'search']);
Route::get('/product/category/{id}', [ProductController::class, 'showCategory']);


Route::middleware('auth:api')->group( function (){
  //  Route::get('student_index', [StudentController::class, 'index']);
  Route::post('/cartCreate', [PurchaseController::class, 'store']);
  Route::get('/cart', [PurchaseController::class, 'index']);
  Route::delete('/cart/{purchase}', [PurchaseController::class, 'destroy']);
});

Route::middleware('auth:sanctum')->get('/user', function(Request $request){
    return $request->user();
});