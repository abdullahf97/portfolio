export const SITE_CONFIG = {
  name: "Abdullah Farooq",
  title: "Software Engineer",
  tagline: "I don't just write code — I figure out what needs to exist, build every layer of it, and ship it to production.",
  url: "https://abdullahfarooq.dev",
  author: {
    name: "Abdullah Farooq",
    email: "abdfarooq97@gmail.com",
    github: "abdullahf97",
    linkedin: "abdullah-farooq-143952177",
    location: "Karachi, Pakistan",
    timezone: "PKT (UTC+5)",
    availability: "Open to Remote Opportunities",
  },
  stats: {
    apps: "10+",
    ecosystems: "5",
    experience: "3+",
  },
} as const;

export const INDUSTRY_CONFIG: Record<
  string,
  { color: string; label: string }
> = {
  fintech: { color: "#10b981", label: "Fintech" },
  hospitality: { color: "#f59e0b", label: "Hospitality" },
  sports: { color: "#8b5cf6", label: "Sports Booking" },
  logistics: { color: "#3b82f6", label: "Logistics" },
  "food-delivery": { color: "#ef4444", label: "Food Delivery" },
};

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Challenges", href: "#challenges" },
  { label: "Contact", href: "#contact" },
] as const;
