import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/content";
import { INDUSTRY_CONFIG } from "@/lib/constants";
import { useMDXComponents } from "@/mdx-components";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Abdullah Farooq`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.description,
      type: "article",
    },
  };
}

const BASE_URL = "https://portfolio-two-sepia-60.vercel.app";

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const components = useMDXComponents({});

  const cfg =
    INDUSTRY_CONFIG[project.industry] ?? {
      color: "#3b82f6",
      label: project.industry,
    };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.description,
    author: {
      "@type": "Person",
      name: "Abdullah Farooq",
      url: BASE_URL,
    },
    url: `${BASE_URL}/projects/${slug}`,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero banner */}
        <section
          className="relative overflow-hidden py-20 border-b border-border"
          style={{
            background: `linear-gradient(160deg, ${cfg.color}12 0%, ${cfg.color}06 40%, transparent 100%)`,
          }}
        >
          {/* Dot-grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, ${cfg.color} 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
              opacity: 0.08,
            }}
          />
          {/* Decorative blob */}
          <div
            className="absolute -top-16 -right-16 w-80 h-80 rounded-full pointer-events-none opacity-10"
            style={{ backgroundColor: cfg.color }}
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              {/* Industry badge */}
              <div className="mb-5">
                <span
                  className="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full"
                  style={{
                    backgroundColor: `${cfg.color}18`,
                    color: cfg.color,
                    border: `1px solid ${cfg.color}35`,
                  }}
                >
                  {cfg.label}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-text">
                {project.title}
              </h1>
              <p className="text-xl text-text-muted mb-8">{project.subtitle}</p>

              {/* Portal chain */}
              <div className="flex items-center gap-3 mb-10">
                <div className="flex items-center gap-0">
                  {project.portals.map((portal, idx) => (
                    <span key={idx} className="flex items-center">
                      <span
                        className="block w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: cfg.color }}
                        title={portal}
                      />
                      {idx < project.portals.length - 1 && (
                        <span
                          className="block w-5 h-px flex-shrink-0"
                          style={{
                            backgroundColor: cfg.color,
                            opacity: 0.35,
                          }}
                        />
                      )}
                    </span>
                  ))}
                </div>
                <span
                  className="text-sm font-semibold"
                  style={{ color: cfg.color }}
                >
                  {project.portals.length}-portal ecosystem
                </span>
                <div className="flex flex-wrap gap-2 ml-2">
                  {project.portals.map((portal) => (
                    <span
                      key={portal}
                      className="px-2.5 py-0.5 text-xs rounded-full text-text-muted"
                      style={{
                        backgroundColor: `${cfg.color}10`,
                        border: `1px solid ${cfg.color}20`,
                      }}
                    >
                      {portal}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-surface/60 backdrop-blur-sm rounded-xl p-4 border"
                    style={{ borderColor: `${cfg.color}20` }}
                  >
                    <div
                      className="text-2xl md:text-3xl font-bold mb-1"
                      style={{ color: cfg.color }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-xs text-text-muted uppercase tracking-wide leading-snug">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech stack bar */}
        <section className="py-6 bg-surface border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold text-text-muted uppercase tracking-widest mr-1">
                Stack
              </span>
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-background border border-border rounded-md text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges callout */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="py-6 bg-background border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold text-text-muted uppercase tracking-widest mr-1">
                  Key Challenges
                </span>
                {project.challenges.map((challenge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-md text-text-muted"
                    style={{
                      backgroundColor: `${cfg.color}10`,
                      border: `1px solid ${cfg.color}20`,
                    }}
                  >
                    {challenge}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* MDX content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <article className="max-w-4xl mx-auto prose prose-lg prose-invert">
              <MDXRemote source={project.content} components={components} />
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
