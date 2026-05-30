<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {

        if (Schema::hasTable('blogs')) {
            Schema::table('blogs', function (Blueprint $table) {
                if (!Schema::hasColumn('blogs', 'seo_title')) $table->string('seo_title')->nullable();
                if (!Schema::hasColumn('blogs', 'seo_description')) $table->text('seo_description')->nullable();
                if (!Schema::hasColumn('blogs', 'seo_keywords')) $table->string('seo_keywords')->nullable();
                if (!Schema::hasColumn('blogs', 'schema_markup')) $table->json('schema_markup')->nullable();
            });
        }

        if (Schema::hasTable('services')) {
            Schema::table('services', function (Blueprint $table) {
                if (!Schema::hasColumn('services', 'seo_title')) $table->string('seo_title')->nullable();
                if (!Schema::hasColumn('services', 'seo_description')) $table->text('seo_description')->nullable();
                if (!Schema::hasColumn('services', 'seo_keywords')) $table->string('seo_keywords')->nullable();
                if (!Schema::hasColumn('services', 'schema_markup')) $table->json('schema_markup')->nullable();
            });
        }

        if (Schema::hasTable('careers')) {
            Schema::table('careers', function (Blueprint $table) {
                if (!Schema::hasColumn('careers', 'seo_title')) $table->string('seo_title')->nullable();
                if (!Schema::hasColumn('careers', 'seo_description')) $table->text('seo_description')->nullable();
                if (!Schema::hasColumn('careers', 'seo_keywords')) $table->string('seo_keywords')->nullable();
                if (!Schema::hasColumn('careers', 'schema_markup')) $table->json('schema_markup')->nullable();
            });
        }

        if (Schema::hasTable('team_members')) {
            Schema::table('team_members', function (Blueprint $table) {
                if (!Schema::hasColumn('team_members', 'seo_title')) $table->string('seo_title')->nullable();
                if (!Schema::hasColumn('team_members', 'seo_description')) $table->text('seo_description')->nullable();
                if (!Schema::hasColumn('team_members', 'seo_keywords')) $table->string('seo_keywords')->nullable();
                if (!Schema::hasColumn('team_members', 'schema_markup')) $table->json('schema_markup')->nullable();
            });
        }

        if (Schema::hasTable('testimonials')) {
            Schema::table('testimonials', function (Blueprint $table) {
                if (!Schema::hasColumn('testimonials', 'seo_title')) $table->string('seo_title')->nullable();
                if (!Schema::hasColumn('testimonials', 'seo_description')) $table->text('seo_description')->nullable();
                if (!Schema::hasColumn('testimonials', 'seo_keywords')) $table->string('seo_keywords')->nullable();
                if (!Schema::hasColumn('testimonials', 'schema_markup')) $table->json('schema_markup')->nullable();
            });
        }

        if (Schema::hasTable('client_logos')) {
            Schema::table('client_logos', function (Blueprint $table) {
                if (!Schema::hasColumn('client_logos', 'seo_title')) $table->string('seo_title')->nullable();
                if (!Schema::hasColumn('client_logos', 'seo_description')) $table->text('seo_description')->nullable();
                if (!Schema::hasColumn('client_logos', 'seo_keywords')) $table->string('seo_keywords')->nullable();
                if (!Schema::hasColumn('client_logos', 'schema_markup')) $table->json('schema_markup')->nullable();
            });
        }

    }

    public function down(): void
    {

        if (Schema::hasTable('blogs')) {
            Schema::table('blogs', function (Blueprint $table) {
                $table->dropColumn(['seo_title', 'seo_description', 'seo_keywords', 'schema_markup']);
            });
        }

        if (Schema::hasTable('services')) {
            Schema::table('services', function (Blueprint $table) {
                $table->dropColumn(['seo_title', 'seo_description', 'seo_keywords', 'schema_markup']);
            });
        }

        if (Schema::hasTable('careers')) {
            Schema::table('careers', function (Blueprint $table) {
                $table->dropColumn(['seo_title', 'seo_description', 'seo_keywords', 'schema_markup']);
            });
        }

        if (Schema::hasTable('team_members')) {
            Schema::table('team_members', function (Blueprint $table) {
                $table->dropColumn(['seo_title', 'seo_description', 'seo_keywords', 'schema_markup']);
            });
        }

        if (Schema::hasTable('testimonials')) {
            Schema::table('testimonials', function (Blueprint $table) {
                $table->dropColumn(['seo_title', 'seo_description', 'seo_keywords', 'schema_markup']);
            });
        }

        if (Schema::hasTable('client_logos')) {
            Schema::table('client_logos', function (Blueprint $table) {
                $table->dropColumn(['seo_title', 'seo_description', 'seo_keywords', 'schema_markup']);
            });
        }

    }
};
