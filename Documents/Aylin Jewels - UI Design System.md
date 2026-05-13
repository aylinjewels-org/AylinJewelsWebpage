# **UI Design System & Component Library**

**Project Name:** Aylin Jewels Digital Catalog

**Document Version:** 1.0

**Date:** May 12, 2026

## **1\. Core Principles**

The Aylin Jewels design language is defined by "Attainable Luxury." The UI must feel airy, editorial, and tactile. It should not look like a crowded e-commerce store, but rather a curated digital gallery. White space is heavily prioritized to allow the 925 silver products to stand out.

## **2\. Color Palette**

The specific hex codes below must be used as Tailwind variables (tailwind.config.ts) to ensure consistency across all components.

* **Primary Background (bg-primary):** \#FFFFFF (Pure White). Used for the main catalog and landing pages.  
* **Secondary Background (bg-secondary):** \#FAFAFA (Off-White/Pearl). Used for subtle section breaks or product card backgrounds to make silver pop.  
* **Primary Text (text-primary):** \#1A1A1A (Deep Charcoal). Used for all main headings and body text. Provides high contrast but is softer than pure black.  
* **Secondary Text (text-secondary):** \#6B6B6B (Medium Gray). Used for subtitles, form labels, and footer links.  
* **Accent Color (bg-accent):** \#8C7D70 (Warm Taupe). Used strictly for promotional banners (e.g., "Surprise a Loved One") and specific call-out elements.  
* **Borders & Dividers (border-light):** \#E5E5E5 (Light Gray). Used for subtle lines separating sections or grid items.

## **3\. Typography**

The project will utilize Google Fonts, imported via next/font/google for optimal performance.

* **Primary Font (Headings):** Playfair Display (or an equivalent elegant serif like Cinzel).  
  * **Usage:** H1, H2, H3, Category Titles, Product Names.  
  * **Styling:** Primarily used in regular or semi-bold weights.  
* **Secondary Font (Body/UI):** Inter (or Montserrat).  
  * **Usage:** Paragraphs, Product Descriptions, Navigation Links, Buttons, Form Inputs.  
  * **Styling:** Clean, highly readable, sans-serif.

## **4\. Spacing & Layout**

* **Container Width:** Max width should be constrained (e.g., max-w-7xl or \~1280px) and centered on desktop to maintain an editorial layout.  
* **Padding/Margins (White Space):** Use generous vertical padding between sections (e.g., py-24 or py-32 in Tailwind) to allow the content to breathe.

## **5\. UI Components & Interactions**

### **5.1 Buttons**

Buttons must have sharp corners (rounded-none) to maintain a modern, editorial aesthetic.

* **Primary Button:**  
  * **State:** Background \#1A1A1A, Text \#FFFFFF.  
  * **Hover:** Subtle background change (e.g., to a slightly lighter charcoal \#333333) and a smooth transition (transition-colors duration-300).  
* **Secondary/Outline Button:**  
  * **State:** Background transparent, Border 1px solid \#1A1A1A, Text \#1A1A1A.  
  * **Hover:** Background \#1A1A1A, Text \#FFFFFF.

### **5.2 The "Buy on Etsy" Button (Special Interaction)**

* **Default State:** Appears as a standard Primary Button with text "Buy on Etsy".  
* **Hover State:** Utilizing CSS/Tailwind group hover, the button subtly expands or reveals a tooltip displaying: *"Secure checkout via our official Etsy store."* This must use Framer Motion or Tailwind transitions to avoid feeling abrupt.

### **5.3 Product Cards**

* **Layout:** Clean image, minimal text beneath (Title, short subtext, optional price).  
* **Hover State:** The image must smoothly scale up slightly (scale-105) while remaining within its container (overflow-hidden).

### **5.4 Navigation Bar**

* **State 1 (Top of Page):** Transparent background, text color dependent on the hero image (usually white or charcoal).  
* **State 2 (Scrolling):** Becomes a sticky header with a solid \#FFFFFF background, a subtle bottom shadow or border (\#E5E5E5), and \#1A1A1A text.  
* **Elements:** Logo (Center), Links (Left), Search/Icons (Right).

### **5.5 Forms**

* **Inputs:** Minimalist design. Bottom border only (border-b border-\[\#E5E5E5\]), transparent background, no outline on focus (use a darker bottom border \#1A1A1A on focus instead).  
* **Labels:** Floating labels or clean placeholder text in the Inter font.

## **6\. Image Guidelines**

* **Aspect Ratios:** Maintain consistent aspect ratios for product grids (e.g., 4:5 or 1:1) to keep the catalog uniform.  
* **Style:** Images should ideally have light, neutral backgrounds to blend seamlessly with the pure white and off-white site palette.