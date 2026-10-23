/**
 * REAL REVIEWS TEMPLATE
 * ---------------------
 * This file is a template for future real customer reviews.
 * When you have genuine reviews from customers in your service areas,
 * add them here following the structure below.
 *
 * Each review should include:
 * - name: Customer's real name (or initials if they prefer)
 * - location: Their actual area (e.g., Southampton, Shirley, Portswood, etc.)
 * - project: The actual work done
 * - quote: Their genuine feedback
 * - date: When the review was given (add this field if you want to display dates)
 */

export interface Testimonial {
  id: number;
  name: string;
  initials: string;
  project: string;
  location: string;
  rating: number;
  quote: string;
  avatarClass: string;
  date?: string; // Optional: Add date when displaying reviews
}

export const testimonialsHeading = {
  eyebrowLight: "CUSTOMER",
  eyebrowBold: "TESTIMONIALS",
  titleDark: "",
  titleAccent: "",
  subtitle:
    "Hear from our valued customers who trusted UKB Bathrooms to bring their dream spaces to life. Their satisfaction inspires us every day.",
};

// TODO: Replace with real customer reviews from your service areas
export const testimonials: Testimonial[] = [];