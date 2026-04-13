import os

service_resource_path = 'c:/Users/smite/OneDrive/Desktop/client1/backend/app/Filament/Resources/Services/Schemas/ServiceSchema.php'
service_resource_path_main = 'c:/Users/smite/OneDrive/Desktop/client1/backend/app/Filament/Resources/Services/ServiceResource.php'

if os.path.exists(service_resource_path):
    print("Found ServiceSchema.php")
    # We should probably see what's inside to modify it
elif os.path.exists(service_resource_path_main):
    print("Modifying main ServiceResource directly isn't safe until we check format.")
