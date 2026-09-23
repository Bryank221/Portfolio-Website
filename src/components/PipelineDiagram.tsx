import type { PipelineStep } from "@/data/projects";

export default function PipelineDiagram({
  steps,
  size = "sm",
}: {
  steps: PipelineStep[];
  size?: "sm" | "lg";
}) {
  const text = size === "sm" ? "text-[9px]" : "text-[11px]";
  const pad = size === "sm" ? "px-2 py-1.5" : "px-3 py-2.5";

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-1.5">
          <div
            className={`border border-border-strong bg-surface font-mono ${text} ${pad} tracking-wide text-muted whitespace-nowrap`}
          >
            {step.label}
          </div>
          {i < steps.length - 1 && (
            <span className="text-accent/70" aria-hidden>
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
