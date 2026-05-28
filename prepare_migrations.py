import os
import glob

os.chdir('c:/Users/smite/OneDrive/Desktop/client1/backend')

# 1. Clean up duplicate migrations
migrations = sorted(glob.glob('database/migrations/*_create_pages_table.php'))
if len(migrations) > 1:
    os.remove(migrations[0])
    
migrations = sorted(glob.glob('database/migrations/*_add_seo_fields_to_services_table.php'))
if len(migrations) > 0:
    os.remove(migrations[0])

# 2. Get latest migrations
page_migration = sorted(glob.glob('database/migrations/*_create_pages_table.php'))[-1]
service_migration = sorted(glob.glob('database/migrations/*_add_advanced_fields_to_services_table.php'))[-1]

# 3. Write content for Pages migration
page_content = """<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('seo_title')->nullable();
            $table->text('seo_description')->nullable();
            $table->string('seo_keywords')->nullable();
            $table->json('schema_markup')->nullable();
            $table->longText('hero_section')->nullable(); // Can be JSON
            $table->longText('content_blocks')->nullable(); // Flexible JSON building blocks
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pages');
    }
};
"""
with open(page_migration, 'w') as f:
    f.write(page_content)

# 4. Write content for Services migration
service_content = """<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('services', function (Blueprint $table) {
            if (!Schema::hasColumn('services', 'seo_title')) {
                $table->string('seo_title')->nullable();
                $table->text('seo_description')->nullable();
                $table->string('seo_keywords')->nullable();
                $table->string('hero_subtitle')->nullable();
                $table->longText('challenges')->nullable(); // JSON list of challenges
                $table->longText('solutions')->nullable(); // JSON list of solutions/offerings
                $table->longText('faqs')->nullable(); // JSON list of FAQs (Q and A)
                $table->json('metrics')->nullable(); // JSON metrics like "10+", "Years Exp"
            }
        });
    }

    public function down(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn([
                'seo_title', 'seo_description', 'seo_keywords', 
                'hero_subtitle', 'challenges', 'solutions', 'faqs', 'metrics'
            ]);
        });
    }
};
"""
with open(service_migration, 'w') as f:
    f.write(service_content)

print("Migrations prepared successfully.")
