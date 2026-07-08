import { ArrowRight, Download } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm rounded-full bg-surface border border-border">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-text-muted">{SITE_CONFIG.author.availability}</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            {SITE_CONFIG.name}
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent mb-8">
            {SITE_CONFIG.title}
          </h2>

          <p className="text-lg md:text-xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            {SITE_CONFIG.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors font-medium"
            >
              View My Systems
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/Abdullah_Farooq_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border text-text rounded-md hover:bg-background transition-colors font-medium"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">{SITE_CONFIG.stats.apps}</div>
              <div className="text-sm text-text-muted mt-1">Apps Shipped</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">{SITE_CONFIG.stats.ecosystems}</div>
              <div className="text-sm text-text-muted mt-1">Ecosystems</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">{SITE_CONFIG.stats.experience} years</div>
              <div className="text-sm text-text-muted mt-1">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
