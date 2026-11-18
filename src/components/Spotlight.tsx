export default function Spotlight() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Engineering grid with vertical mask fade */}
      <div className="absolute inset-0 grid-bg mask-fade-b opacity-60" />

      {/* Ambient purple/cyan radial lighting matching omjaiswal.dev */}
      <div
        className="absolute inset-x-0 top-0 h-[420px] opacity-[0.16]"
        style={{
          background:
            "radial-gradient(720px 320px at 50% -8%, #7C3AED 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
