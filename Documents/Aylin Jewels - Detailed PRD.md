# **Product Requirements Document (PRD)**

**Project Name:** Aylin Jewels Digital Catalog

**Document Version:** 1.0

**Date:** May 12, 2026

## **1\. Executive Summary**

Aylin Jewels is an emerging jewelry brand specializing in "attainable luxury" 925 silver pieces, launching initially with a curated collection of rings. The goal of this project is to create a premium, editorial-style digital catalog rather than a traditional e-commerce storefront. The site will focus on brand storytelling, high-quality visual presentation, and seamless lead generation. Transactions will occur externally (via Etsy), while bespoke inquiries will be captured internally.

## **2\. Objectives & Goals**

* **Establish Brand Identity:** Communicate the "attainable luxury" and authentic 925 silver craftsmanship of Aylin Jewels through high-end web design.  
* **Showcase Products:** Present 30-60 rings across distinct collections using an elegant, airy, catalog-style interface.  
* **Frictionless Handoff:** Direct purchase-ready users to the official Etsy store seamlessly without confusing pop-ups.  
* **Lead Capture:** Facilitate custom and bulk orders through an intuitive form with image upload capabilities and direct WhatsApp integration.  
* **Operational Efficiency:** Provide the site owner with an easy-to-use Headless CMS (Sanity.io) to manage products and templates without touching code.

## **3\. Target Audience**

* **Demographic:** Individuals seeking high-quality, uniquely designed jewelry outside of mass-market fast fashion.  
* **Psychographic:** Users who value brand story, authenticity, material quality (925 silver), and a personalized buying experience.  
* **Behavior:** Users who appreciate visual browsing (Instagram-style) and prefer direct communication (WhatsApp) for custom or high-value inquiries.

## **4\. Product Scope & Core Features**

### **4.1 Global Site Elements**

* **Navigation Bar:**  
  * Sticky header that transitions from transparent to solid white upon scrolling.  
  * Elements: Logo (Center), Links (Shop, Collections, Custom Orders, About), Search Icon, and an empty "Bag" icon (purely aesthetic/familiarity, redirects to Etsy or acts as a saved list \- *to be finalized*).  
* **Footer:**  
  * Newsletter subscription input.  
  * Quick links (Shipping Policy, FAQ, Contact).  
  * Social media icons (Instagram).  
* **Persistent WhatsApp Widget:**  
  * A floating "Click-to-Chat" icon in the bottom right corner of all pages.

### **4.2 The Landing Page (The Hook)**

* **Hero Section:** Full-width or split-screen high-resolution image/video loop showcasing a signature ring. Minimal text (e.g., "Aylin Jewels: Timeless 925 Silver Artistry").  
* **"New In" Carousel:** A swipable horizontal gallery featuring the 4-5 latest additions.  
* **Collections Grid:** Visually distinct blocks linking to primary categories (e.g., "Everyday Wear," "Occasional").  
* **Brand Story Block:** Image paired with text explaining the 925 silver quality and the "We believe in our process" ethos.  
* **Promotional Banner:** Specifically styled section (using the Warm Taupe palette) highlighting "Surprise a Loved One" or gifting options.  
* **Social Proof:** A live or curated Instagram feed grid at the bottom.

### **4.3 Catalog & Category Pages (The Gallery)**

* **Category Header:** Elegant title and a brief descriptive paragraph of the collection's theme.  
* **Product Grid:** Clean layout with significant white space.  
* **Interaction:** Hovering over a product card triggers a subtle 1.05x zoom on the image to emphasize tactile details.  
* **Filtering:** Minimalistic dropdown filters (e.g., Sort by Style, Material Finish).

### **4.4 Dynamic Product Detail Pages (PDP)**

The PDP replaces the traditional "Add to Cart" flow with storytelling and redirection. The layout will be driven by templates selected in the CMS.

* **Image Gallery:** High-resolution masonry or carousel layout.  
* **Product Story:** Engaging copy detailing the inspiration behind the specific ring.  
* **Specifications:** Clear listing of material (925 Silver), weight, finish, and care instructions.  
* **The Action Button ("Buy on Etsy"):**  
  * **Behavior:** A sleek, solid charcoal button.  
  * **Hover State:** Upon hover, the button or a tooltip subtly reveals explanatory text (e.g., "Secure checkout via our official Etsy store") to set expectations before redirection.  
* **Alternative Action:** "Inquire via WhatsApp" button for specific questions regarding that ring.

### **4.5 Custom & Bulk Order Module**

* **Dedicated Page:** A structured form for users to request bespoke designs.  
* **Input Fields:** Name, Email, Phone (Optional), Description of Idea.  
* **File Upload:** A dropzone allowing users to upload reference images.  
* **Backend Handling:** Submissions and files are routed securely to Supabase for the admin to review.

### **4.6 Content Management System (Admin)**

* **Platform:** Sanity.io hosted on a dedicated subdomain (admin.aylinjewels.com).  
* **Functionality:** Allows the admin to upload new rings, add Etsy links, select the desired page template, and manage category listings without developer intervention.

## **5\. User Flows**

* **Flow 1: Discovery to External Purchase**  
  1. User lands on Homepage.  
  2. Browses the "Everyday Wear" collection.  
  3. Clicks on a specific silver band.  
  4. Reads the product story and views specs on the PDP.  
  5. Hovers over "Buy on Etsy", notes the redirection context.  
  6. Clicks and completes the purchase on Etsy.  
* **Flow 2: Custom Inquiry Submission**  
  1. User navigates to "Custom Orders" via the Navigation Bar.  
  2. Fills out text fields detailing their desired ring.  
  3. Uploads a sketch or reference photo.  
  4. Submits the form (Receives a "Thank You" confirmation).  
  5. Admin receives data in Supabase and contacts the user via email or WhatsApp.

## **6\. Non-Functional Requirements**

* **Performance:** The site must achieve a Lighthouse performance score of 90+ on mobile. Images must use Next.js optimization.  
* **Responsiveness:** The UI must be fully fluid, prioritizing the mobile experience while scaling elegantly to desktop and tablet viewports.  
* **Aesthetics:** The implementation must strictly adhere to the defined "Light Mode" UI Design System (Pure White, Warm Taupe, Deep Charcoal).  
* **SEO:** Server-side rendering must be utilized to ensure all product pages and collections are easily indexed by search engines.

## **7\. Future Considerations (Out of Scope for Initial Launch)**

* Integrated internal checkout system (moving away from Etsy).  
* User accounts and saved wishlists.  
* Virtual try-on capabilities.