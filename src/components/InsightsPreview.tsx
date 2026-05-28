import { fetchBlogs } from "@/lib/api";
import InsightsPreviewClient from "./InsightsPreviewClient";

export default async function InsightsPreview() {
  const data = await fetchBlogs();
  return <InsightsPreviewClient blogsData={data} />;
}

