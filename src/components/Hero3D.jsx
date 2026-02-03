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
    <div style={{ height: "100vh", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.2} />

<directionalLight
  position={[4, 4, 4]}
  intensity={1.5}
  color="#c4b5fd"
/>

<pointLight
  position={[-3, -3, -3]}
  intensity={1}
  color="#22d3ee"
/>


        <FloatingOrb />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", fontWeight: "800" }}>
          Hardik Gupta
        </h1>
        <p style={{ color: "#9f7aea", marginTop: "12px", fontSize: "1.2rem" }}>
          Apprentice Software Engineer
        </p>
      </div>
    </div>
  );
}
