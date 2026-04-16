import os
import glob

def fix(file):
    if not os.path.exists(file): return
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove all instances of the imports
    content = content.replace("import AnimatedSection from '../components/AnimatedSection';\n", "")
    content = content.replace("import AnimatedSection from '../../components/AnimatedSection';\n", "")
    
    # Add it to the top
    is_root_page = 'src/app/page.tsx' in file.replace('\\', '/')
    import_path = '../components/AnimatedSection' if is_root_page else '../../components/AnimatedSection'
    new_import = f"import AnimatedSection from '{import_path}';\n"
    
    content = new_import + content
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
        
for f in glob.glob('src/app/**/*.tsx', recursive=True):
    if 'AnimatedSection' in open(f, 'r', encoding='utf-8').read():
        fix(f)
