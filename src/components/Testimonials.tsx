import { fetchTestimonials } from "@/lib/api";
import TestimonialsClient from "./TestimonialsClient";

export default async function Testimonials() {
  const data = await fetchTestimonials();
  return <TestimonialsClient testimonialsData={data} />;
}

