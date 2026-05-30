import os, re

base = 'app/Filament/Resources'
resources = {
    'Services/Schemas/ServiceForm.php': {
        'imports': ['use Filament\\Forms\\Components\\TextInput;', 'use Filament\\Forms\\Components\\Textarea;'],
        'fields': "TextInput::make('title')->required(), TextInput::make('slug')->required(), TextInput::make('icon')->required()->helperText('Lucide icon name'), Textarea::make('description')->required()->columnSpanFull()"
    },
    'Services/Tables/ServicesTable.php': {
        'imports': ['use Filament\\Tables\\Columns\\TextColumn;'],
        'fields': "TextColumn::make('title')->searchable(), TextColumn::make('slug'), TextColumn::make('icon'), TextColumn::make('created_at')->dateTime()->sortable()"
    },
    'Blogs/Schemas/BlogForm.php': {
        'imports': ['use Filament\\Forms\\Components\\TextInput;', 'use Filament\\Forms\\Components\\Textarea;', 'use Filament\\Forms\\Components\\RichEditor;', 'use Filament\\Forms\\Components\\FileUpload;'],
        'fields': "TextInput::make('title')->required(), TextInput::make('slug')->required(), TextInput::make('category')->required(), FileUpload::make('image')->image()->directory('blogs')->columnSpanFull(), Textarea::make('excerpt')->required()->columnSpanFull(), RichEditor::make('content')->required()->columnSpanFull()"
    },
    'Blogs/Tables/BlogsTable.php': {
        'imports': ['use Filament\\Tables\\Columns\\TextColumn;', 'use Filament\\Tables\\Columns\\ImageColumn;'],
        'fields': "ImageColumn::make('image'), TextColumn::make('title')->searchable(), TextColumn::make('category'), TextColumn::make('created_at')->dateTime()->sortable()"
    },
    'TeamMembers/Schemas/TeamMemberForm.php': {
        'imports': ['use Filament\\Forms\\Components\\TextInput;', 'use Filament\\Forms\\Components\\Textarea;', 'use Filament\\Forms\\Components\\FileUpload;'],
        'fields': "TextInput::make('name')->required(), TextInput::make('role')->required(), FileUpload::make('image')->image()->directory('team')->columnSpanFull(), Textarea::make('bio')->required()->columnSpanFull()"
    },
    'TeamMembers/Tables/TeamMembersTable.php': {
        'imports': ['use Filament\\Tables\\Columns\\TextColumn;', 'use Filament\\Tables\\Columns\\ImageColumn;'],
        'fields': "ImageColumn::make('image'), TextColumn::make('name')->searchable(), TextColumn::make('role'), TextColumn::make('created_at')->dateTime()->sortable()"
    },
    'Testimonials/Schemas/TestimonialForm.php': {
        'imports': ['use Filament\\Forms\\Components\\TextInput;', 'use Filament\\Forms\\Components\\Textarea;'],
        'fields': "TextInput::make('name')->required(), TextInput::make('designation')->required(), TextInput::make('company')->required(), TextInput::make('rating')->numeric()->required()->minValue(1)->maxValue(5), Textarea::make('message')->required()->columnSpanFull()"
    },
    'Testimonials/Tables/TestimonialsTable.php': {
        'imports': ['use Filament\\Tables\\Columns\\TextColumn;'],
        'fields': "TextColumn::make('name')->searchable(), TextColumn::make('company'), TextColumn::make('rating'), TextColumn::make('created_at')->dateTime()->sortable()"
    },
    'ClientLogos/Schemas/ClientLogoForm.php': {
        'imports': ['use Filament\\Forms\\Components\\TextInput;', 'use Filament\\Forms\\Components\\FileUpload;'],
        'fields': "TextInput::make('name')->required(), FileUpload::make('logo_url')->image()->directory('clients')->required()->columnSpanFull()"
    },
    'ClientLogos/Tables/ClientLogosTable.php': {
        'imports': ['use Filament\\Tables\\Columns\\TextColumn;', 'use Filament\\Tables\\Columns\\ImageColumn;'],
        'fields': "ImageColumn::make('logo_url'), TextColumn::make('name')->searchable(), TextColumn::make('created_at')->dateTime()->sortable()"
    },
    'Careers/Schemas/CareerForm.php': {
        'imports': ['use Filament\\Forms\\Components\\TextInput;', 'use Filament\\Forms\\Components\\RichEditor;'],
        'fields': "TextInput::make('title')->required(), TextInput::make('location')->required(), RichEditor::make('description')->required()->columnSpanFull()"
    },
    'Careers/Tables/CareersTable.php': {
        'imports': ['use Filament\\Tables\\Columns\\TextColumn;'],
        'fields': "TextColumn::make('title')->searchable(), TextColumn::make('location'), TextColumn::make('created_at')->dateTime()->sortable()"
    },
    'Contacts/Schemas/ContactForm.php': {
        'imports': ['use Filament\\Forms\\Components\\TextInput;', 'use Filament\\Forms\\Components\\Textarea;'],
        'fields': "TextInput::make('name')->disabled(), TextInput::make('email')->disabled(), Textarea::make('message')->disabled()->columnSpanFull()"
    },
    'Contacts/Tables/ContactsTable.php': {
        'imports': ['use Filament\\Tables\\Columns\\TextColumn;'],
        'fields': "TextColumn::make('name')->searchable(), TextColumn::make('email')->searchable(), TextColumn::make('created_at')->dateTime()->sortable()"
    },
}

for path, config in resources.items():
    file_path = os.path.join(base, path)
    if not os.path.exists(file_path):
        print(f"Skipping {file_path}")
        continue
        
    with open(file_path, 'r') as f:
        content = f.read()

    imports_str = "\n".join(config['imports'])
    
    if config['imports'][0] not in content:
        # Use a substitution replacing function to avoid escape issues inside replacement strings
        def add_imports(match):
            return match.group(1) + "\n\n" + imports_str
        content = re.sub(r'(namespace App\\Filament\\Resources\\[a-zA-Z\\]+;)', add_imports, content)

    # Use string replacement instead of regex
    if 'Form.php' in file_path:
        field_replacement = "                " + config['fields'] + ",\n"
        content = content.replace("->components([\n                //\n            ])", f"->components([\n{field_replacement}            ])")
    else:
        field_replacement = "                " + config['fields'] + ",\n"
        content = content.replace("->columns([\n                //\n            ])", f"->columns([\n{field_replacement}            ])")
    
    with open(file_path, 'w') as f:
        f.write(content)

print("Finished field injection")