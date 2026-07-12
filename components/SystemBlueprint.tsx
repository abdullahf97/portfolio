"use client";

import { useEffect, useRef, useState } from "react";

interface SystemNode {
  id: string;
  label: string;
  subtitle: string;
  portals: string[];
  position: { x: number; y: number }; // percentage
  connections: string[];
  metric: string;
  color: string;
}

const SYSTEM_NODES: SystemNode[] = [
  {
    id: "paypagar",
    label: "PayPagar",
    subtitle: "Fintech",
    portals: ["Brand Site", "Onboarding", "Admin/Checker", "Company Portal", "Backend API"],
    position: { x: 50, y: 15 },
    connections: ["courier"],
    metric: "5 apps",
    color: "#10b981",
  },
  {
    id: "staydiscover",
    label: "StayDiscover",
    subtitle: "Hospitality",
    portals: ["Vendor Hub", "Customer Site", "Backend API"],
    position: { x: 20, y: 45 },
    connections: ["playlyne"],
    metric: "3 apps",
    color: "#f59e0b",
  },
  {
    id: "playlyne",
    label: "Playlyne",
    subtitle: "Sports Booking",
    portals: ["Customer App", "Vendor Hub", "Superadmin Portal", "Backend API"],
    position: { x: 50, y: 60 },
    connections: ["staydiscover", "food-delivery"],
    metric: "4 apps",
    color: "#8b5cf6",
  },
  {
    id: "courier",
    label: "Courier Management",
    subtitle: "Logistics",
    portals: ["Admin Dashboard", "Tracking Portal", "Backend API"],
    position: { x: 80, y: 30 },
    connections: ["paypagar", "food-delivery"],
    metric: "3 apps",
    color: "#3b82f6",
  },
  {
    id: "food-delivery",
    label: "Food Delivery",
    subtitle: "E-commerce",
    portals: ["Customer Site", "Vendor Backend", "Admin Portal"],
    position: { x: 80, y: 70 },
    connections: ["courier", "playlyne"],
    metric: "3 apps",
    color: "#ef4444",
  },
];

export function SystemBlueprint() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Generate connection lines between nodes
  const getConnections = () => {
    const lines: Array<{
      from: SystemNode;
      to: SystemNode;
      active: boolean;
    }> = [];

    SYSTEM_NODES.forEach((node) => {
      node.connections.forEach((connId) => {
        const targetNode = SYSTEM_NODES.find((n) => n.id === connId);
        if (targetNode) {
          const isActive =
            !hoveredNode ||
            hoveredNode === node.id ||
            hoveredNode === targetNode.id;

          lines.push({
            from: node,
            to: targetNode,
            active: isActive,
          });
        }
      });
    });

    return lines;
  };

  const connections = getConnections();

  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              System Architecture
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              5 ecosystems. 18 portals. One architectural philosophy.
            </p>
          </div>

          {/* Desktop: Interactive Graph */}
          <div className="hidden lg:block">
            <div className="relative w-full h-[600px] bg-background/50 rounded-2xl border border-border overflow-hidden">
              {/* SVG Connection Lines Layer */}
              <svg
                ref={svgRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 1 }}
              >
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="rgb(var(--accent))"
                      opacity="0.3"
                    />
                  </marker>
                </defs>

                {connections.map((conn, idx) => {
                  const x1 = conn.from.position.x;
                  const y1 = conn.from.position.y;
                  const x2 = conn.to.position.x;
                  const y2 = conn.to.position.y;

                  return (
                    <line
                      key={`${conn.from.id}-${conn.to.id}-${idx}`}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="rgb(var(--accent))"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                      opacity={conn.active ? 0.4 : 0.1}
                      className="blueprint-line"
                      style={{
                        transition: "opacity 0.3s ease",
                      }}
                      markerEnd="url(#arrowhead)"
                    />
                  );
                })}
              </svg>

              {/* Nodes Layer */}
              {SYSTEM_NODES.map((node) => {
                const isHovered = hoveredNode === node.id;
                const isConnected =
                  hoveredNode &&
                  (node.id === hoveredNode ||
                    node.connections.includes(hoveredNode) ||
                    SYSTEM_NODES.find((n) => n.id === hoveredNode)?.connections.includes(
                      node.id
                    ));
                const shouldFade = hoveredNode && !isConnected;

                return (
                  <div
                    key={node.id}
                    className="absolute blueprint-node"
                    style={{
                      left: `${node.position.x}%`,
                      top: `${node.position.y}%`,
                      transform: "translate(-50%, -50%)",
                      zIndex: isHovered ? 10 : 2,
                      opacity: shouldFade ? 0.2 : 1,
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                    }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <a
                      href={`/projects/${node.id}`}
                      className="block"
                      style={{
                        filter: isHovered ? "drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))" : "none",
                      }}
                    >
                      <div
                        className="hexagon relative w-40 h-40 flex items-center justify-center"
                        style={{
                          backgroundColor: "rgb(var(--surface))",
                          border: `3px solid ${node.color}`,
                          transform: isHovered ? "scale(1.1)" : "scale(1)",
                          transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                      >
                        <div className="text-center px-4">
                          <div
                            className="text-sm font-bold mb-1"
                            style={{ color: node.color }}
                          >
                            {node.label}
                          </div>
                          <div className="text-xs text-text-muted mb-2">
                            {node.subtitle}
                          </div>
                          <div className="text-xs font-semibold text-accent">
                            {node.metric}
                          </div>
                        </div>
                      </div>
                    </a>

                    {/* Portal count tooltip on hover */}
                    {isHovered && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-surface border border-border rounded-lg p-3 w-48 shadow-xl z-20">
                        <div className="text-xs font-semibold text-text mb-2">
                          Portals:
                        </div>
                        <ul className="space-y-1">
                          {node.portals.map((portal, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-text-muted flex items-center gap-2"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: node.color }}
                              />
                              {portal}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical List */}
          <div className="lg:hidden space-y-4">
            {SYSTEM_NODES.map((node) => (
              <a
                key={node.id}
                href={`/projects/${node.id}`}
                className="block bg-background border border-border rounded-lg p-6 hover:border-accent transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ color: node.color }}
                    >
                      {node.label}
                    </h3>
                    <p className="text-sm text-text-muted">{node.subtitle}</p>
                  </div>
                  <span className="text-sm font-semibold text-accent">
                    {node.metric}
                  </span>
                </div>

                <div className="pl-4 border-l-2" style={{ borderColor: node.color }}>
                  <p className="text-xs font-semibold text-text-muted mb-2">
                    Portals:
                  </p>
                  <ul className="space-y-1">
                    {node.portals.map((portal, idx) => (
                      <li key={idx} className="text-sm text-text-muted">
                        • {portal}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
