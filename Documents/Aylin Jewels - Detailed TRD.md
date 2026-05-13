# **Technical Requirements Document (TRD)**

**Project Name:** Aylin Jewels Digital Catalog

**Document Version:** 1.0

**Date:** May 12, 2026

## **1\. System Architecture Overview**

The Aylin Jewels platform is built on a modern, headless, serverless architecture to ensure maximum performance, SEO optimization, and ease of content management.

* **Frontend Client:** Next.js (App Router)  
* **Content API (CMS):** Sanity.io (GraphQL/GROQ)  
* **Backend & Storage (Forms):** Supabase (PostgreSQL & Storage Buckets)  
* **Hosting & Analytics:** Vercel

## **2\. Technology Stack Details**

### **2.1 Frontend**

* **Framework:** Next.js (Version 14+). Chosen for App Router capabilities, built-in image optimization (next/image), and Server-Side Rendering (SSR) for catalog SEO.  
* **Language:** TypeScript. Mandatory for type safety across API responses and component props.  
* **Styling:** Tailwind CSS. Used for utility-first styling to strictly adhere to the UI Design System without bloated CSS files.  
* **Animation:** Framer Motion. Utilized specifically for smooth page transitions, scroll-triggered fade-ins, and the 1.05x hover scaling on product cards.  
* **State Management:** React Context API (for global states like the WhatsApp widget toggle or simple UI states). No complex Redux setup is required.

### **2.2 Content Management (Admin)**

* **Platform:** Sanity Studio (v3).  
* **Hosting:** Deployed via Vercel to admin.aylinjewels.com.  
* **Query Language:** GROQ (Graph-Relational Object Queries) will be used in the Next.js frontend to fetch data from the Sanity Content Lake.

### **2.3 Backend Services**

* **Platform:** Supabase.  
* **Database:** PostgreSQL. Will handle the custom\_inquiries table.  
* **Storage:** Supabase Storage Buckets. Will securely store image uploads from the Custom Orders form.  
* **Security:** Row Level Security (RLS) must be enabled on all tables so public users can INSERT data but cannot SELECT or read data.

## **3\. Data Schema Definitions**

### **3.1 Sanity CMS Schema (Products)**

The Sanity schema must define the structure for managing jewelry listings.

* \_type: 'product'  
* title (String): e.g., "The Moonlit Silver Band"  
* slug (Slug): Generated from title, used for URL (/product/moonlit-silver-band).  
* category (Reference): Links to a separate Category schema (e.g., "Everyday Wear").  
* price (Number): Optional/Hidden, used internally or for filtering if needed later.  
* images (Array of Images): Requires a main image and multiple gallery images.  
* etsyUrl (URL): The specific external checkout link.  
* materialSpecs (Text): Details like "925 Sterling Silver, 4 grams".  
* templateStyle (String): Dropdown options (standard, story, minimal) to dictate Next.js layout.  
* productStory (Portable Text): Rich text for the inspirational copy.

### **3.2 Supabase Schema (Custom Inquiries)**

The database table designed to capture leads.

* **Table Name:** custom\_inquiries  
* id (UUID): Primary Key, default uuid\_generate\_v4().  
* created\_at (Timestamptz): Default now().  
* customer\_name (Text): Required.  
* customer\_email (Text): Required, must be validated on frontend.  
* customer\_phone (Text): Optional.  
* inquiry\_details (Text): Required. The description of their custom request.  
* reference\_image\_url (Text): Optional. The URL path to the file stored in the Supabase Bucket.  
* status (Text): Default 'pending'. Used by admin to track lead progress.

## **4\. API & Integration Routes**

### **4.1 Internal API Routes (Next.js /app/api)**

* **POST /api/inquiries**:  
  * **Function:** Handles form submission from the frontend.  
  * **Process:** Validates payload \-\> Uploads image file to Supabase Storage \-\> Inserts metadata to custom\_inquiries table \-\> Returns success/error.  
* **GET /api/revalidate**:  
  * **Function:** Webhook endpoint for Sanity. When the admin publishes a new product in Sanity, it hits this endpoint to clear the Next.js cache and instantly update the live site.

### **4.2 External Integrations**

* **WhatsApp API (Click-to-Chat):** Utilizing standard https://wa.me/{number}?text={encoded\_message} links. No backend authentication required.  
* **Etsy:** Standard external link redirection with target="\_blank" and rel="noopener noreferrer" for security.

## **5\. Security & Performance Requirements**

### **5.1 Performance (Lighthouse Goals)**

* **FCP (First Contentful Paint):** \< 1.8s.  
* **LCP (Largest Contentful Paint):** \< 2.5s.  
* **Image Optimization:** All Sanity-hosted images must use Next.js Image component with sizes props defining responsive breakpoints to prevent layout shift (CLS).  
* **Font Loading:** Custom fonts must use next/font to ensure zero layout shift and optimize loading.

### **5.2 Security Constraints**

* **Environment Variables:** All API keys (Sanity API Token, Supabase Anon Key, Supabase Service Role Key) must be stored in .env.local and properly configured in Vercel.  
* **Form Validation:** The frontend must implement strict validation (e.g., Zod \+ React Hook Form) to prevent malicious payloads or massive file uploads (limit to 5MB) before hitting the API route.  
* **Sanitization:** User input from the inquiry form must be sanitized to prevent XSS attacks.

## **6\. Implementation Phasing Strategy & AI Prompting Guidelines**

*(This section guides the interaction between the developer and AI code generators)*

**Crucial Developer Workflow:**

For every visual component built during this project, the developer will provide a specific **Figma export/screenshot** alongside the prompt. The AI must use the provided visual reference to dictate the layout, spacing, and structural HTML, while strictly adhering to the aylin\_jewels\_design\_system.md for exact hex codes, fonts, and global variables.

1. **Phase 1 (Static Foundation & Landing Page):**  
   * Setup Next.js, Tailwind config, Font setup.  
   * *AI Instruction:* Build the static Landing Page UI section-by-section. The developer will provide a Figma design for each section (Hero, Collections Grid, etc.). Replicate the Figma layout using Tailwind CSS, ensuring it aligns with the global Design System. Deploy to Vercel.  
2. **Phase 2 (CMS Backend):**  
   * Setup Sanity Studio locally, define schemas as outlined in Section 3.1, deploy Studio to Vercel, populate dummy data.  
3. **Phase 3 (Dynamic Frontend):**  
   * Build GROQ queries, create dynamic route app/product/\[slug\]/page.tsx, implement template logic.  
   * *AI Instruction:* When building the Product Page templates, await the specific Figma designs from the developer before structuring the layout.  
4. **Phase 4 (Interactive/Forms):**  
   * Setup Supabase project, build Contact/Custom form, build API route for submission and file handling.  
5. **Phase 5 (Polish):**  
   * Add Framer motion animations, finalize WhatsApp widget, run Lighthouse audits.