export interface ProjectFrontmatter {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  industry: "fintech" | "hospitality" | "sports" | "logistics" | "food-delivery";
  portals: string[];
  tech: string[];
  metrics: { label: string; value: string }[];
  challenges: string[];
  order: number;
  featured: boolean;
}

export interface Project extends ProjectFrontmatter {
  content: string;
}
