import os
import re

base_dir = r"C:\Users\smite\OneDrive\Desktop\client1\backend"

resource_files = [
    r"app\Filament\Resources\Blogs\BlogResource.php",
    r"app\Filament\Resources\Careers\CareerResource.php",
    r"app\Filament\Resources\ClientLogos\ClientLogoResource.php",
    r"app\Filament\Resources\Services\ServiceResource.php",
    r"app\Filament\Resources\TeamMembers\TeamMemberResource.php",
    r"app\Filament\Resources\Testimonials\TestimonialResource.php",
]

seo_section = """
                \\Filament\\Forms\\Components\\Section::make('SEO & Meta Data')
                    ->description('Manage search engine optimization settings for this entry.')
                    ->schema([
                        \\Filament\\Forms\\Components\\TextInput::make('seo_title')
                            ->label('Meta Title')
                            ->maxLength(255),
                        \\Filament\\Forms\\Components\\TextInput::make('seo_keywords')
                            ->label('Meta Keywords')
                            ->maxLength(255),
                        \\Filament\\Forms\\Components\\Textarea::make('seo_description')
                            ->label('Meta Description')
                            ->maxLength(65535)
                            ->columnSpanFull(),
                        \\Filament\\Forms\\Components\\KeyValue::make('schema_markup')
                            ->label('Schema.org JSON-LD')
                            ->columnSpanFull(),
                    ])->collapsed(),
"""

for rel_path in resource_files:
    res_path = os.path.join(base_dir, rel_path)
    if os.path.exists(res_path):
        with open(res_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        if "seo_title" not in content and "Schema::make('SEO" not in content:
            # Let's find ->components([ or ->schema([ 
            match = re.search(r'->schema\(\[\s*', content)
            if match:
                pos = match.end()
                new_content = content[:pos] + seo_section + content[pos:]
                with open(res_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {rel_path}")
            else:
                print(f"Could not find schema array in {rel_path}")
    else:
        print(f"Not found: {res_path}")
