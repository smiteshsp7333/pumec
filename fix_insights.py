import re

content = open('src/components/InsightsPreviewClient.tsx', 'r', encoding='utf-8').read()
content = re.sub(r'const posts = \[.*?\];', '', content, flags=re.DOTALL)
content = content.replace('export default function InsightsPreview() {', 'export default function InsightsPreviewClient({ blogsData }: { blogsData: any[] }) {')
content = content.replace('posts.map((post', 'blogsData.map((post')
content = content.replace('{post.img}', '{post.image || "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&fit=crop"}')
content = content.replace('{post.desc}', '{post.excerpt}')
content = content.replace('{post.date}', '{new Date(post.created_at || Date.now()).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}')
open('src/components/InsightsPreviewClient.tsx', 'w', encoding='utf-8').write(content)
