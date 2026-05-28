import os
import re

# 1. Create the migrations
os.chdir('backend')

# Create a migration for pages
os.system('php artisan make:migration create_pages_table')

# Create a migration for modifying services
os.system('php artisan make:migration add_seo_fields_to_services_table')

print("Created migrations.")
