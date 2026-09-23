"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Terminal from "@/components/Terminal";

export default function SiteShell({ children }: { children: ReactNode }) {
  const [terminalOpen, setTerminalOpen] = useState(false);

  const openTerminal = useCallback(() => setTerminalOpen(true), []);
  const closeTerminal = useCallback(() => setTerminalOpen(false), []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;
      if (e.key === "/" && !isTyping) {
        e.preventDefault();
        setTerminalOpen(true);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <Navigation onOpenTerminal={openTerminal} />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border px-6 py-6 text-center font-mono text-[10px] tracking-[0.15em] text-muted-dim sm:px-10">
        © {new Date().getFullYear()} BRYAN KWONG — BUILT WITH NEXT.JS, TAILWIND &amp; FRAMER MOTION
      </footer>
      <Terminal open={terminalOpen} onClose={closeTerminal} />
    </>
  );
}
