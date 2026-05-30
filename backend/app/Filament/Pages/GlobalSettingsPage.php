<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;
use App\Models\GlobalSetting;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Forms\Form;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;

class GlobalSettingsPage extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string|\BackedEnum|null $navigationIcon = 'heroicon-o-cog';
    protected static string|\UnitEnum|null $navigationGroup = 'Site Management';
    protected static ?int $navigationSort = 100;
    protected string $view = 'filament.pages.global-settings-page';
    protected static ?string $title = 'Global Website Settings';

    public ?array $data = [];

    public function mount(): void
    {
        $settings = GlobalSetting::first();
        if ($settings) {
            $this->getSchema('form')->fill($settings->toArray());
        } else {
            $this->getSchema('form')->fill();
        }
    }

    public function form(\Filament\Schemas\Schema $schema): \Filament\Schemas\Schema
    {
        return $schema
            ->components([
                Section::make('General Meta / SEO Information')
                    ->description('These fields are used across the website for title tags, descriptions and contact headers.')
                    ->schema([
                        TextInput::make('site_name')->label('Website Name / Title')->columnSpanFull(),
                        TextInput::make('primary_email')->label('Contact Email'),
                        TextInput::make('primary_phone')->label('Contact Phone'),
                        TextInput::make('address')->label('Physical Address')->columnSpanFull(),
                        
                        TextInput::make('meta_title')->label('Global Meta Title')->columnSpanFull(),
                        Textarea::make('meta_description')->label('Global Meta Description')->columnSpanFull(),
                        TextInput::make('meta_keywords')->label('Global Meta Keywords (comma separated)')->columnSpanFull(),
                    ])->columns(2),

                Section::make('Hero & Headers')
                    ->description('Edit the main heading texts presented on the front interface.')
                    ->schema([
                        \Filament\Forms\Components\FileUpload::make('hero_image')->label('Hero Background Image')
                            ->image()
                            ->directory('hero_images')
                            ->columnSpanFull(),
                        TextInput::make('hero_title')->label('Hero Call-to-action Title'),
                        TextInput::make('hero_button_text')->label('Hero Button Text'),
                        TextInput::make('hero_button_link')->label('Hero Button URL'),
                        Textarea::make('hero_subtitle')->label('Hero Subtitle / Paragraph')->columnSpanFull(),
                    ])->columns(2)->collapsed(),

                Section::make('Intro & Service Paragraphs')
                    ->schema([
                        TextInput::make('about_heading')->label('About Section Heading'),
                        Textarea::make('about_paragraph')->label('About Section Paragraph / Body Text'),
                        
                        TextInput::make('services_heading')->label('Services Section Heading'),
                        Textarea::make('services_paragraph')->label('Services Description Text'),
                    ])->columns(1)->collapsed(),

                Section::make('Footer')
                    ->schema([
                        TextInput::make('footer_text')->label('Footer copyright or text tag'),
                    ])->collapsed(),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        $data = $this->getSchema('form')->getState();
        $settings = GlobalSetting::first();
        if ($settings) {
            $settings->update($data);
        } else {
            GlobalSetting::create($data);
        }

        Notification::make()
            ->title('Settings have been saved successfully.')
            ->success()
            ->send();
    }
} 
