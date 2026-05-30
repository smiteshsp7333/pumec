import os
base = 'app/Filament/Resources'
for d in os.listdir(base):
    p = os.path.join(base, d, d[:-1] + 'Resource.php')
    if os.path.exists(p):
        with open(p, 'r') as f: c = f.read()
        c = c.replace('protected static \\\\\\\\UnitEnum|string|null $navigationGroup', 'protected static ?string $navigationGroup')
        with open(p, 'w') as f: f.write(c)
print("Done fixing syntax")
