import { groq } from "next-sanity";

// Services Queries
export const servicesQuery = groq`*[_type == "service"] {
  title,
  "slug": slug.current,
  icon,
  description,
  featured,
  details
}`;

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  icon,
  description,
  content,
  details
}`;

// Blog Queries
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  "author": author->name,
  "authorImage": author->image,
  mainImage,
  categories,
  publishedAt,
  excerpt
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  "author": author->name,
  "authorImage": author->image,
  "authorBio": author->bio,
  mainImage,
  publishedAt,
  body,
  categories
}`;

// Team Queries
export const teamQuery = groq`*[_type == "team"] | order(name asc) {
  name,
  role,
  image,
  bio,
  linkedin
}`;

// Careers Queries
export const careersQuery = groq`*[_type == "career" && active == true] | order(_createdAt desc) {
  title,
  location,
  type,
  description,
  requirements
}`;

// Testimonials Queries
export const testimonialsQuery = groq`*[_type == "testimonial"] {
  name,
  designation,
  quote,
  image
}`;

// Client Logos Queries
export const clientsQuery = groq`*[_type == "clientLogo"] {
  name,
  logo
}`;
