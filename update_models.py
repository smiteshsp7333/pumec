import os

os.chdir('c:/Users/smite/OneDrive/Desktop/client1/backend')

# 1. Create Page Model
page_model_content = """<?php

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
"""
with open('app/Models/Page.php', 'w') as f:
    f.write(page_model_content)

# 2. Update Service Model
service_model_path = 'app/Models/Service.php'
with open(service_model_path, 'r') as f:
    service_model = f.read()

# We need to add casts for new json fields
casts_injection = """
    protected $casts = [
        'challenges' => 'array',
        'solutions' => 'array',
        'faqs' => 'array',
        'metrics' => 'array',
        'is_active' => 'boolean',
    ];
"""

# Replace or add casts to Service model
if 'protected $casts' not in service_model:
    service_model = service_model.replace('protected $fillable', casts_injection + '\n    protected $fillable')
else:
    # If it already exists, just forcefully inject using a safe marker
    service_model = service_model.replace('protected $casts = [', '''protected $casts = [
        'challenges' => 'array',
        'solutions' => 'array',
        'faqs' => 'array',
        'metrics' => 'array',
        'is_active' => 'boolean',
''')

# Update fillable in Service
service_model = service_model.replace("]", ", 'seo_title', 'seo_description', 'seo_keywords', 'hero_subtitle', 'challenges', 'solutions', 'faqs', 'metrics']")
with open(service_model_path, 'w') as f:
    f.write(service_model)

print("Models Updated")
