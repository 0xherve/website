import Link from "next/link";
import { Icon } from "@/components/icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6 sm:px-8">
        <div className="flex items-center gap-5">
          {siteConfig.social.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="text-muted-foreground/75 hover:text-foreground transition-colors"
              aria-label={label}
            >
              <Icon icon={icon} />
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </footer>
  );
}
