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
              I'm a Software Engineer with 3+ years of experience turning business ideas into running software.
              When a client says "we need a platform for X," I figure out what that actually means to build —
              the customer experience, the vendor tools, the admin controls, the backend, the infrastructure —
              and I <strong className="text-text">ship all of it</strong>.
            </p>

            <p>
              At Xavia Solutions I've taken 10+ products from concept to production across logistics, fintech,
              hospitality, and sports booking. No brief is too vague. I ask the right questions,
              make the right architectural decisions, and own the work end-to-end until{" "}
              <strong className="text-text">real users are using it</strong>.
            </p>

            <p>
              Full-stack in practice, not just on paper: React and TypeScript on the frontend,
              Node.js APIs in the middle, Docker and CI/CD keeping it live.
              I've shipped <strong className="text-text">internationalized products in 5 languages</strong> with RTL support,
              cut load times by 69%, and set up deployment pipelines that reduced release time from 20 minutes to 5.
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
