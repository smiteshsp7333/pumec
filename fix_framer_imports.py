import glob
import re
import os

# Search all page components
files = glob.glob('c:/Users/smite/OneDrive/Desktop/client1/src/app/**/*.tsx', recursive=True)

# Exclude layout, template, or global style files
excluded = ['layout.tsx', 'template.tsx']

for file in files:
    if any(ex in file for ex in excluded):
        continue
        
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if 'AnimatedSection' in content:
        # Remove the improperly placed import
        content = re.sub(r"import AnimatedSection from '@/components/AnimatedSection';\n?", "", content)
        
        # Inject it properly at the absolute top (or right below 'use client';)
        if "'use client';" in content:
            content = content.replace("'use client';", "'use client';\nimport AnimatedSection from '@/components/AnimatedSection';")
        elif '"use client";' in content:
            content = content.replace('"use client";', '"use client";\\nimport AnimatedSection from \\"@/components/AnimatedSection\\";')
        else:
            # Just push it to the very top if no use client
            content = "import AnimatedSection from '@/components/AnimatedSection';\n" + content
                
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
            
print("Successfully fixed all Framer Motion imports!")
