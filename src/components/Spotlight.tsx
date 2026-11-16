export default function Spotlight() {
  // Clean, static subtle ambient lighting at the top for depth — no tacky cursor follower
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-white/[0.02] blur-[120px]" />
    </div>
  );
}
