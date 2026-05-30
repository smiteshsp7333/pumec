<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\GlobalSetting;

class GlobalSettingController extends Controller
{
    public function index()
    {
        $settings = GlobalSetting::first();
        
        // Return defaults if no settings found
        if (!$settings) {
            return response()->json([
                'hero_title' => null,
                'hero_subtitle' => null,
                'hero_button_text' => null,
                'hero_button_link' => null,
                'hero_image' => null,
            ]);
        }

        // Generate full URL for the image if it exists
        $data = $settings->toArray();
        if (!empty($data['hero_image'])) {
            $data['hero_image_url'] = asset('storage/' . $data['hero_image']);
        } else {
            $data['hero_image_url'] = null;
        }

        return response()->json($data);
    }
}
