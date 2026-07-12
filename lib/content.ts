import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectFrontmatter, Project } from "@/types/content";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export async function getAllProjects(): Promise<Project[]> {
  // Get all MDX files in content/projects
  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        ...(data as ProjectFrontmatter),
        content,
      } as Project;
    });

  // Sort by order field
  return projects.sort((a, b) => a.order - b.order);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      ...(data as ProjectFrontmatter),
      content,
    } as Project;
  } catch (error) {
    return null;
  }
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}
