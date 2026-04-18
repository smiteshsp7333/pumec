import re 
with open("src/app/page.tsx", "r", encoding="utf-8") as f: 
    content = f.read() 
if "import Testimonials" not in content: 
    content = content.replace("import AnimatedSection from '../components/AnimatedSection';", "import AnimatedSection from '../components/AnimatedSection';\nimport Testimonials from '../components/Testimonials';\nimport Clients from '../components/Clients';\nimport InsightsPreview from '../components/InsightsPreview';") 
target = "      <AnimatedSection className=\"bg-[#1F3A5F] text-white py-32 px-6 lg:px-12 text-center relative overflow-hidden\">" 
replacement = """      ^<div className="bg-[#F4F6F8]"^>^<Clients /^>^</div^>\n      ^<div className="bg-white"^>^<Testimonials /^>^</div^>\n      ^<div className="bg-[#F4F6F8]"^>^<InsightsPreview /^>^</div^>\n      ^<AnimatedSection className="bg-[#1F3A5F] text-white py-32 px-6 lg:px-12 text-center relative overflow-hidden"^>""" 
if "<Clients />" not in content: 
    content = content.replace(target, replacement) 
with open("src/app/page.tsx", "w", encoding="utf-8") as f: 
    f.write(content) 
