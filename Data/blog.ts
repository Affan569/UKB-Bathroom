export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO format: YYYY-MM-DD
  category: string;
  image: string; // put images in /public/images/blog/
  author: string;
  readTime: string;
  content: string[]; // one string per paragraph
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "top-5-modern-bathroom-design-ideas",
    title: "Top 5 Modern Bathroom Design Ideas for a Stylish Home",
    excerpt:
      "Upgrade your space with these modern bathroom design ideas that combine style, comfort and functionality.",
    date: "2025-10-15",
    category: "Design Tips",
    image: "/images/1.jpg",
    author: "UKB Bathroom team",
    readTime: "5 min read",
    content: [
      "A modern bathroom is about calm, clean lines and smart use of space. Start with a freestanding tub as the focal point, then keep everything around it simple.",
      "Matte black fixtures against dark stone-look tiles create a bold, hotel-style contrast. Pair them with warm lighting so the room feels relaxing rather than cold.",
      "Add greenery. A single plant near a window softens hard surfaces and brings life into the room.",
      "Finally, plan storage early. Wall-hung vanities and recessed niches keep counters clear and the room feeling larger.",
    ],
  },
  {
    id: 2,
    slug: "choose-the-right-bathroom-fixtures",
    title: "How to Choose the Right Bathroom Fixtures for Your Space",
    excerpt:
      "From faucets to bathtubs, here's what to consider before you buy bathroom fixtures for your home.",
    date: "2025-10-10",
    category: "Product Guide",
    image: "/images/2.jpg",
    author: "UKB Bathroom team",
    readTime: "6 min read",
    content: [
      "Begin with the size of your room. A large vessel sink looks stunning, but it needs counter depth and clearance to be practical.",
      "Match your finishes. Choose one metal finish, such as matte black or brushed brass, and repeat it across the faucet, shower and accessories.",
      "Check the water pressure and plumbing layout before ordering. Wall-mounted faucets and rain showers have specific installation needs.",
      "Look for ceramic cartridges and solid-brass bodies. They last longer and are easier to repair.",
    ],
  },
  {
    id: 3,
    slug: "keep-your-bathroom-clean-and-fresh",
    title: "Simple Tips to Keep Your Bathroom Clean and Fresh",
    excerpt:
      "Learn easy and effective cleaning tips to maintain a sparkling bathroom all year round.",
    date: "2025-10-05",
    category: "Maintenance",
    image: "/images/3.jpg",
    author: "UKB Bathroom team",
    readTime: "4 min read",
    content: [
      "Wipe down glass and tiles after each shower with a squeegee. It takes under a minute and prevents limescale from building up.",
      "Clean fixtures with a soft cloth and mild cleaner. Avoid abrasive pads, which can scratch matte and coated finishes.",
      "Run the exhaust fan for 20 minutes after bathing to reduce moisture and mould.",
      "Once a month, descale your shower head by soaking it in a vinegar solution.",
    ],
  },
  {
    id: 4,
    slug: "trending-bathroom-colors-for-2025",
    title: "Trending Bathroom Colors for 2025",
    excerpt:
      "Explore the most popular bathroom color trends that bring elegance and calm to your space.",
    date: "2025-09-28",
    category: "Trends",
    image: "/images/4.jpg",
    author: "UKB Bathroom team",
    readTime: "4 min read",
    content: [
      "Deep charcoal and slate tones are leading this year, especially when paired with warm accent lighting.",
      "Earthy neutrals such as sand, clay and soft greige keep the room bright and timeless.",
      "For a fresh look, add muted sage green through plants, towels or a painted wall.",
      "Whatever you choose, test samples in your own lighting before committing.",
    ],
  },
  {
    id: 5,
    slug: "create-a-spa-like-bathroom-at-home",
    title: "Create a Spa-Like Bathroom at Home",
    excerpt:
      "Turn your everyday routine into a relaxing experience with these simple spa-inspired ideas.",
    date: "2025-09-22",
    category: "Lifestyle",
    image: "/images/5.jpg",
    author: "UKB Bathroom team",
    readTime: "5 min read",
    content: [
      "Layer your lighting. Use dimmable ceiling lights, a backlit mirror and a candle or two for evenings.",
      "Choose natural materials: stone, timber and cotton towels give a spa feel instantly.",
      "Keep surfaces clear. A tray with a few essentials looks calmer than a crowded shelf.",
      "Add a soft scent with a diffuser or eucalyptus hung in the shower.",
    ],
  },
 
];