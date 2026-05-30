<?php  
namespace App\Models;  
use Illuminate\Database\Eloquent\Factories\HasFactory;  
use Illuminate\Database\Eloquent\Model;  
class Service extends Model  
{  
    use HasFactory;  
    protected $casts = [  
        'challenges' => 'array',  
        'solutions' => 'array',  
        'faqs' => 'array',  
        'metrics' => 'array',  
        'is_active' => 'boolean',  
        'schema_markup' => 'array',  
    ];  
    protected $fillable = ['banner_image', 'title', 'slug', 'description', 'icon', 'seo_title', 'seo_description', 'seo_keywords', 'schema_markup', 'hero_subtitle', 'challenges', 'solutions', 'faqs', 'metrics', 'is_active'];  
} 
