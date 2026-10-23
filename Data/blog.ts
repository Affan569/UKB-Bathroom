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
  noindex?: boolean; // Set to true to exclude from search engines
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
    noindex: true,
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
  {
    id: 6,
    slug: "how-long-does-bathroom-installation-take-southampton",
    title: "How Long Does a Bathroom Installation Take in Southampton?",
    excerpt:
      "Understanding the timeline for bathroom installations in Southampton homes, from design to completion.",
    date: "2024-10-23",
    category: "Guide",
    image: "/images/6.jpg",
    author: "UKB Bathroom team",
    readTime: "6 min read",
    content: [
      "Bathroom installation timelines vary depending on the scope of work, room size, and any structural changes required. A straightforward replacement can be quicker than a full renovation that involves moving plumbing or walls.",
      "For a standard bathroom suite replacement in Southampton, expect the process to take around 5 to 8 working days. This includes removing the old suite, preparing the room, and installing new fixtures, tiling, and finishing touches.",
      "More complex projects, such as wet room installations or complete layout changes, typically take 8 to 12 working days. These require additional waterproofing, drainage work, and careful planning to ensure everything meets building regulations.",
      "Before work begins, a clear schedule should be agreed with your bathroom fitter. This helps manage expectations and allows you to plan around the work, especially if the bathroom is your only one in the property.",
      "Weather and material availability can affect timelines. Your fitter should keep you informed of any delays and provide realistic estimates throughout the project.",
      "Planning ahead and having all materials ready before the start date helps keep the project on track. Discuss your timeline requirements with your bathroom fitter during the initial consultation.",
    ],
  },
  {
    id: 7,
    slug: "wet-room-vs-walk-in-shower-southampton",
    title: "Wet Room vs Walk-in Shower: Which is Right for Your Southampton Home?",
    excerpt:
      "Compare wet rooms and walk-in showers to choose the best option for your bathroom renovation.",
    date: "2024-10-23",
    category: "Guide",
    image: "/images/7.jpg",
    author: "UKB Bathroom team",
    readTime: "5 min read",
    content: [
      "Wet rooms and walk-in showers are both popular choices for modern bathrooms, but they serve different needs and suit different spaces. Understanding the differences can help you make the right choice for your Southampton home.",
      "A wet room is a fully waterproofed bathroom where the shower area is open and level with the rest of the floor. Water drains away through a sloped floor and channel drain. This design creates a seamless, spacious look and works particularly well in smaller bathrooms or those with awkward shapes.",
      "Walk-in showers have a dedicated shower area with a low or no threshold, but the rest of the bathroom floor remains at a different level. They are easier to retrofit in existing bathrooms and typically cost less than a full wet room conversion.",
      "Wet rooms require comprehensive waterproofing (tanking) across the entire floor and partially up the walls. This makes them more expensive to install but highly durable and watertight when done correctly. They are ideal for future-proofing and accessibility.",
      "Walk-in showers still need proper waterproofing in the shower area, but the scope is smaller. They offer a good balance of modern design and practical installation, particularly for renovations where budget is a consideration.",
      "Both options can add value to your property. The choice depends on your budget, bathroom size, and long-term plans for the property. Consult with a professional bathroom fitter to assess which option works best for your specific situation.",
    ],
  },
  {
    id: 8,
    slug: "what-to-check-before-hiring-bathroom-fitter-southampton",
    title: "What to Check Before Hiring a Bathroom Fitter in Southampton",
    excerpt:
      "Essential checks and questions to ask when choosing a bathroom fitter for your Southampton renovation project.",
    date: "2024-10-23",
    category: "Guide",
    image: "/images/8.jpg",
    author: "UKB Bathroom team",
    readTime: "7 min read",
    content: [
      "Choosing the right bathroom fitter is crucial for a successful renovation. Taking time to vet potential contractors can save you from costly mistakes and ensure your project runs smoothly.",
      "Check for proper qualifications and experience. Look for fitters who specialise in bathrooms and have a portfolio of completed work in Southampton. Ask about their experience with projects similar to yours in size and scope.",
      "Verify they have appropriate insurance, including public liability insurance. This protects you in case of accidental damage to your property during the work.",
      "Request references from previous customers and, if possible, view completed projects. Speaking directly with past clients gives insight into the fitter's reliability, communication, and workmanship quality.",
      "Get detailed written quotes from multiple fitters. A good quote should break down costs for materials, labour, and any additional work. Be wary of quotes that seem unusually low—they may indicate shortcuts or hidden costs.",
      "Ask about their timeline and how they handle unexpected issues. A reliable fitter will be upfront about potential delays and have a clear process for addressing problems that arise during the project.",
      "Confirm they handle necessary permits and building regulations. Bathroom work involving drainage or structural changes may require approval, and your fitter should be knowledgeable about local requirements in Southampton.",
      "Trust your instincts. Good communication is essential throughout a renovation project. Choose a fitter who listens to your needs, answers your questions clearly, and makes you feel confident in their abilities.",
    ],
  },
];