import re
with open('app/Filament/Resources/PageResource.php', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('use Filament\\Forms\\Form;', 'use Filament\\Schemas\\Schema;')
c = re.sub(r'public static function form\(Form \$form\): Form', 'public static function form(Schema $schema): Schema', c)
c = c.replace('        return $form\n            ->schema([', '        return $schema\n            ->components([')

with open('app/Filament/Resources/PageResource.php', 'w', encoding='utf-8') as f:
    f.write(c)
