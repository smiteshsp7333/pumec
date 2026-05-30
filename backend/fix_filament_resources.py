import os
import glob
import re

for filepath in glob.glob('app/Filament/Resources/**/*.php', recursive=True):
    if not os.path.isfile(filepath):
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if not content.strip():
        continue # Skip empty files
        
    # Replace the Actions
    content = re.sub(r'Tables\\Actions\\[a-zA-Z]+', lambda m: 'Filament\\Actions\\' + m.group(0).split('\\')[-1], content)
    
    # Replace ->actions([ with ->recordActions([
    content = content.replace('->actions([', '->recordActions([')
    
    # Replace ->bulkActions([ with ->toolbarActions([
    content = content.replace('->bulkActions([', '->toolbarActions([')
    
    # Replace UnitEnum parameter types with BackedEnum
    content = re.sub(r'\\\\UnitEnum', r'\\\\BackedEnum', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Successfully processed all files.")
