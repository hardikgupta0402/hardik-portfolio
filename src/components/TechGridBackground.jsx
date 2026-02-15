export default function TechGridBackground() {
  return (
    <>
      {/* Base Dark Layer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -4,
          backgroundColor: "#050510",
        }}
      />

      {/* Moving Diagonal Cyber Stripes */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -3,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(135deg, rgba(124,58,237,0.05) 0px, rgba(124,58,237,0.05) 2px, transparent 2px, transparent 120px)",
          animation: "moveStripes 25s linear infinite",
        }}
      />

      {/* Vertical Scan Lines */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -2,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* Horizontal Light Sweep */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          background:
            "linear-gradient(to right, transparent 0%, rgba(124,58,237,0.15) 50%, transparent 100%)",
          animation: "lightSweep 8s ease-in-out infinite",
        }}
      />

      {/* Center Glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at center, rgba(124,58,237,0.25), transparent 70%)",
        }}
      />
    </>
  );
}
