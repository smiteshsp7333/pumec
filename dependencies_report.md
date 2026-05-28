# PUMEC Project Dependencies Report

This report outlines all the pending content, assets, contact information, and infrastructure configurations required from your side to transition the PUMEC platform from a template/fallback state to a fully accurate, production-ready website.

---

## 1. Core Corporate Contact Details
These are the physical and contact placeholders currently embedded across the site (footers, headers, contact forms, and legal policies).

| Asset / Detail | Current Placeholder | Target Files in Project | Severity |
| :--- | :--- | :--- | :--- |
| **Corporate Address** | `Bangalore, Karnataka, IN` | [Footer.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/components/Footer.tsx#L96)<br>[layout.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/app/layout.tsx#L97-L99) (SEO Schema) | **High** (Required for trust & SEO) |
| **Primary Contact Email** | `info@pumec.com`<br>`contact@pumec.com` | [Footer.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/components/Footer.tsx#L100)<br>[contact/page.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/app/contact/page.tsx#L120)<br>[privacy-policy/page.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/app/privacy-policy/page.tsx#L216) | **High** (Ensures user queries reach you) |
| **Careers Email** | `careers@pumec.com` | [careers/page.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/app/careers/page.tsx#L62) | **Medium** (Required for recruitment pipeline) |
| **Phone Number** | `+(91) XXXXXXXXXX`<br>`+91 1234 5678` | [Footer.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/components/Footer.tsx#L104)<br>[CtaBanner.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/components/CtaBanner.tsx#L48) | **High** (Required for CTA actions) |

---

## 2. Team Member Information
The `/about/our-team` page and SEO metadata fallback configurations use placeholder member names and details.

| Detail Required | Current Placeholder / Placeholder Type | Target Files in Project | Severity |
| :--- | :--- | :--- | :--- |
| **Leader Names & Roles** | `Alex Martinez` (Managing Partner)<br>`Sarah Jenkins` (Head of Tax)<br>`David Chen` (Global Operations)<br>`Jessica Smith` (Chief HR Officer) | [our-team/page.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/app/about/our-team/page.tsx#L7-L12) | **Medium** (Highly recommended for professional credibility) |
| **Leader Bios & Depts** | Generic descriptions | [our-team/page.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/app/about/our-team/page.tsx#L7-L12) | **Medium** |
| **API Fallback Team** | `Anil Verma`, `Sneha Kapoor` | [api.ts](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/lib/api.ts#L82-L85) (used if local backend database is offline) | **Low** |
| **Team Headshots** | `/grid.svg` (grey background placeholders) | `/public/team/` directory (Recommended paths: `.jpg` or `.png` files, e.g., `anil-verma.jpg`) | **Medium** (Visual design polish) |

---

## 3. Trust Factors: Clients & Testimonials
These elements appear on the Home Page and general landing layouts to build immediate credibility with global firms.

| Asset / Detail | Current Placeholder | Target Files in Project | Severity |
| :--- | :--- | :--- | :--- |
| **Client Testimonials** | 3 placeholders:<br>- `Rajesh Sharma` (Tech Innovations)<br>- `Priya Desai` (Stellar Logistics)<br>- `Vikram Malhotra` (Ascend Ventures) | [api.ts](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/lib/api.ts#L76-L80) | **Medium** (Important for EEAT Trustworthiness) |
| **Client Logos** | Fallbacks for:<br>`Infosys`, `Tata Group`, `Wipro`, `HDFC Bank`, `Aditya Birla` | [api.ts](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/lib/api.ts#L93-L99) | **Medium** (Required to populate the Home Page trust bar correctly) |
| **Logo Files** | `/logos/infosys.png` etc. | `/public/logos/` directory (Needs high-res SVG or transparent PNG files) | **Medium** (Prevents missing image warnings) |

---

## 4. Firm Metrics & Statistics
These figures are displayed in key high-visibility sections (like the Homepage Hero strip and the Why Choose Us grid) to validate scale.

| Section | Current Stat in Code | Target Files in Project | Severity |
| :--- | :--- | :--- | :--- |
| **Experience Years** | `30+ Years` | [WhyChooseUs.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/components/WhyChooseUs.tsx#L55)<br>[Hero.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/components/Hero.tsx#L125) | **Medium** (Verifies actual tenure) |
| **Client Count** | `500+ Clients` | [WhyChooseUs.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/components/WhyChooseUs.tsx#L61)<br>[Hero.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/components/Hero.tsx#L131) | **Medium** |
| **Countries Covered** | `15+ Countries` | [WhyChooseUs.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/components/WhyChooseUs.tsx#L67)<br>[Hero.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/components/Hero.tsx#L137) | **Medium** |
| **Professional Advisors** | `50+ Professionals` | [Hero.tsx](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/components/Hero.tsx#L143) | **Medium** |

---

## 5. Contact Form Submission Service
The contact form currently calls a dummy API route `API_URL + "/contact"`. To make it work in production, a connection is required.

| Integration | Current Method | Target Files in Project | Severity |
| :--- | :--- | :--- | :--- |
| **Contact API/Endpoint** | Fallback to Laravel Backend (Currently unreachable/empty) | [api.ts](file:///Users/sriharsha/Desktop/Sanna%20Files/pumec/pumec-main/src/lib/api.ts#L58-L66) | **High** (Ensures contact form is functional) |
| **Form Destination** | None (Form fails to submit dynamically) | Custom endpoint (e.g. Resend, Formspree, or your main email system) | **High** |

---

## 6. Landing Page SEO Content (Optional Input)
If you have specific case studies or bullet points you would like highlighted on the new pages:

| Page Path | Target Customization Opportunity |
| :--- | :--- |
| `/services/foreign-company-registration` | Exact steps/documents required from client for Indian registration |
| `/services/virtual-cfo` | Typical financial dashboards or platforms you configure for clients |
| `/services/gcc-setup` | Specific target talent hubs or real estate/location advice |
| `/services/compliance-outsourcing` | Specific tax calendars/statutory filings handled |
| `/services/accounting-outsourcing` | Software stack used (e.g., Zoho, QuickBooks, Tally Prime) |
| `/services/payroll-outsourcing` | HR compliance items covered (e.g., PF, ESI, LWF, Professional Tax) |
| `/services/ifrs-advisory` | Core audit reconciliation procedures or IND AS standards specialized in |

> **Note:** If you don't have custom content details for these pages, I will generate premium-quality, industry-compliant copy based on standard consulting benchmarks.
