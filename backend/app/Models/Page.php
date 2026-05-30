<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $guarded = [];

    protected $casts = [
        'schema_markup' => 'array',
        'hero_section' => 'array',
        'content_blocks' => 'array',
        'is_active' => 'boolean',
    ];
}
