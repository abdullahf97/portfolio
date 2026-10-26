import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllProjects } from "@/lib/content";
import { INDUSTRY_CONFIG } from "@/lib/constants";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Project } from "@/types/content";

export const metadata: Metadata = {
  title: "Projects — Abdullah Farooq",
  description:
    "Portfolio of multi-portal systems built by Abdullah Farooq across fintech, hospitality, sports, and logistics industries.",
};

function getIndustryCfg(industry: string) {
  return INDUSTRY_CONFIG[industry] ?? { color: "#3b82f6", label: industry };
}

// Mini portal chain — dots connected by thin lines
function PortalChain({
  portals,
  color,
  size = "sm",
}: {
  portals: string[];
  color: string;
  size?: "sm" | "md";
}) {
  const dotSize = size === "md" ? "w-3 h-3" : "w-2 h-2";
  const lineWidth = size === "md" ? "w-4" : "w-3";

  return (
    <div className="flex items-center flex-wrap gap-0">
      {portals.map((portal, idx) => (
        <span key={idx} className="flex items-center">
          <span
            className={`block ${dotSize} rounded-full flex-shrink-0`}
            style={{ backgroundColor: color }}
            title={portal}
          />
          {idx < portals.length - 1 && (
            <span
              className={`block ${lineWidth} h-px flex-shrink-0`}
              style={{ backgroundColor: color, opacity: 0.35 }}
            />
          )}
        </span>
      ))}
    </div>
  );
}

// Full-width hero card for the first (most complex) project
function HeroCard({ project }: { project: Project }) {
  const cfg = getIndustryCfg(project.industry);

  return (
    <Link href={`/projects/${project.slug}`} className="block group mb-8">
      <article
        className="rounded-2xl overflow-hidden border transition-all duration-300 group-hover:shadow-2xl"
        style={{ borderColor: `${cfg.color}25` }}
      >
        {/* Gradient banner */}
        <div
          className="relative h-52 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${cfg.color}18 0%, ${cfg.color}08 55%, transparent 100%)`,
          }}
        >
          {/* Dot-grid texture */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, ${cfg.color} 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
              opacity: 0.12,
            }}
          />
          {/* Decorative blobs */}
          <div
            className="absolute -top-10 -right-10 w-56 h-56 rounded-full opacity-10"
            style={{ backgroundColor: cfg.color }}
          />
          <div
            className="absolute -bottom-8 right-32 w-32 h-32 rounded-full opacity-8"
            style={{ backgroundColor: cfg.color }}
          />

          {/* Top badges */}
          <div className="absolute top-6 left-7 flex items-center gap-2.5">
            <span
              className="px-3 py-1 text-xs font-semibold rounded-full"
              style={{
                backgroundColor: `${cfg.color}20`,
                color: cfg.color,
                border: `1px solid ${cfg.color}40`,
              }}
            >
              {cfg.label}
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-surface/70 border border-border text-text-muted">
              Flagship Project
            </span>
          </div>

          {/* Portal chain */}
          <div className="absolute bottom-6 left-7 flex items-center gap-3">
            <PortalChain portals={project.portals} color={cfg.color} size="md" />
            <span
              className="text-xs font-semibold tracking-wide"
              style={{ color: cfg.color }}
            >
              {project.portals.length}-portal ecosystem
            </span>
          </div>

          {/* Portal names list (right side) */}
          <div className="absolute bottom-4 right-7 hidden md:flex flex-col items-end gap-1">
            {project.portals.map((portal, idx) => (
              <span
                key={idx}
                className="text-xs text-text-muted opacity-70"
                style={{ fontSize: "11px" }}
              >
                {portal}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="bg-surface p-8">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-1 text-text">
                {project.title}
              </h2>
              <p className="text-text-muted text-lg">{project.subtitle}</p>
            </div>
            <span
              className="flex items-center gap-1.5 text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0 pt-1.5"
              style={{ color: cfg.color }}
            >
              Explore <ArrowRight className="h-4 w-4" />
            </span>
          </div>

          <p className="text-text-muted mb-7 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-8 mb-7 pb-7 border-b border-border">
            {project.metrics.map((metric, idx) => (
              <div key={idx}>
                <div
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: cfg.color }}
                >
                  {metric.value}
                </div>
                <div className="text-xs text-text-muted mt-0.5 uppercase tracking-wide">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs bg-background border border-border rounded-md text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}

// Compact product card for the grid
function ProjectCard({ project }: { project: Project }) {
  const cfg = getIndustryCfg(project.industry);

  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <article
        className="rounded-xl overflow-hidden border h-full flex flex-col transition-all duration-300 hover:shadow-xl"
        style={{ borderColor: `${cfg.color}20` }}
      >
        {/* Gradient strip */}
        <div
          className="relative h-32 overflow-hidden flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${cfg.color}15 0%, ${cfg.color}06 65%, transparent 100%)`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, ${cfg.color} 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
              opacity: 0.1,
            }}
          />
          <div
            className="absolute -top-6 -right-6 w-36 h-36 rounded-full opacity-10"
            style={{ backgroundColor: cfg.color }}
          />

          {/* Industry badge */}
          <div className="absolute top-4 left-5">
            <span
              className="px-2.5 py-1 text-xs font-semibold rounded-full"
              style={{
                backgroundColor: `${cfg.color}20`,
                color: cfg.color,
                border: `1px solid ${cfg.color}40`,
              }}
            >
              {cfg.label}
            </span>
          </div>

          {/* Portal visualization */}
          <div className="absolute bottom-4 left-5 flex items-center gap-2.5">
            <PortalChain portals={project.portals} color={cfg.color} />
            <span
              className="text-xs font-medium"
              style={{ color: cfg.color, opacity: 0.85 }}
            >
              {project.portals.length} portals
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="bg-surface p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h2 className="text-xl font-bold text-text">{project.title}</h2>
            <ArrowRight
              className="h-4 w-4 flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:translate-x-1"
              style={{ color: cfg.color }}
            />
          </div>

          <p className="text-sm text-text-muted mb-5">{project.subtitle}</p>

          {/* Key metrics */}
          <div className="flex flex-wrap gap-5 mb-5">
            {project.metrics.slice(0, 2).map((metric, idx) => (
              <div key={idx}>
                <div
                  className="text-xl font-bold"
                  style={{ color: cfg.color }}
                >
                  {metric.value}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wide">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech tags pinned to bottom */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs bg-background border border-border rounded text-text-muted"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-0.5 text-xs text-text-muted">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  // First project (order:1) becomes the hero; the rest go into the grid
  const [heroProject, ...gridProjects] = projects;

  // Aggregate totals for the stats strip
  const totalPortals = projects.reduce((sum, p) => sum + p.portals.length, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Page header */}
              <div className="text-center mb-5">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Project Portfolio
                </h1>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                  Multi-portal systems built across fintech, hospitality, sports
                  booking, and logistics.
                </p>
              </div>

              {/* Stats strip */}
              <div className="flex items-center justify-center gap-4 mb-16">
                {[
                  { value: `${projects.length}`, label: "Ecosystems" },
                  { value: `${totalPortals}+`, label: "Portals Built" },
                  { value: "3+", label: "Years in Production" },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    {idx > 0 && <div className="w-px h-8 bg-border" />}
                    <div className="text-center px-2">
                      <div className="text-2xl font-bold text-accent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-text-muted mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hero card — flagship project */}
              {heroProject && <HeroCard project={heroProject} />}

              {/* Remaining projects in responsive grid */}
              {gridProjects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {gridProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
