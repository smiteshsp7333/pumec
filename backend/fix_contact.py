import os
import re

file_path = 'app/Filament/Resources/Contacts/ContactResource.php'
with open(file_path, 'r') as f:
    content = f.read()

# Replace getPages to just have index and view
content = re.sub(
    r"'create' => CreateContact::route\('/create'\),\s*'edit' => EditContact::route\('/\{record\}/edit'\),", 
    "'view' => ViewContact::route('/{record}'),", 
    content
)

# And add ViewContact if not imported
if "use App\Filament\Resources\Contacts\Pages\ViewContact;" not in content:
    content = content.replace("use App\Filament\Resources\Contacts\Pages\ListContacts;", "use App\Filament\Resources\Contacts\Pages\ListContacts;\nuse App\Filament\Resources\Contacts\Pages\ViewContact;")

with open(file_path, 'w') as f:
    f.write(content)

print('Updated ContactResource to read only!')
