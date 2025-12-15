export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
    </div>
  );
}
