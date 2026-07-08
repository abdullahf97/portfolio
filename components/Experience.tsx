export function Experience() {
  const timeline = [
    {
      period: "May 2026 - Present",
      role: "Software Engineer",
      company: "Xavia Solutions",
      type: "Promotion",
      highlights: [
        "Promoted based on technical leadership and system design capabilities",
        "Leading PayPagar fintech ecosystem (5-app platform)",
        "Architecting multi-level approval systems with field-level granularity",
      ],
    },
    {
      period: "Oct 2023 - May 2026",
      role: "Junior Software Developer",
      company: "Xavia Solutions",
      type: "Initial Role",
      highlights: [
        "Delivered 10+ production applications across logistics, hospitality, and sports booking",
        "Implemented internationalization for 5+ languages with RTL support",
        "Optimized application performance (60% faster load times)",
        "Set up CI/CD pipelines reducing deployment time by 50%",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-accent border-4 border-background" />

                  <div className="bg-surface border border-border rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-text">{item.role}</h3>
                        <p className="text-text-muted">{item.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-block px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-sm text-text-muted flex items-start">
                          <span className="mr-2 text-accent">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-accent mb-1">500+</div>
                <div className="text-sm text-text-muted">Frontend Contributions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">80+</div>
                <div className="text-sm text-text-muted">API Integrations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">5+</div>
                <div className="text-sm text-text-muted">Languages Supported</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
