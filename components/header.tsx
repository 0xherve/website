import Link from "next/link";

const links = [
  { label: "projects", href: "/projects" },
  { label: "writing", href: "https://0xherve.substack.com/" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm border-b border-border/40">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="text-md font-bold font-pixel text-foreground tracking-tight">
          0xherve
        </Link>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
