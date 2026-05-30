<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PageResource\Pages;
use App\Models\Page;
use Filament\Forms;
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Schemas\Components\Section;

class PageResource extends Resource
{
    protected static ?string $model = Page::class;
    protected static string|\BackedEnum|null $navigationIcon = 'heroicon-o-document-text';
    protected static string|\UnitEnum|null $navigationGroup = 'Content Management';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Page Details')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('slug')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\Toggle::make('is_active')
                            ->label('Active/Published')
                            ->default(true),
                    ])->columns(2),

                Section::make('SEO Data')
                    ->schema([
                        Forms\Components\TextInput::make('seo_title')->maxLength(255),
                        Forms\Components\Textarea::make('seo_description')->columnSpanFull(),
                        Forms\Components\TextInput::make('seo_keywords')->maxLength(255),
                        Forms\Components\KeyValue::make('schema_markup')
                            ->label('JSON-LD Schema Overrides')
                            ->columnSpanFull(),
                    ])->collapsed(),

                Section::make('Content Builder (Blocks)')
                    ->schema([
                        Forms\Components\Builder::make('content_blocks')
                            ->blocks([
                                Forms\Components\Builder\Block::make('hero')
                                    ->schema([
                                        Forms\Components\TextInput::make('heading')->required(),
                                        Forms\Components\Textarea::make('subheading'),
                                        Forms\Components\TextInput::make('cta_text'),
                                        Forms\Components\TextInput::make('cta_link'),
                                        Forms\Components\FileUpload::make('banner_image')
                                            ->image()
                                            ->directory('pages/hero')
                                            ->columnSpanFull(),
                                    ]),
                                Forms\Components\Builder\Block::make('text_section')
                                    ->schema([
                                        Forms\Components\TextInput::make('heading'),
                                        Forms\Components\RichEditor::make('content'),
                                    ]),
                                Forms\Components\Builder\Block::make('faqs')
                                    ->schema([
                                        Forms\Components\Repeater::make('questions')
                                            ->schema([
                                                Forms\Components\TextInput::make('question')->required(),
                                                Forms\Components\Textarea::make('answer')->required(),
                                            ])
                                    ]),
                            ])
                            ->columnSpanFull()
                            ->collapsible()
                    ])

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->searchable(),
                Tables\Columns\TextColumn::make('slug'),
                Tables\Columns\IconColumn::make('is_active')->boolean(),
                Tables\Columns\TextColumn::make('updated_at')->dateTime()->sortable(),
            ])
            ->filters([])
            ->actions([
                \Filament\Actions\EditAction::make(),
            ])
            ->bulkActions([
                \Filament\Actions\BulkActionGroup::make([
                    \Filament\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPages::route('/'),
            'create' => Pages\CreatePage::route('/create'),
            'edit' => Pages\EditPage::route('/{record}/edit'),
        ];
    }
}
