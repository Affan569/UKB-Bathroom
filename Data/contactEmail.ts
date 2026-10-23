/* ------------------------------------------------------------------ */
/*  Contact section content + email copy                               */
/*  (The email HTML layout itself lives in lib/#contactEmailTemplates)  */
/* ------------------------------------------------------------------ */

export const contactHeading = {
  eyebrow: "GET IN TOUCH",
  titleDark: "Your Vision,",
  titleAccent: "Our Expertise.",
  description:
    "At UKB Bathrooms, we specialise in designing and installing beautiful, functional, and bespoke bathroom spaces. Whether you're planning a full renovation or a simple upgrade, our team is here to help bring your dream bathroom to life.",
  signatureScript: "Beautiful Bathrooms.",
  signatureText: "Designed Around You.",
  cornerScript: "Build Your Dream Bathroom",
  cornerLabelLine1: "MODERN SPACES.",
  cornerLabelLine2: "TIMELESS STYLE.",
  badgeLine1: "Transforming Spaces",
  badgeLine2: "Since 2010",
};

export const contactFormHeading = {
  eyebrow: "CONTACT US",
  title: "Let's Start Your Bathroom Journey",
  description:
    "Fill in the form below and our team will get back to you as soon as possible.",
  button: "Send Message",
  privacy: "Your information is safe with us. We respect your privacy.",
  successMessage: "Thank you! Your message has been sent. We'll be in touch shortly.",
  errorMessage: "Something went wrong. Please try again or call us directly.",
  rateLimitMessage: "Too many requests. Please wait a few minutes and try again.",
};

export const contactInfo = {
  phone: "+44 7838349520",
  phoneHref: "tel:+447838349520",
  email: "info@ukbbathroom.co.uk",
};

export type FeatureIcon = "diamond" | "hardhat" | "palette" | "shield";

export const contactFeatures: {
  id: number;
  icon: FeatureIcon;
  title: string;
  text: string;
}[] = [
  {
    id: 1,
    icon: "diamond",
    title: "Premium Quality",
    text: "Only the best materials and craftsmanship.",
  },
  {
    id: 2,
    icon: "hardhat",
    title: "Expert Installation",
    text: "Skilled professionals, flawless results.",
  },
  {
    id: 3,
    icon: "palette",
    title: "Custom Designs",
    text: "Tailored to your style and space.",
  },
  {
    id: 4,
    icon: "shield",
    title: "Trusted & Reliable",
    text: "On time, every time, with complete peace of mind.",
  },
];

export const serviceOptions = [
  "Bathroom Design",
  "Bathroom Supply",
  "Installation",
  "Tiling",
  "Bathroom Renovation",
  "Wet Room",
  "Ensuite",
  "Other",
];

/* ------------------------------------------------------------------ */
/*  Form values                                                        */
/* ------------------------------------------------------------------ */

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const emptyContactForm: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export const emailBrand = {
  name: "UKB Bathrooms",
  tagline: "Design / Supply / Install",
  blue: "#0B86EE",
  navy: "#0b1a6b",
  soft: "#e9efff",
  text: "#4a5a99",
};

/** Subject the team sees in their inbox. */
export const teamEmailSubject = (v: ContactFormValues) =>
  `New enquiry${v.service ? ` – ${v.service}` : ""} – ${v.name}`;

/** Confirmation email sent to the customer. */
export const customerEmail = {
  subject: "We've received your enquiry – UKB Bathrooms",
  heading: "Thank you for getting in touch",
  intro:
    "We've received your enquiry and a member of our team will get back to you as soon as possible.",
  outro: "Beautiful Bathrooms. Designed Around You.",
};

export function buildContactEmailPayload(values: ContactFormValues) {
  return {
    name: values.name,
    email: values.email,
    phone: values.phone,
    service: values.service,
    message: values.message,
    _subject: teamEmailSubject(values),
  };
}