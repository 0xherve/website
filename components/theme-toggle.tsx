"use client";

import { useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined" && document.documentElement.classList.contains("dark")
  );

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <button
      onClick={toggle}
      className="text-muted-foreground/75 hover:text-foreground transition-colors"
      aria-label="Toggle theme"
    >
      {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
    </button>
  );
}
