import os

service_form_content = """<?php

namespace App\Filament\Resources\Services\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Section;
use Filament\Schemas\Schema;

class ServiceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Core Details')
                    ->schema([
                        TextInput::make('title')->required(),
                        TextInput::make('slug')->required(),
                        TextInput::make('hero_subtitle')->label('Hero Subtitle / Description')->columnSpanFull(),
                        Textarea::make('description')
                            ->label('Short Description')
                            ->required()
                            ->columnSpanFull(),
                        TextInput::make('icon')->label('Lucide Icon Name'),
                    ])->columns(2),

                Section::make('SEO Data')
                    ->schema([
                        TextInput::make('seo_title'),
                        Textarea::make('seo_description'),
                        TextInput::make('seo_keywords'),
                    ])->collapsed(),

                Section::make('Advanced Content Blocks')
                    ->schema([
                        Repeater::make('faqs')
                            ->label('FAQ Schema block')
                            ->schema([
                                TextInput::make('question')->required(),
                                Textarea::make('answer')->required(),
                            ])
                            ->columnSpanFull()
                            ->collapsed(),

                        Repeater::make('solutions')
                            ->label('Solutions & Offerings')
                            ->schema([
                                TextInput::make('title')->required(),
                                Textarea::make('description')->required(),
                            ])
                            ->columns(2)
                            ->columnSpanFull()
                            ->collapsed(),

                        Repeater::make('challenges')
                            ->label('Challenge Matrix')
                            ->schema([
                                TextInput::make('title')->required(),
                                Textarea::make('description')->required(),
                            ])
                            ->columns(2)
                            ->columnSpanFull()
                            ->collapsed(),

                        Repeater::make('metrics')
                            ->label('Metrics & Case Studies Highlights')
                            ->schema([
                                TextInput::make('label')->required()->placeholder('e.g. 500+'),
                                TextInput::make('value')->required()->placeholder('e.g. Clients Served'),
                            ])
                            ->columns(2)
                            ->columnSpanFull()
                            ->collapsed(),
                    ])
            ]);
    }
}
"""

with open('c:/Users/smite/OneDrive/Desktop/client1/backend/app/Filament/Resources/Services/Schemas/ServiceForm.php', 'w') as f:
    f.write(service_form_content)

print("ServiceForm updated successfully for complex CMS data!")
