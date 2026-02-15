import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function FloatingOrb() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2.5}>
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#9f7aea"
          roughness={0.15}
          metalness={0.9}
          emissive="#6d28d9"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* 3D Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[4, 4, 4]} intensity={1.5} />
          <pointLight position={[-3, -3, -3]} intensity={1} />
          <FloatingOrb />
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
          />
        </Canvas>
      </div>

      {/* Text Overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", fontWeight: "800" }}>
          Hardik Gupta
        </h1>

        <p
          style={{
            marginTop: "12px",
            fontSize: "1.2rem",
            color: "#9f7aea",
          }}
        >
          Apprentice Software Engineer
        </p>

        {/* Resume Button */}
        <a
          href="/Hardik_Gupta_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "28px",
            padding: "12px 28px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #7c3aed, #9333ea)",
            color: "white",
            textDecoration: "none",
            fontSize: "0.95rem",
            fontWeight: "600",
            transition: "all 0.3s ease",
            pointerEvents: "auto",
          }}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = "0 0 20px rgba(147, 51, 234, 0.6)")
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = "none")
          }
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
