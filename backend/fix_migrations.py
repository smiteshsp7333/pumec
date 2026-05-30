import os
import glob

migrations = glob.glob('database/migrations/*.php')
for m in migrations:
    with open(m, 'r', encoding='utf-8') as f:
        c = f.read()
    
    if r'\\' + '1' in c or r'\1' in c:
        c = c.replace(r'\\' + '1', '$table->id();')
        c = c.replace(r'\1', '$table->id();')
        with open(m, 'w', encoding='utf-8') as f:
            f.write(c)
            print("Fixed", m)
