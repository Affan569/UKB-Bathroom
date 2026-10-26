

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
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    initials: "SJ",
    project: "Bathroom Renovation",
    location: "Southampton",
    rating: 5,
    quote: "UKB Bathrooms transformed our outdated bathroom into a stunning modern space. The team was professional, punctual, and the quality of work exceeded our expectations. Highly recommended!",
    avatarClass: "bg-gradient-to-br from-blue-500 to-blue-600"
  },
  {
    id: 2,
    name: "Michael Thompson",
    initials: "MT",
    project: "Full Bathroom Remodel",
    location: "Southampton",
    rating: 5,
    quote: "From design to completion, the process was seamless. The attention to detail and craftsmanship is outstanding. Our new bathroom is exactly what we envisioned.",
    avatarClass: "bg-gradient-to-br from-indigo-500 to-indigo-600"
  },
  {
    id: 3,
    name: "Emma Williams",
    initials: "EW",
    project: "Wet Room Installation",
    location: "Southampton",
    rating: 5,
    quote: "Excellent service from start to finish. The wet room installation was done to a high standard, and the team kept everything clean and tidy throughout the project.",
    avatarClass: "bg-gradient-to-br from-cyan-500 to-cyan-600"
  },
  {
    id: 4,
    name: "David Brown",
    initials: "DB",
    project: "Bathroom Upgrade",
    location: "Southampton",
    rating: 5,
    quote: "Very impressed with the quality and efficiency. The team was knowledgeable and helpful with all our questions. The finished bathroom looks fantastic.",
    avatarClass: "bg-gradient-to-br from-purple-500 to-purple-600"
  }
];