"use client";

import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

interface Project {
  id: string;
  label: string;
  subtitle: string;
  portals: string[];
  tech: string[];
  metric: string;
  metricLabel: string;
  color: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "paypagar",
    label: "PayPagar",
    subtitle: "Fintech · Payroll Advance",
    portals: ["Brand Site", "Company Onboarding", "Admin Checker", "Company Portal", "Backend API"],
    tech: ["React", "TypeScript", "Redux", "Node.js", "MySQL"],
    metric: "5",
    metricLabel: "portals",
    color: "#10b981",
    featured: true,
  },
  {
    id: "playlyne",
    label: "Playlyne",
    subtitle: "Sports Tech · Venue Booking",
    portals: ["Customer App", "Vendor Hub", "Superadmin Portal", "Backend API"],
    tech: ["React", "TypeScript", "Redux", "Firebase", "Node.js"],
    metric: "4",
    metricLabel: "portals",
    color: "#c084fc",
  },
  {
    id: "courier",
    label: "Courier Mgmt",
    subtitle: "Logistics · Shipment Tracking",
    portals: ["Admin Dashboard", "Tracking Portal", "Backend API"],
    tech: ["React", "TypeScript", "Bootstrap", "i18next"],
    metric: "500+",
    metricLabel: "commits",
    color: "#60a5fa",
  },
  {
    id: "staydiscover",
    label: "StayDiscover",
    subtitle: "Hospitality · Hotel Booking",
    portals: ["Vendor Hub", "Customer Site", "Backend API"],
    tech: ["React", "TypeScript", "Redux", "Leaflet", "Node.js"],
    metric: "75%",
    metricLabel: "form completion",
    color: "#fbbf24",
  },
  {
    id: "food-delivery",
    label: "Food Delivery",
    subtitle: "E-commerce · Restaurant Tech",
    portals: ["Customer App", "Vendor Portal", "Admin Panel"],
    tech: ["React", "TypeScript", "Node.js", "Google Maps"],
    metric: "30%",
    metricLabel: "API speedup",
    color: "#fb923c",
  },
];

function ProjectCard({
  project,
  mountDelay,
  isMounted,
}: {
  project: Project;
  mountDelay: number;
  isMounted: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 h-full"
      style={{
        borderColor: hovered ? `${project.color}88` : "rgb(var(--border))",
        opacity: isMounted ? 1 : 0,
        transform: isMounted ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.55s ease ${mountDelay}s, transform 0.55s ease ${mountDelay}s, border-color 0.3s, box-shadow 0.3s`,
        boxShadow: hovered
          ? `0 4px 32px ${project.color}1a, 0 0 0 1px ${project.color}33`
          : "none",
        background: "rgb(var(--surface))",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <div
        className="px-6 pt-6 pb-5 flex-1"
        style={{
          background: `linear-gradient(145deg, ${project.color}12 0%, ${project.color}05 60%, transparent 100%)`,
        }}
      >
        <div className="flex items-start justify-between gap-3 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: project.color }} />
              <span className="text-xs font-medium text-text-muted tracking-wide">{project.subtitle}</span>
            </div>
            <h3 className="text-xl font-bold text-text leading-tight">{project.label}</h3>
          </div>
          <Link
            href={`/projects/${project.id}`}
            className="flex items-center gap-1 text-xs font-semibold shrink-0 px-2.5 py-1.5 rounded-lg transition-all duration-200"
            style={{
              color: project.color,
              backgroundColor: hovered ? `${project.color}15` : "transparent",
              border: `1px solid ${hovered ? project.color + "44" : "transparent"}`,
            }}
          >
            Case study
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Portal chain */}
        <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">
          Portal ecosystem
        </p>
        <div className="flex flex-wrap items-center gap-1.5">
          {project.portals.map((portal, idx) => (
            <Fragment key={portal}>
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full border transition-all duration-300"
                style={{
                  transitionDelay: `${idx * 40}ms`,
                  backgroundColor: hovered ? `${project.color}20` : `${project.color}0a`,
                  color: hovered ? project.color : "rgb(var(--text-muted))",
                  borderColor: hovered ? `${project.color}55` : `${project.color}22`,
                }}
              >
                {portal}
              </span>
              {idx < project.portals.length - 1 && (
                <ChevronRight
                  className="h-3.5 w-3.5 shrink-0 transition-colors duration-300"
                  style={{
                    color: hovered ? project.color : "rgb(var(--text-muted))",
                    opacity: 0.5,
                  }}
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-6 py-3.5 flex items-center justify-between gap-4 border-t"
        style={{ borderColor: hovered ? `${project.color}22` : "rgb(var(--border))" }}
      >
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded border text-text-muted"
              style={{ backgroundColor: "rgb(var(--background))", borderColor: "rgb(var(--border))" }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs text-text-muted px-1">+{project.tech.length - 4}</span>
          )}
        </div>
        <div className="text-right shrink-0">
          <div className="text-lg font-bold leading-none" style={{ color: project.color }}>
            {project.metric}
          </div>
          <div className="text-xs text-text-muted mt-0.5">{project.metricLabel}</div>
        </div>
      </div>
    </div>
  );
}

export function SystemBlueprint() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgb(var(--accent) / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Products I&apos;ve Shipped</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Each started as a business problem. I figured out what to build, built every layer, and shipped it.
            </p>
          </div>

          {/* Row 1: featured (col-span-2) + one standard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {featured.map((p, idx) => (
              <div key={p.id} className="md:col-span-2">
                <ProjectCard project={p} isMounted={isMounted} mountDelay={idx * 0.08} />
              </div>
            ))}
            {rest.slice(0, 1).map((p, idx) => (
              <ProjectCard
                key={p.id}
                project={p}
                isMounted={isMounted}
                mountDelay={(featured.length + idx) * 0.08}
              />
            ))}
          </div>

          {/* Row 2: remaining cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {rest.slice(1).map((p, idx) => (
              <ProjectCard
                key={p.id}
                project={p}
                isMounted={isMounted}
                mountDelay={(featured.length + 1 + idx) * 0.08}
              />
            ))}
          </div>

          <div
            className="text-center mt-10"
            style={{
              opacity: isMounted ? 1 : 0,
              transition: "opacity 0.5s ease 0.5s",
            }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-accent transition-colors"
            >
              View all case studies
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
