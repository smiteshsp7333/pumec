import re

api_path = "c:/Users/smite/OneDrive/Desktop/client1/backend/routes/api.php"

with open(api_path, 'r') as f:
    api_content = f.read()

if "Route::get('/pages'" not in api_content:
    injection = """
use App\\Http\\Controllers\\Api\\PageController;

Route::get('/pages', [PageController::class, 'index']);
Route::get('/pages/{slug}', [PageController::class, 'show']);
"""
    api_content = api_content + injection
    with open(api_path, 'w') as f:
        f.write(api_content)
        
    print("API Routes Updated for Pages.")
