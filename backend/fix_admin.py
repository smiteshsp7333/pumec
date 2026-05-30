import os, re
base = 'app/Filament/Resources'
configs = {
    'Services/ServiceResource.php': 'Services',
    'Blogs/BlogResource.php': 'Content',
    'TeamMembers/TeamMemberResource.php': 'Company',
    'Testimonials/TestimonialResource.php': 'Company',
    'ClientLogos/ClientLogoResource.php': 'Assets',
    'Careers/CareerResource.php': 'Company',
    'Contacts/ContactResource.php': 'Leads'
}

for path, group in configs.items():
    p = os.path.join(base, path)
    if os.path.exists(p):
        with open(p, 'r') as f:
            c = f.read()

        # Fix $recordTitleAttribute
        # In TeamMembers/Testimonials/ClientLogos/Contacts it was 'name', in Services/Blogs/Careers it was 'title'
        if 'TeamMembers' in path or 'Testimonials' in path or 'ClientLogos' in path or 'Contacts' in path:
            c = re.sub(r'protected static \?string \$recordTitleAttribute = \'.*?\';', "protected static ?string $recordTitleAttribute = 'name';", c)
        else:
            c = re.sub(r'protected static \?string \$recordTitleAttribute = \'.*?\';', "protected static ?string $recordTitleAttribute = 'title';", c)

        # Remove old $navigationGroup property
        c = re.sub(r'protected static \?string \$navigationGroup = \'.*?\';', '', c)
        c = re.sub(r'protected static \\?.*? \$navigationGroup = \'.*?\';', '', c)
        c = re.sub(r'protected static \$navigationGroup = \'.*?\';', '', c)
        
        # Insert getNavigationGroup if missing
        if 'getNavigationGroup' not in c:
            replacement = f"public static function getNavigationGroup(): ?string\n    {{\n        return '{group}';\n    }}\n\n    public static function form"
            c = re.sub(r'public static function form', replacement, c)

        with open(p, 'w') as f:
            f.write(c)

print('Success')
