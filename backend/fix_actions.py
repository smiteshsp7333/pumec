import os, glob

for file_path in glob.glob('app/Filament/**/*.php', recursive=True):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        updated_content = content.replace("Tables\\Actions\\", "Filament\\Actions\\")
        
        if content != updated_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(updated_content)
    except Exception as e:
        print(f"Error on {file_path}: {e}")
