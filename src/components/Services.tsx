import { fetchServices } from "@/lib/api";
import ServicesClient from "./ServicesClient";

export default async function Services() {
  const data = await fetchServices();
  return <ServicesClient servicesData={data} />;
}
 

