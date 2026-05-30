<?php

namespace App\Filament\Resources\Blogs\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\FileUpload;

use Filament\Schemas\Schema;

class BlogForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')->required(), TextInput::make('slug')->required(), TextInput::make('category')->required(), FileUpload::make('image')->image()->directory('blogs')->columnSpanFull(), Textarea::make('excerpt')->required()->columnSpanFull(), RichEditor::make('content')->required()->columnSpanFull(),
            ]);
    }
}
