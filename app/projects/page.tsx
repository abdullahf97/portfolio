import { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects — Abdullah Farooq",
  description:
    "Portfolio of multi-portal systems built by Abdullah Farooq across fintech, hospitality, sports, and logistics industries.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                Project Portfolio
              </h1>
              <p className="text-xl text-text-muted text-center mb-16 max-w-2xl mx-auto">
                Multi-portal systems built across fintech, hospitality, sports
                booking, and logistics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="block bg-surface border border-border rounded-xl p-8 hover:border-accent transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-text-muted">{project.subtitle}</p>
                      </div>
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                        {project.industry}
                      </span>
                    </div>

                    <p className="text-text-muted mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {project.metrics.slice(0, 3).map((metric, idx) => (
                        <div key={idx} className="flex items-baseline gap-2">
                          <span className="text-lg font-bold text-accent">
                            {metric.value}
                          </span>
                          <span className="text-xs text-text-muted">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-background border border-border rounded text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="px-2 py-1 text-xs text-text-muted">
                          +{project.tech.length - 5} more
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
