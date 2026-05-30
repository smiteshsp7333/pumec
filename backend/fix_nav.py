import os
import re

configs = {
    'Services/ServiceResource.php': {'group': 'Services', 'icon': 'Heroicon::o-briefcase'},
    'Blogs/BlogResource.php': {'group': 'Content', 'icon': 'Heroicon::o-document-text'},
    'TeamMembers/TeamMemberResource.php': {'group': 'Company', 'icon': 'Heroicon::o-users'},
    'Testimonials/TestimonialResource.php': {'group': 'Company', 'icon': 'Heroicon::o-chat-bubble-bottom-center-text'},
    'ClientLogos/ClientLogoResource.php': {'group': 'Assets', 'icon': 'Heroicon::o-photo'},
    'Careers/CareerResource.php': {'group': 'Company', 'icon': 'Heroicon::o-academic-cap'},
    'Contacts/ContactResource.php': {'group': 'Leads', 'icon': 'Heroicon::o-envelope'}
}

base = 'app/Filament/Resources'
for path, data in configs.items():
    file_path = os.path.join(base, path)
    if not os.path.exists(file_path): 
        print(f"Skipping {file_path}")
        continue
    
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Replace navigation icon
    content = re.sub(r'(protected static string\|BackedEnum\|null \$navigationIcon = ).+?;', f'\\g<1>{data["icon"]};', content)
    
    # Add navigation group right below navigation icon
    group_str = f"    protected static ?string $navigationGroup = '{data['group']}';"
    if '$navigationGroup' not in content:
        content = re.sub(r'(protected static string\|BackedEnum\|null \$navigationIcon = .+?;)', f'\\g<1>\n\n{group_str}', content)
        
    with open(file_path, 'w') as f:
        f.write(content)

print('Updated resources!')
