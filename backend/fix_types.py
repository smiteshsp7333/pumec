import os
import re

configs = {
    'Services/ServiceResource.php': {'group': 'Services', 'icon': 'heroicon-o-briefcase'},
    'Blogs/BlogResource.php': {'group': 'Content', 'icon': 'heroicon-o-document-text'},
    'TeamMembers/TeamMemberResource.php': {'group': 'Company', 'icon': 'heroicon-o-users'},
    'Testimonials/TestimonialResource.php': {'group': 'Company', 'icon': 'heroicon-o-chat-bubble-bottom-center-text'},
    'ClientLogos/ClientLogoResource.php': {'group': 'Assets', 'icon': 'heroicon-o-photo'},
    'Careers/CareerResource.php': {'group': 'Company', 'icon': 'heroicon-o-academic-cap'},
    'Contacts/ContactResource.php': {'group': 'Leads', 'icon': 'heroicon-o-envelope'}
}

base = 'app/Filament/Resources'
for path, data in configs.items():
    file_path = os.path.join(base, path)
    if not os.path.exists(file_path): continue
    
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Replace navigation group definition to match standard definition or just string
    content = re.sub(r'protected static \?string \$navigationGroup = .+', f"protected static ?string $navigationGroup = '{data['group']}';", content)
    # The previous error was because the base type is \BackedEnum|string|null. Wait, no. Base type is `?string` or `string|\BackedEnum|null`. Let's just use what they want or delete our custom definition and let's just use string. Wait, `protected static ?string $navigationGroup` was the error? The error said: "Type of BlogResource::$navigationGroup must be UnitEnum|string|null (as in class Filament\Resources\Resource)".
    # So `protected static string|BackedEnum|null $navigationIcon` is the valid way. Let's fix that.
    content = re.sub(r'protected static \?string \$navigationGroup', 'protected static \\UnitEnum|string|null $navigationGroup', content)
    
    # Fix the icons
    content = re.sub(r'(protected static string\|BackedEnum\|null \$navigationIcon = )Heroicon::[^;]+;', f"\\g<1>'{data['icon']}';", content)
    
    with open(file_path, 'w') as f:
        f.write(content)
print('Fixed types!')
