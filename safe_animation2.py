import os
import re

def add_animations(filepath):
    try:
        if not os.path.exists(filepath):
            print(f"File not found: {filepath}")
            return
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        if "AnimatedSection" in content:
            print(f"Already animated: {filepath}")
            return

        is_root_page = 'src/app/page.tsx' in filepath.replace('\\', '/')
        import_path = '../components/AnimatedSection' if is_root_page else '../../components/AnimatedSection'
        
        # Insert import
        imports_iter = list(re.finditer(r'^import .+\n', content, re.MULTILINE))
        
        insert_pos = 0
        if imports_iter:
            insert_pos = imports_iter[-1].end()
            
        content = content[:insert_pos] + f"import AnimatedSection from '{import_path}';\n" + content[insert_pos:]

        # Replace tags
        content = content.replace("<section ", "<AnimatedSection ")
        content = content.replace("</section>", "</AnimatedSection>")
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"Successfully updated {filepath}")
    except Exception as e:
        print(f"Error on {filepath}: {e}")

files = [
    'src/app/page.tsx', 
    'src/app/about/page.tsx', 
    'src/app/services/page.tsx',
    'src/app/contact/page.tsx'
]

for file in files:
    add_animations(os.path.normpath(file))
