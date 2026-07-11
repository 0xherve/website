import { Footer } from "@/components/footer";
import Link from "next/link";

const projects = [
  {
    name: "Toshokan",
    description: "Personal light novel reader.",
    href: "https://tosho.polimath.dev/",
    status: "live",
  },
  {
    name: "Key Stash",
    description: "Store and manage environment variables across projects.",
    href: "https://stash.polimath.dev/",
    status: "live",
  },
  {
    name: "Deck",
    description: "A simple local browser-based file editor",
    href: "https://github.com/0xherve/deck",
    status: "live",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 mx-auto max-w-4xl w-full p-6 sm:p-8">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-0">
          Projects
        </h1>
        <p className="text-muted-foreground mb-8">
          Things I've been working on.
        </p>

        <div className="space-y-0 divide-y divide-border/60">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex items-center justify-between py-3 first:pt-0 last:pb-0"
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <h2 className="text-base font-bold tracking-tight group-hover:underline">
                    {project.name}
                  </h2>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/40">
                    {project.status}
                  </span>
                </div>
                <p className="text-foreground/40 mt-1">
                  {project.description}
                </p>
              </div>
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/40 group-hover:text-foreground hover:text-foreground transition-colors text-sm ml-4 shrink-0"
                aria-label={`Visit ${project.name}`}
              >
                ↗
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
