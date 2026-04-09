import { fetchClients } from "@/lib/api";
import ClientsClient from "./ClientsClient";

export default async function Clients() {
  const data = await fetchClients();
  return <ClientsClient clientsData={data} />;
}