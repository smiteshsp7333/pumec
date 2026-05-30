import os
import glob
import re
from datetime import datetime

base_dir = r"C:\Users\smite\OneDrive\Desktop\client1\backend"

# Tables to add SEO fields to
tables = ['blogs', 'services', 'careers', 'team_members', 'testimonials', 'client_logos']
models = ['Blog', 'Service', 'Career', 'TeamMember', 'Testimonial', 'ClientLogo']
resources = ['BlogResource', 'ServiceResource', 'CareerResource', 'TeamMemberResource', 'TestimonialResource', 'ClientLogoResource']

# 1. Create Migration
timestamp = datetime.now().strftime('%Y_%m_%d_%H%M%S')
migration_path = os.path.join(base_dir, f"database/migrations/{timestamp}_add_seo_fields_to_models.php")

migration_content = """<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
"""
for table in tables:
    migration_content += f"""
        if (Schema::hasTable('{table}')) {{
            Schema::table('{table}', function (Blueprint $table) {{
                if (!Schema::hasColumn('{table}', 'seo_title')) $table->string('seo_title')->nullable();
                if (!Schema::hasColumn('{table}', 'seo_description')) $table->text('seo_description')->nullable();
                if (!Schema::hasColumn('{table}', 'seo_keywords')) $table->string('seo_keywords')->nullable();
                if (!Schema::hasColumn('{table}', 'schema_markup')) $table->json('schema_markup')->nullable();
            }});
        }}
"""

migration_content += """
    }

    public function down(): void
    {
"""
for table in tables:
    migration_content += f"""
        if (Schema::hasTable('{table}')) {{
            Schema::table('{table}', function (Blueprint $table) {{
                $table->dropColumn(['seo_title', 'seo_description', 'seo_keywords', 'schema_markup']);
            }});
        }}
"""

migration_content += """
    }
};
"""
with open(migration_path, "w", encoding="utf-8") as f:
    f.write(migration_content)

print("Created migration", migration_path)

# 2. Update Filament Resources
seo_section = """
                \\Filament\\Forms\\Components\\Section::make('SEO & Meta Data')
                    ->description('Manage search engine optimization settings for this entry.')
                    ->schema([
                        \\Filament\\Forms\\Components\\TextInput::make('seo_title')
                            ->label('Meta Title')
                            ->maxLength(255),
                        \\Filament\\Forms\\Components\\TextInput::make('seo_keywords')
                            ->label('Meta Keywords')
                            ->maxLength(255),
                        \\Filament\\Forms\\Components\\Textarea::make('seo_description')
                            ->label('Meta Description')
                            ->maxLength(65535)
                            ->columnSpanFull(),
                        \\Filament\\Forms\\Components\\KeyValue::make('schema_markup')
                            ->label('Schema.org JSON-LD')
                            ->columnSpanFull(),
                    ])->collapsed(),
"""

for res in resources:
    res_path = os.path.join(base_dir, f"app/Filament/Resources/{res}.php")
    if os.path.exists(res_path):
        with open(res_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        if "seo_title" not in content and "Schema::make('SEO" not in content:
            # Find the Schema array component
            match = re.search(r'->schema\(\[\s*', content)
            if match:
                # Insert SEO section before the end of the schema array, or at the start
                pos = match.end()
                new_content = content[:pos] + seo_section + content[pos:]
                with open(res_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {res}")
            else:
                print(f"Could not find schema block in {res}")
    else:
        print(f"Resource {res} not found")

# 3. Update Models to cast schema_markup to array
for model in models:
    model_path = os.path.join(base_dir, f"app/Models/{model}.php")
    if os.path.exists(model_path):
        with open(model_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        if "schema_markup" not in content:
            if "protected $casts = [" in content:
                content = content.replace("protected $casts = [", "protected $casts = [\n        'schema_markup' => 'array',")
            else:
                pos = content.rfind("}")
                if pos != -1:
                    casts_code = "\n    protected $casts = [\n        'schema_markup' => 'array',\n    ];\n"
                    content = content[:pos] + casts_code + content[pos:]
            with open(model_path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated Model {model}")
