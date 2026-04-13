import os
import glob

# Search all page components
files = glob.glob('c:/Users/smite/OneDrive/Desktop/client1/src/app/**/*.tsx', recursive=True)

# Exclude layout, template, or global style files
excluded = ['layout.tsx', 'template.tsx']

for file in files:
    if any(ex in file for ex in excluded):
        continue
        
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if '<section' in content and 'AnimatedSection' not in content:
        lines = content.split('\n')
        
        # Inject the import near the top
        # We find the last import to put it cleanly
        last_import = 0
        for i, line in enumerate(lines):
            if line.startswith('import '):
                last_import = i
                
        import_stmt = "import AnimatedSection from '@/components/AnimatedSection';"
        
        if last_import == 0 and lines[0].startswith("'use client'"):
            lines.insert(1, import_stmt)
        elif last_import == 0:
            lines.insert(0, import_stmt)
        else:
            lines.insert(last_import + 1, import_stmt)
            
        content = '\n'.join(lines)
        
        # Perform replacements on sections
        content = content.replace('<section', '<AnimatedSection')
        content = content.replace('</section>', '</AnimatedSection>')
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
            
print("Successfully injected Framer Motion AnimatedSections into all page views!")
