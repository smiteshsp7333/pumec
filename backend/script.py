import os  
import re  
configs = {  
    'Services/ServiceResource.php': {'group': 'Services', 'icon': 'Heroicon::OutlinedBriefcase'},  
    'Blogs/BlogResource.php': {'group': 'Content', 'icon': 'Heroicon::OutlinedDocumentText'},  
    'TeamMembers/TeamMemberResource.php': {'group': 'Company', 'icon': 'Heroicon::OutlinedUserGroup'},  
    'Testimonials/TestimonialResource.php': {'group': 'Company', 'icon': 'Heroicon::OutlinedChatBubbleBottomCenterText'},  
    'ClientLogos/ClientLogoResource.php': {'group': 'Assets', 'icon': 'Heroicon::OutlinedPhoto'},  
    'Careers/CareerResource.php': {'group': 'Company', 'icon': 'Heroicon::OutlinedBriefcase'},  
    'Contacts/ContactResource.php': {'group': 'Leads', 'icon': 'Heroicon::OutlinedEnvelope'}  
}  
base = 'app/Filament/Resources'  
for path, data in configs.items():  
    file_path = os.path.join(base, path)  
    with open(file_path, 'r') as f: content = f.read()  
