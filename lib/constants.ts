export const SITE_CONFIG = {
  name: "Abdullah Farooq",
  title: "Software Engineer",
  tagline: "I architect multi-portal systems where customer, vendor, and admin applications work together at scale.",
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

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
