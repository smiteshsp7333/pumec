import os
import re

def add_animations(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        if "AnimatedSection" in content:
            return  # Already added

        # Determine import path based on depth
        depth = filepath.count('/') + filepath.count('\\') - 2
        import_path = '../' * depth + 'components/AnimatedSection'
        if depth == 0:
            import_path = './components/AnimatedSection'
            
        import_stmt = f"import AnimatedSection from '{import_path}';\n"
        
        # Add import after the last import statement or at the top
        last_import = list(re.finditer(r'^import .+\n', content, re.MULTILINE))
        if last_import:
            pos = last_import[-1].end()
            content = content[:pos] + import_stmt + content[pos:]
        else:
            content = import_stmt + content

        # Replace tags safely
        content = content.replace("<section ", "<AnimatedSection ")
        content = content.replace("</section>", "</AnimatedSection>")
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error on {filepath}: {e}")

# Target specific critical pages safely
files_to_update = [
    'src/app/page.tsx', 
    'src/app/about/page.tsx', 
    'src/app/services/page.tsx',
    'src/app/contact/page.tsx'
]

for f in files_to_update:
    add_animations(f)
