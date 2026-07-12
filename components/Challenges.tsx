import Link from "next/link";
import { ArrowRight } from "lucide-react";

const challenges = [
  {
    title: "Multi-Level Approval with Field-Level Granularity",
    project: "PayPagar",
    projectSlug: "paypagar",
    problem:
      "Financial regulatory compliance required 2+ levels of human checkers to approve company onboarding. Each field could be approved or rejected independently, with audit trails and concurrent edit prevention.",
    approach:
      "Built submission locking system preventing concurrent reviews, created per-field approval UI with audit trail sidebar, implemented max aging enforcement, and designed email notification workflow for adjournments.",
    result: "Average review time reduced from 3 days to 6 hours. Zero concurrent edit conflicts. Full regulatory compliance with complete audit trail.",
    metrics: [
      { label: "Review Time", value: "3d → 6h" },
      { label: "Conflicts", value: "0" },
      { label: "Compliance", value: "100%" },
    ],
  },
  {
    title: "Dynamic Form Generation System",
    project: "PayPagar",
    projectSlug: "paypagar",
    problem:
      "Onboarding forms needed to adapt without code deployment. Different companies required different fields, validation rules, and structures. System had to support 15+ input types with conditional rendering.",
    approach:
      "Created field configuration parser reading database schema, built reusable DynamicStep component handling all input types, implemented Redux Persist for state management, and integrated with multi-level approval system.",
    result: "Client can modify forms without developer involvement. Onboarding time reduced by 60%. Zero code deployments needed for form changes.",
    metrics: [
      { label: "Input Types", value: "15+" },
      { label: "Time Saved", value: "60%" },
      { label: "Deployments", value: "0" },
    ],
  },
  {
    title: "Time Slot Overlap Prevention",
    project: "Playlyne",
    projectSlug: "playlyne",
    problem:
      "Sports venues needed real-time booking with timezone conversion (users in different countries), overlap prevention, and dynamic availability. Calendar had to render 1500+ cells without performance issues.",
    approach:
      "Implemented UTC-based storage with local conversion, created timeSlotValidator checking overlaps via interval comparison, built isSlotAvailable checking venue hours and past time, optimized calendar rendering with virtualization.",
    result: "Zero double-booking incidents. Optimistic locking prevents race conditions. Sub-200ms validation for concurrent booking attempts.",
    metrics: [
      { label: "Double Bookings", value: "0" },
      { label: "Validation Time", value: "<200ms" },
      { label: "Timezones", value: "15+" },
    ],
  },
];

export function Challenges() {
  return (
    <section id="challenges" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Challenges Solved
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Complex problems tackled across multi-portal architectures, from
              regulatory compliance to real-time booking systems.
            </p>
          </div>

          <div className="space-y-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-surface border border-border rounded-xl p-8 hover:border-accent transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-text">
                        {challenge.title}
                      </h3>
                      <Link
                        href={`/projects/${challenge.projectSlug}`}
                        className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {challenge.project}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 lg:ml-6">
                    {challenge.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl md:text-2xl font-bold text-accent">
                          {metric.value}
                        </div>
                        <div className="text-xs text-text-muted">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
                      Problem
                    </h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {challenge.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
                      Approach
                    </h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {challenge.approach}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
                      Result
                    </h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {challenge.result}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <Link
                    href={`/projects/${challenge.projectSlug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    Read full case study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
