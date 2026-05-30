import os, glob, re  
for f in glob.glob('app/Filament/Resources/**/*.php', recursive=True):  
    if not os.path.isfile(f) or os.path.getsize(f) == 0: continue  
    with open(f, 'r', encoding='utf-8') as file: c = file.read()  
