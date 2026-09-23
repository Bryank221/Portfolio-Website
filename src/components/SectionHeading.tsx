import Link from "next/link";

type SectionHeadingProps = {
  index: string;
  title: string;
  action?: { label: string; href: string };
};

export default function SectionHeading({ index, title, action }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-4 mb-8">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-accent">{index}</span>
        <h2 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          {title}
        </h2>
      </div>
      {action && (
        <Link
          href={action.href}
          className="group flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted transition-colors hover:text-foreground"
        >
          {action.label}
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      )}
    </div>
  );
}
