<?php

namespace App\Filament\Resources\ClientLogos\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;

use Filament\Schemas\Schema;

class ClientLogoForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')->required(), FileUpload::make('logo_url')->image()->directory('clients')->required()->columnSpanFull(),
            ]);
    }
}
