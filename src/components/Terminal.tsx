"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const COMMANDS: Record<string, string> = {
  help: "Available commands: help, about, projects, skills, experience, contact, resume",
  about: "Navigating to system profile...",
  projects: "Navigating to all projects...",
  skills: "Navigating to tech stack...",
  experience: "Navigating to experience timeline...",
  contact: "Navigating to contact...",
  resume: "Resume link not yet available.",
};

const ROUTE_MAP: Record<string, string> = {
  about: "/#profile",
  projects: "/work",
  skills: "/#stack",
  experience: "/experience",
  contact: "/#contact",
};

export default function Terminal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [history, setHistory] = useState<string[]>([
    "Type 'help' to see available commands.",
  ]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cmd = value.trim().toLowerCase();
    if (!cmd) return;
    const response = COMMANDS[cmd] ?? `Command not found: ${cmd}`;
    setHistory((h) => [...h, `$ ${value}`, response]);
    setValue("");

    const target = ROUTE_MAP[cmd];
    if (target) {
      setTimeout(() => {
        const [routePath, hash] = target.split("#");
        const currentPath = window.location.pathname;
        if (hash && (routePath === currentPath || (routePath === "/" && currentPath === "/"))) {
          document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" });
        } else {
          router.push(target);
        }
        onClose();
      }, 400);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-200 flex items-start justify-center bg-background/90 backdrop-blur-sm px-4 pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl border border-accent/40 bg-surface-raised font-mono text-xs shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="text-muted-dim tracking-wide">bryan@portfolio:~</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close terminal"
                className="text-muted-dim hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <div className="max-h-64 overflow-y-auto px-4 py-3 space-y-1">
              {history.map((line, i) => (
                <p
                  key={i}
                  className={line.startsWith("$") ? "text-foreground" : "text-muted"}
                >
                  {line}
                </p>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border px-4 py-3">
              <span className="text-accent">$</span>
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="type a command..."
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-dim focus:outline-none"
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
