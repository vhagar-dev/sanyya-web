export function NoiseOverlay() {
  // Subtle paper grain so surfaces feel physical rather than flat.
  return (
    <div
      aria-hidden
      className="noise pointer-events-none fixed inset-0 z-[1] opacity-[0.035] mix-blend-multiply dark:opacity-[0.05] dark:mix-blend-screen"
    />
  );
}
