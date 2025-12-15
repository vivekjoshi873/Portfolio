export function GridPattern() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
