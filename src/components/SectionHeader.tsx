interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#09090b]/90 px-6 py-5 backdrop-blur border-b border-zinc-800/40 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 lg:border-none">
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-200">
        {title}
      </h2>
    </div>
  );
}
