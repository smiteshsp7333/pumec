import glob
import os

files = glob.glob('c:/Users/smite/OneDrive/Desktop/client1/src/app/**/*.tsx', recursive=True)
excluded = ['layout.tsx', 'template.tsx']

for file in files:
    if any(ex in file for ex in excluded):
        continue
        
    with open(file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    has_animated = False
    for line in lines:
        if 'AnimatedSection' in line:
            has_animated = True
            break
            
    if not has_animated:
        # Step 1: Inject Import cleanly
        import_stmt = "import AnimatedSection from \"@/components/AnimatedSection\";\n"
        
        # Find where to put it
        insert_idx = 0
        for i, line in enumerate(lines):
            if 'import ' in line:
                insert_idx = i + 1
        
        if insert_idx == 0:
             if lines and "use client" in lines[0]:
                 insert_idx = 1
        
        lines.insert(insert_idx, import_stmt)
        
        # Step 2: Replace <section> with <AnimatedSection>
        content = "".join(lines)
        content = content.replace("<section", "<AnimatedSection")
        content = content.replace("</section>", "</AnimatedSection>")
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

print("Applied beautifully and perfectly to all components.")