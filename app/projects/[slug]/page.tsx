import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/content";
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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const components = useMDXComponents({});

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Project Header */}
        <section className="py-16 bg-surface border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-3 py-1 mb-4 text-sm rounded-full bg-accent/10 text-accent border border-accent/20">
                {project.industry}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>

              <p className="text-xl text-text-muted mb-8">{project.subtitle}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-background border border-border rounded-md text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {project.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-text-muted">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Content (MDX) */}
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
