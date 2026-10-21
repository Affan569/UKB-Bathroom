export interface Testimonial {
  id: number;
  name: string;
  initials: string;
  project: string;
  location: string;
  rating: number;
  quote: string;
  avatarClass: string;
}

export const testimonialsHeading = {
  eyebrowLight: "CUSTOMER",
  eyebrowBold: "TESTIMONIALS",
  titleDark: "",
  titleAccent: "",
  subtitle:
    "Hear from our valued customers who trusted UKB Bathrooms to bring their dream spaces to life. Their satisfaction inspires us every day.",
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Wilson",
    initials: "JD",
    project: "Bathroom Renovation",
    location: "Manchester",
    rating: 5,
    quote:
      "UKB Bathrooms made the whole process incredibly easy. From the initial design to the final installation, the team was professional, communicative and delivered exactly what they promised. Our new bathroom looks absolutely stunning — we couldn't be happier!",
    avatarClass: "bg-gradient-to-br from-[#2a4df0] to-[#0B86EE]",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    initials: "ST",
    project: "Bathroom Installation",
    location: "Leeds",
    rating: 5,
    quote:
      "From start to finish, UKB Bathrooms exceeded our expectations. The team was friendly, knowledgeable and paid great attention to detail. The finished bathroom is modern, functional and exactly what we wanted. We would highly recommend them to anyone!",
    avatarClass: "bg-gradient-to-br from-[#1a2fa8] to-[#0f1f80]",
  },
  {
    id: 3,
    name: "Daniel Carter",
    initials: "DC",
    project: "Full Bathroom Remodel",
    location: "Birmingham",
    rating: 5,
    quote:
      "Brilliant service from the first consultation to the final finishing touches. The fitters were tidy, punctual and clearly took pride in their work. Our bathroom feels like a brand new space and we get compliments from everyone who visits.",
    avatarClass: "bg-gradient-to-br from-[#2a4df0] to-[#0B86EE]",
  },
  {
    id: 4,
    name: "Emily Roberts",
    initials: "ER",
    project: "Wet Room Installation",
    location: "Liverpool",
    rating: 5,
    quote:
      "We were nervous about converting to a wet room, but the team guided us every step of the way. The quality of the tiling and waterproofing is superb, and the whole project finished on time and on budget.",
    avatarClass: "bg-gradient-to-br from-[#1a2fa8] to-[#0f1f80]",
  },
  {
    id: 5,
    name: "Oliver Bennett",
    initials: "OB",
    project: "Bathroom Renovation",
    location: "Sheffield",
    rating: 5,
    quote:
      "Honest pricing, great communication and a beautiful result. They helped us choose fixtures that suited our budget and the space, and the installation was flawless. Would absolutely use UKB Bathrooms again.",
    avatarClass: "bg-gradient-to-br from-[#2a4df0] to-[#0B86EE]",
  },
  {
    id: 6,
    name: "Hannah Clarke",
    initials: "HC",
    project: "Ensuite Installation",
    location: "Nottingham",
    rating: 5,
    quote:
      "Our new ensuite is a dream. The design team made smart use of a small space and the installers were courteous and careful throughout. Every detail was handled perfectly — we're thrilled with the outcome.",
    avatarClass: "bg-gradient-to-br from-[#1a2fa8] to-[#0f1f80]",
  },
];