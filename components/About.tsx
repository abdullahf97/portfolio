export function About() {
  const techStack = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Sequelize", "PostgreSQL"] },
    { category: "DevOps", items: ["Docker", "AWS", "Nginx", "Linux", "CI/CD"] },
    { category: "Tools", items: ["Git", "Firebase", "Leaflet", "Google Maps"] },
  ];

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

          <div className="prose prose-lg max-w-none text-text-muted space-y-6">
            <p>
              I'm a Software Engineer with 3+ years of experience building B2B platforms that solve real business problems.
              My specialty is <strong className="text-text">multi-portal architecture</strong> — designing systems where customer-facing apps,
              vendor dashboards, and admin panels work together seamlessly.
            </p>

            <p>
              At Xavia Solutions, I've delivered 10+ production applications across logistics, fintech, hospitality, and sports booking.
              I don't just build features — I architect systems that <strong className="text-text">scale</strong>, handle complex business logic,
              and make users' lives easier.
            </p>

            <p>
              What sets me apart? I handle the full stack — from React components to Node.js APIs to Docker deployments.
              I've implemented <strong className="text-text">internationalization for 5+ languages</strong> with RTL support,
              optimized load times by 60%, and set up CI/CD pipelines that reduced deployment time by 50%.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((stack) => (
                <div key={stack.category}>
                  <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">
                    {stack.category}
                  </h4>
                  <ul className="space-y-2">
                    {stack.items.map((item) => (
                      <li key={item} className="text-sm text-text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
