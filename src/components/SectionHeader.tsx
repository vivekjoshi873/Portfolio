interface SectionHeaderProps {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  number,
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="mb-8 sm:mb-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="label-mono font-medium text-purple-400">
          {number}
        </span>
        <span className="label-mono">{eyebrow}</span>
        <span aria-hidden="true" className="h-px flex-1 bg-[#15181f]" />
      </div>
      <h2 className="text-balance-tight max-w-3xl text-2xl font-semibold tracking-[-0.025em] text-[#f5f5f5] sm:text-3xl capitalize">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#9ca3af]">
          {description}
        </p>
      )}
    </header>
  );
}
