// data/data.ts
export type GalleryCategory =
  | "Bathroom Plumbing"
  | "Bathroom Designing"
  | "Bathroom Tiling";

export interface GalleryItem {
  id: number;
  title: string;
  category: GalleryCategory;
  /** Cover image shown on the grid card */
  image: string;
  /** All images shown inside the popup (first one is usually the cover) */
  images: string[];
  description: string;
  /** Additional project details for SEO and display */
  area?: string; // e.g., "Southampton", "Shirley"
  propertyType?: string; // e.g., "Residential", "Commercial"
  scope?: string; // e.g., "Full renovation", "Plumbing repair"
}

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All",
  "Bathroom Plumbing",
  "Bathroom Designing",
  "Bathroom Tiling",
];

// Put your real images inside /public/images/gallery/ and update the paths below.
export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Modern Bathroom Transformation",
    category: "Bathroom Designing",
    image: "/images/redesign1.jpg",
    images: [
      "/images/redesign1.jpg",
      "/images/redesign2.jpg",
      "/images/redesign4.jpg",
    ],
    description:
      "A complete bathroom refit, from stripping out the old suite to the final finishing touches. The new layout features a walk-in shower with a glass screen, a wall-hung vanity unit for extra floor space, and warm, moisture-safe lighting for a bright, modern feel.",
  },
  {
    id: 2,
    title: "Sink Repair & Fixes",
    category: "Bathroom Plumbing",
    image: "/images/sink2.jpg",
    images: [
      "/images/sink1.jpg",
      "/images/sink2.jpg",
    ],
    description:
      "Repair of a leaking basin, including replacing the worn waste and trap, fitting new isolation valves and flexible tap connectors, and testing every joint to make sure the sink is watertight and draining freely.",
  },
  {
    id: 3,
    title: "Luxury Bathroom Suites",
    category: "Bathroom Designing",
    image: "/images/redesign3.jpg",
    images: [
      "/images/redesign3.jpg",
      "/images/redesign4.jpg",
    ],
    description:
      "A high-end bathroom suite built around a freestanding bath, with stone-effect wall tiles, matt black brassware and a carefully planned layout that keeps the space calm, practical and easy to clean.",
  },
  {
    id: 5,
    title: "Bathroom Design",
    category: "Bathroom Designing",
    image: "/images/redesign5.png",
    images: [
      "/images/redesign5.png",
      "/images/redesign6.jpg",
    ],
    description:
      "A high-end bathroom suite built around a freestanding bath, with stone-effect wall tiles, matt black brassware and a carefully planned layout that keeps the space calm, practical and easy to clean.",
  },
  {
    id: 7,
    title: "Floor & Wall Tiling",
    category: "Bathroom Tiling",
    image: "/images/tiling1.jpg",
    images: [
      "/images/tiling1.jpg",
      "/images/tiling1.jpg",
    ],
    description:
      "Floor and wall tiling using large-format porcelain tiles, with straight, evenly spaced grout lines, neat cuts around fixtures and a waterproof base in the shower area for lasting protection.",
  },
];