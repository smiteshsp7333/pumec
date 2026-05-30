<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientLogo extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'logo_url'];

    protected $casts = [
        'schema_markup' => 'array',
    ];
}
