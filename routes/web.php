<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/{path?}', 'welcome')
 ->where('path', '.*');

Route::post('student_index', [StudentController::class, 'index']);
Route::get('get_token', [StudentController::class, 'get_token']);
Route::post('store_request', [StudentController::class, 'store']);
Route::post('destroy', [StudentController::class, 'destroy']);
Route::post('update', [StudentController::class, 'update']);


