<?php

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
