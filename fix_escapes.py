import glob
import os

files = glob.glob('src/app/**/*.tsx', recursive=True)

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    original = content
    # Fix the literal backslashes that were accidentally injected
    content = content.replace(r'"use client";\nimport AnimatedSection from \"@/components/AnimatedSection\";', '"use client";\nimport AnimatedSection from "@/components/AnimatedSection";')
    content = content.replace(r"\"use client\";\nimport AnimatedSection from \"@/components/AnimatedSection\";", '"use client";\nimport AnimatedSection from "@/components/AnimatedSection";')
    
    if content != original:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

print("Fixed the literal string escapes effectively!")
