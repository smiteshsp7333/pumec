import os
import glob
from datetime import datetime

base_dir = r"C:\Users\smite\OneDrive\Desktop\client1\backend"
timestamp = datetime.now().strftime('%Y_%m_%d_%H%M%S')
migration_path = os.path.join(base_dir, f"database/migrations/{timestamp}_create_site_settings_table.php")

migration_content = """<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->string('group')->default('general');
            $table->longText('value')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('site_settings');
    }
};
"""

with open(migration_path, "w", encoding="utf-8") as f:
    f.write(migration_content)

print(f"Created {migration_path}")

model_path = os.path.join(base_dir, "app/Models/SiteSetting.php")
model_content = """<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class SiteSetting extends Model
{
    protected $fillable = ['key', 'group', 'value'];
    
    protected $casts = [
        'value' => 'array',
    ];
}
"""

with open(model_path, "w", encoding="utf-8") as f:
    f.write(model_content)

print(f"Updated {model_path}")
