import os
os.chdir('c:/Users/smite/OneDrive/Desktop/client1/backend')

# 1. Create PageResource for Filament CMS
page_resource_content = """<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PageResource\Pages;
use App\Models\Page;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\Section;

class PageResource extends Resource
{
    protected static ?string $model = Page::class;
    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    protected static ?string $navigationGroup = 'Content Management';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
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
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
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
"""
os.makedirs('app/Filament/Resources/PageResource/Pages', exist_ok=True)
with open('app/Filament/Resources/PageResource.php', 'w') as f:
    f.write(page_resource_content)

# 2. Create the exact Filament List/Create/Edit classes for PageResource
list_pages_content = """<?php
namespace App\Filament\Resources\PageResource\Pages;
use App\Filament\Resources\PageResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
class ListPages extends ListRecords { protected static string $resource = PageResource::class; protected function getHeaderActions(): array { return [Actions\CreateAction::make(),]; } }
"""
create_page_content = """<?php
namespace App\Filament\Resources\PageResource\Pages;
use App\Filament\Resources\PageResource;
use Filament\Resources\Pages\CreateRecord;
class CreatePage extends CreateRecord { protected static string $resource = PageResource::class; }
"""
edit_page_content = """<?php
namespace App\Filament\Resources\PageResource\Pages;
use App\Filament\Resources\PageResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
class EditPage extends EditRecord { protected static string $resource = PageResource::class; protected function getHeaderActions(): array { return [Actions\DeleteAction::make(),]; } }
"""

with open('app/Filament/Resources/PageResource/Pages/ListPages.php', 'w') as f: f.write(list_pages_content)
with open('app/Filament/Resources/PageResource/Pages/CreatePage.php', 'w') as f: f.write(create_page_content)
with open('app/Filament/Resources/PageResource/Pages/EditPage.php', 'w') as f: f.write(edit_page_content)


# 3. Update ServiceResource to have these fields.
service_resource_path = 'app/Filament/Resources/ServiceResource.php'
with open(service_resource_path, 'r') as f:
    service_content = f.read()

# Make it completely replaced with our brilliant custom setup for the CMS
enhanced_service_resource = """<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ServiceResource\Pages;
use App\Models\Service;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\Section;

class ServiceResource extends Resource
{
    protected static ?string $model = Service::class;
    protected static ?string $navigationIcon = 'heroicon-o-briefcase';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Core Details')
                    ->schema([
                        Forms\Components\TextInput::make('name')->required()->maxLength(255),
                        Forms\Components\TextInput::make('slug')->required()->maxLength(255),
                        Forms\Components\TextInput::make('hero_subtitle')->maxLength(255),
                        Forms\Components\FileUpload::make('image_path')->directory('services')->image(),
                        Forms\Components\Textarea::make('short_description')->required()->columnSpanFull(),
                        Forms\Components\RichEditor::make('description')->required()->columnSpanFull(),
                    ])->columns(2),

                Section::make('SEO Config')
                    ->schema([
                        Forms\Components\TextInput::make('seo_title'),
                        Forms\Components\Textarea::make('seo_description'),
                        Forms\Components\TextInput::make('seo_keywords'),
                    ])->collapsed(),

                Section::make('Structured Content (For Advanced Pages)')
                    ->schema([
                        Forms\Components\Repeater::make('faqs')
                            ->label('FAQ Section')
                            ->schema([
                                Forms\Components\TextInput::make('question')->required(),
                                Forms\Components\Textarea::make('answer')->required(),
                            ])->columnSpanFull()->collapsed(),

                        Forms\Components\Repeater::make('solutions')
                            ->label('Methodology / Solutions matrix')
                            ->schema([
                                Forms\Components\TextInput::make('title')->required(),
                                Forms\Components\Textarea::make('description')->required(),
                                Forms\Components\TextInput::make('icon')->label('Lucide Icon Name')->placeholder('e.g. Shield'),
                            ])->grid(2)->columnSpanFull()->collapsed(),

                        Forms\Components\Repeater::make('challenges')
                            ->label('Client Challenges Grid')
                            ->schema([
                                Forms\Components\TextInput::make('title')->required(),
                                Forms\Components\Textarea::make('description')->required(),
                            ])->grid(2)->columnSpanFull()->collapsed(),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->searchable(),
                Tables\Columns\TextColumn::make('slug')->searchable(),
                Tables\Columns\ImageColumn::make('image_path'),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable()->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([])
            ->actions([Tables\Actions\EditAction::make()])
            ->bulkActions([Tables\Actions\DeleteBulkAction::make()]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListServices::route('/'),
            'create' => Pages\CreateService::route('/create'),
            'edit' => Pages\EditService::route('/{record}/edit'),
        ];
    }
}
"""
with open('app/Filament/Resources/ServiceResource.php', 'w') as f:
    f.write(enhanced_service_resource)

print("Filament Resources Built & Upgraded Successfully!")
