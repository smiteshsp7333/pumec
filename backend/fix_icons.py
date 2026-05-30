import os, re
base = 'app/Filament/Resources'
for root, dirs, files in os.walk(base):
    for f in files:
        if f.endswith('.php'):
            p = os.path.join(root, f)
            c = open(p, 'r').read()
            c = re.sub(r'Heroicon::o-([a-zA-Z0-9-]+)', r"'heroicon-o-\1'", c)
            open(p, 'w').write(c)
print('Icons Fixed')
