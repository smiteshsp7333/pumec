import os, glob, re

for f in glob.glob('app/Filament/Resources/**/*.php', recursive=True):
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            
        old_content = content
        
        # Rule 1: Tables\Actions => Filament\Actions
        content = content.replace("Tables\\Actions\\", "Filament\\Actions\\")
        
        # Rule 2: ?string $navigationIcon => string|\UnitEnum|null
        content = re.sub(r'protected static \?string \$navigationIcon\s*=', r'protected static string|\\UnitEnum|null $navigationIcon =', content)
        
        # Rule 3: ?string $navigationGroup => string|\UnitEnum|null
        content = re.sub(r'protected static \?string \$navigationGroup\s*=', r'protected static string|\\UnitEnum|null $navigationGroup =', content)

        if content != old_content:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"Updated {f}")
    except Exception as e:
        print(f"Failed {f}: {e}")