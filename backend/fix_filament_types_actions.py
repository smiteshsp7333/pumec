import os
import glob
import re

for f in glob.glob('app/Filament/Resources/**/*.php', recursive=True):
    if not os.path.isfile(f) or os.path.getsize(f) == 0: 
        continue
    with open(f, 'r', encoding='utf-8') as file: 
        c = file.read()
    
    c = c.replace('protected static ?string $navigationIcon', 'protected static string|\BackedEnum|null $navigationIcon')
    c = c.replace('protected static ?string $navigationGroup', 'protected static string|\BackedEnum|null $navigationGroup')
    c = re.sub(r'Tables\\\\Actions\\\\([a-zA-Z]+Action|BulkActionGroup)', r'Filament\\Actions\\\1', c)
    c = c.replace('->actions([', '->recordActions([')
    c = c.replace('->bulkActions([', '->toolbarActions([')
    c = c.replace('protected static ?string $recordTitleAttribute', 'protected static string|\BackedEnum|null $recordTitleAttribute')
    
    with open(f, 'w', encoding='utf-8') as file: 
        file.write(c)
print("Done fixing Filament.")
