<?php

namespace App\Filament\Resources\TeamMembers\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;

use Filament\Schemas\Schema;

class TeamMemberForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')->required(), TextInput::make('role')->required(), FileUpload::make('image')->image()->directory('team')->columnSpanFull(), Textarea::make('bio')->required()->columnSpanFull(),
            ]);
    }
}
