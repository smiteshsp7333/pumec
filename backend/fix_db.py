import os

env_path = '.env'
if os.path.exists(env_path):
    with open(env_path, 'r') as f:
        content = f.read()
    
    # Replace MySQL stuff back to SQLite to make it run locally with zero config
    content = content.replace('DB_CONNECTION=mysql', 'DB_CONNECTION=sqlite')
    
    with open(env_path, 'w') as f:
        f.write(content)
    
    print(".env configured for sqlite")
    
# Create empty sqlite file just in case
open('database/database.sqlite', 'a').close()
