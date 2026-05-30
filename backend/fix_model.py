import re
with open("app/Models/Service.php", "r", encoding="utf-8") as f:
    content = f.read()
replacement = """^<?php
ECHO is on.
namespace App\Models;
ECHO is on.
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
ECHO is on.
class Service extends Model
{
    use HasFactory;
ECHO is on.
    protected $casts = [
        'challenges' => 'array',
        'solutions' => 'array',
        'faqs' => 'array',
        'metrics' => 'array',
        'is_active' => 'boolean',
        'schema_markup' => 'array',
    ];
ECHO is on.
    protected $fillable = ['title', 'slug', 'description', 'icon', 'seo_title', 'seo_description', 'seo_keywords', 'schema_markup', 'hero_subtitle', 'challenges', 'solutions', 'faqs', 'metrics', 'is_active'];
}
"""
with open("app/Models/Service.php", "w", encoding="utf-8") as f:
    f.write(replacement)
