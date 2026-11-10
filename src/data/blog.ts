export type Article = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const categories = ["All stories", "Design", "Culture", "Lifestyle", "Technology"];

export const articles: Article[] = [
  {
    id: 1,
    category: "Design",
    title: "The beauty of making room for less",
    excerpt: "On quiet interfaces, meaningful details, and the creative freedom that comes from knowing what to leave out.",
    date: "May 18, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "A sunlit, minimal living room with thoughtful details",
    featured: true,
  },
  {
    id: 2,
    category: "Culture",
    title: "A field guide to paying better attention",
    excerpt: "In a world that asks for all of us at once, attention might be the most generous thing we can give.",
    date: "May 14, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A quiet mountain landscape reflected in a lake",
  },
  {
    id: 3,
    category: "Lifestyle",
    title: "A slower morning, by design",
    excerpt: "Small rituals that make the first hour of the day feel like your own again.",
    date: "May 09, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Coffee and a notebook on a wooden table",
  },
  {
    id: 4,
    category: "Technology",
    title: "Can the internet feel like a neighborhood again?",
    excerpt: "Finding our way back to small corners, familiar voices, and the joy of being a regular.",
    date: "May 02, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Warm evening lights over a city street",
  },
  {
    id: 5,
    category: "Design",
    title: "Objects that tell us where we have been",
    excerpt: "Why the things we keep close become a kind of autobiography.",
    date: "April 26, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Collected books and objects on a shelf",
  },
  {
    id: 6,
    category: "Culture",
    title: "The case for being a beginner",
    excerpt: "There is a particular kind of wonder in not knowing what you are doing yet.",
    date: "April 19, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A notebook open to a fresh page beside a pen",
  },
];
