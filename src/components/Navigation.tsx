"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/data/nav";

export default function Navigation({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="font-mono text-sm font-semibold tracking-wide">
          {SITE.name.toUpperCase()}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-[0.15em] text-muted transition-colors hover:text-foreground"
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 font-mono text-[11px] tracking-wide text-muted sm:flex">
            <span
              className="relative flex h-1.5 w-1.5"
              aria-hidden
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {SITE.availability.toUpperCase()}
          </div>
          <button
            type="button"
            onClick={onOpenTerminal}
            aria-label="Open command terminal"
            className="flex h-8 w-8 items-center justify-center border border-border font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            /
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1 border border-border md:hidden"
          >
            <span
              className={`h-px w-4 bg-foreground transition-transform ${menuOpen ? "translate-y-0.75 rotate-45" : ""}`}
            />
            <span
              className={`h-px w-4 bg-foreground transition-transform ${menuOpen ? "-translate-y-0.75 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 font-mono text-xs tracking-[0.15em] text-muted transition-colors hover:text-foreground"
                >
                  {link.label.toUpperCase()}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
