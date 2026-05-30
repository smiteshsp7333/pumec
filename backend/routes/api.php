<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\TeamController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\ClientLogoController;
use App\Http\Controllers\Api\CareerController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\GlobalSettingController;

Route::get('/global-settings', [GlobalSettingController::class, 'index']);

Route::get('/services', [ServiceController::class, 'index']);
Route::get('/blogs', [BlogController::class, 'index']);
Route::get('/team', [TeamController::class, 'index']);
Route::get('/testimonials', [TestimonialController::class, 'index']);
Route::get('/client-logos', [ClientLogoController::class, 'index']);
Route::get('/careers', [CareerController::class, 'index']);

Route::post('/contact', [ContactController::class, 'store']);

use App\Http\Controllers\Api\PageController;

Route::get('/pages', [PageController::class, 'index']);
Route::get('/pages/{slug}', [PageController::class, 'show']);
