export const API_URL = "http://127.0.0.1:8000/api";

export async function fetchServices() {
  try {
    const res = await fetch(API_URL + "/services", { next: { revalidate: 60 } });
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data && data.length > 0 ? data : fallbackServices;
  } catch (e) {
    return fallbackServices;
  }
}

export async function fetchBlogs() {
  try {
    const res = await fetch(API_URL + "/blogs", { next: { revalidate: 60 } });
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data && data.length > 0 ? data : fallbackBlogs;
  } catch (e) {
    return fallbackBlogs;
  }
}

export async function fetchTeam() {
  try {
    const res = await fetch(API_URL + "/team", { next: { revalidate: 60 } });
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data && data.length > 0 ? data : fallbackTeam;
  } catch (e) {
    return fallbackTeam;
  }
}

export async function fetchTestimonials() {
  try {
    const res = await fetch(API_URL + "/testimonials", { next: { revalidate: 60 } });
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data && data.length > 0 ? data : fallbackTestimonials;
  } catch (e) {
    return fallbackTestimonials;
  }
}

export async function fetchClients() {
  try {
    const res = await fetch(API_URL + "/client-logos", { next: { revalidate: 60 } });
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data && data.length > 0 ? data : fallbackClients;
  } catch (e) {
    return fallbackClients;
  }
}

export async function submitContact(data: any) {
  const res = await fetch(API_URL + "/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error();
  return res.json();
}

const fallbackServices = [
  { id: 1, title: "Auditing & Assurance", slug: "auditing-and-assurance", description: "Comprehensive statutory, manropenal, and forensic audits ensuring compliance, transparency, and stakeholder confidence.", icon: "ClipboardList" },
  { id: 2, title: "Taxation & Compliance", slug: "taxation-and-compliance", description: "Strategic tax planning, GST compliance, ITR filing, and regulatory advisory to minimize risk and optimize financial efficiency.", icon: "Calculator" },
  { id: 3, title: "FEMA & NRI Advisory", slug: "fema-and-nri-advisory", description: "Expert advisory on cross-border transactions, FEMA regulations, repatriation, and NRI taxation.", icon: "Globe" },
  { id: 4, title: "Business Setup", slug: "business-setup", description: "End-to-end company incorporation, regulatory registrations, and compliance structuring for startups and enterprises.", icon: "Building" },
  { id: 5, title: "Management Consulting", slug: "management-consulting", description: "Data-driven financial strategy, operational efficiency consulting, and business growth advisory.", icon: "TrendingUp" }
];

const fallbackTestimonials = [
  { id: 1, name: "Rajesh Sharma", designation: "CEO", company: "Tech Innovations Group", message: "PUMEC has been our strategic partner for over a decade. Their expertise in manropenational taxation and compliance has been invaluable to our global expansion.", rating: 5 },
  { id: 2, name: "Priya Desai", designation: "Finance Director", company: "Stellar Logistics", message: "The proactive advisory strictly aligned with evolving GST regulations saved us significantly in potential liabilities, whilst ensuring smooth financial workflows.", rating: 5 },
  { id: 3, name: "Vikram Malhotra", designation: "Founder", company: "Ascend Ventures", message: "From initial business setup to complex regulatory structuring, the team provided exceptional foresight and guidance that let us focus purely on growth.", rating: 5 }
];

const fallbackTeam = [
  { id: 1, name: "Anil Verma", role: "Managing Partner", bio: "With 25 years of experience in corporate taxation and structuring, Anil leads the firm's strategic advisory division.", image: "https://ui-avatars.com/api/?name=Anil+Verma&size=400&background=random" },
  { id: 2, name: "Sneha Kapoor", role: "CFO Advisory Lead", bio: "Sneha specializes in financial consulting, operational restructuring, and helping businesses optimize their profitability.", image: "https://ui-avatars.com/api/?name=Sneha+Kapoor&size=400&background=random" }
];

const fallbackBlogs = [
  { id: 1, title: "Understanding GST Changes in 2024", slug: "understanding-gst-changes-in-2024", content: "The evolving landscape of the Goods and Services Tax requires businesses to constantly adapt.", excerpt: "A comprehensive review of the latest GST amendments and how businesses can maintain compliance efficiently.", category: "Taxation", image: "" },
  { id: 2, title: "Strategic Tax Planning for Startups", slug: "strategic-tax-planning-for-startups", content: "Startups frequently overlook tax planning during their initial growth phases.", excerpt: "Why early-stage companies must integrate tax strategies to optimize working capital and attract investment.", category: "Business Advisory", image: "" },
  { id: 3, title: "Global Compliance Challenges for Indian Businesses", slug: "global-compliance-challenges-for-indian-businesses", content: "As Indian enterprises expand across borders, they encounter complex manropenational regulatory frameworks.", excerpt: "An analysis of cross-border regulatory hurdles and methodologies for ensuring seamless manropenational expansion.", category: "FEMA & Global", image: "" }
];

const fallbackClients = [
  { id: 1, name: "Infosys", logo_url: "/logos/infosys.png" },
  { id: 2, name: "Tata Group", logo_url: "/logos/Tata_logo.svg" },
  { id: 3, name: "Wipro", logo_url: "/logos/Wipro_Primary_Logo_Color_RGB.svg.png" },
  { id: 4, name: "HDFC Bank", logo_url: "/logos/HDFC-LOGO.png" },
  { id: 5, name: "Aditya Birla", logo_url: "/logos/Aditya-Birla-Group-Logo-Vector-scaled.jpg" }
]; 
