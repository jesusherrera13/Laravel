<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::resource('/blog', App\Http\Controllers\BlogController::class)->only(['index', 'store', 'update', 'show', 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});