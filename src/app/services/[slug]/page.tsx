import AnimatedSection from "@/components/AnimatedSection";
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  // Convert slug like "going-global" to "Going Global"
  const resolvedParams = await params;
  const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="pt-32 pb-20 container-custom bg-[#050505] text-[#f2f2f2] min-h-[70vh]">
      <h1 className="text-4xl md:text-5xl font-semibold mb-6">{title}</h1>
      <p className="text-white/60 text-lg max-w-2xl">
        This is the detailed page for our {title} service. We provide comprehensive solutions to address your business needs.
      </p>
    </div>
  );
}