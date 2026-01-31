interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "red" | "green" | "muted";
  className?: string;
}

const badgeVariants = {
  gold: "bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border-[var(--color-accent)]",
  red: "bg-red-500/10 text-red-400 border-red-500/30",
  green: "bg-green-500/10 text-green-400 border-green-500/30",
  muted: "bg-[var(--color-bg-elevated)]/50 text-[var(--color-text-muted)] border-[var(--color-border)]",
};

export default function Badge({
  children,
  variant = "gold",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full border tracking-wide ${badgeVariants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
