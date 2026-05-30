<?php

namespace App\Filament\Resources\Testimonials\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;

use Filament\Schemas\Schema;

class TestimonialForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')->required(), TextInput::make('designation')->required(), TextInput::make('company')->required(), TextInput::make('rating')->numeric()->required()->minValue(1)->maxValue(5), Textarea::make('message')->required()->columnSpanFull(),
            ]);
    }
}
