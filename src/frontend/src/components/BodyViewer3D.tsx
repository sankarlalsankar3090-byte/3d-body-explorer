import { Button } from "@/components/ui/button";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { RotateCcw } from "lucide-react";
import { Suspense, useCallback, useEffect, useRef } from "react";
import type { Mesh } from "three";

interface OrganMeshProps {
  modelType: string;
  targetColor: string;
}

function BrainMesh({ color }: { color: string }) {
  const meshRef = useRef<Mesh>(null);
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    timeRef.current += delta * 0.4;
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <icosahedronGeometry args={[1.1, 3]} />
      <meshStandardMaterial color={color} roughness={0.7} metalness={0.05} />
    </mesh>
  );
}

function HeartMesh({ color }: { color: string }) {
  const meshRef = useRef<Mesh>(null);
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    timeRef.current += delta * 1.2;
    if (meshRef.current) {
      const pulse = 1 + Math.sin(timeRef.current * Math.PI * 2) * 0.06;
      meshRef.current.scale.setScalar(pulse);
      meshRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <mesh ref={meshRef} castShadow rotation={[Math.PI / 8, 0, Math.PI / 12]}>
      <torusGeometry args={[0.75, 0.45, 20, 32]} />
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
    </mesh>
  );
}

function LungsMesh({ color }: { color: string }) {
  const groupRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef as React.RefObject<never>}>
      <mesh position={[-0.65, 0, 0]} castShadow>
        <sphereGeometry args={[0.6, 20, 16]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.05} />
      </mesh>
      <mesh position={[0.65, 0, 0]} scale={[1, 1.15, 1]} castShadow>
        <sphereGeometry args={[0.55, 20, 16]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.05} />
      </mesh>
      <mesh position={[0, -0.9, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.14, 0.5, 12]} />
        <meshStandardMaterial color={color} roughness={0.65} metalness={0.05} />
      </mesh>
    </group>
  );
}

function StomachMesh({ color }: { color: string }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.13;
    }
  });

  return (
    <mesh ref={meshRef} scale={[1.3, 0.85, 0.9]} castShadow>
      <torusKnotGeometry args={[0.65, 0.28, 100, 16, 2, 3]} />
      <meshStandardMaterial color={color} roughness={0.65} metalness={0.05} />
    </mesh>
  );
}

function LiverMesh({ color }: { color: string }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={[1.5, 0.7, 0.85]} castShadow>
      <sphereGeometry args={[0.9, 24, 18]} />
      <meshStandardMaterial color={color} roughness={0.6} metalness={0.05} />
    </mesh>
  );
}

function KidneysMesh({ color }: { color: string }) {
  const groupRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={groupRef as React.RefObject<never>}>
      <mesh position={[-0.7, 0, 0]} scale={[0.7, 1.1, 0.7]} castShadow>
        <sphereGeometry args={[0.6, 20, 16]} />
        <meshStandardMaterial color={color} roughness={0.55} metalness={0.05} />
      </mesh>
      <mesh position={[0.7, 0, 0]} scale={[0.7, 1.1, 0.7]} castShadow>
        <sphereGeometry args={[0.6, 20, 16]} />
        <meshStandardMaterial color={color} roughness={0.55} metalness={0.05} />
      </mesh>
    </group>
  );
}

const ORGAN_COLORS: Record<string, string> = {
  brain: "#e8c4b8",
  heart: "#c0392b",
  lungs: "#e8a98a",
  stomach: "#f0c080",
  liver: "#b5651d",
  kidneys: "#cd9577",
};

function OrganMesh({ modelType, targetColor }: OrganMeshProps) {
  switch (modelType) {
    case "brain":
      return <BrainMesh color={targetColor} />;
    case "heart":
      return <HeartMesh color={targetColor} />;
    case "lungs":
      return <LungsMesh color={targetColor} />;
    case "stomach":
      return <StomachMesh color={targetColor} />;
    case "liver":
      return <LiverMesh color={targetColor} />;
    case "kidneys":
      return <KidneysMesh color={targetColor} />;
    default:
      return <BrainMesh color={targetColor} />;
  }
}

interface BodyViewer3DProps {
  modelType: string;
}

function CanvasScene({
  modelType,
  controlsRef,
}: {
  modelType: string;
  controlsRef: React.RefObject<{ reset: () => void } | null>;
}) {
  const color = ORGAN_COLORS[modelType] ?? "#e8c4b8";

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-2, -1, -3]} intensity={0.4} />
      <pointLight position={[0, 2, 4]} intensity={0.5} color="#7af5e8" />
      <OrbitControls
        ref={controlsRef as React.RefObject<never>}
        enablePan={false}
        minDistance={2}
        maxDistance={8}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.7}
        zoomSpeed={0.8}
        makeDefault
      />
      <Suspense fallback={null}>
        <OrganMesh modelType={modelType} targetColor={color} />
      </Suspense>
    </>
  );
}

export function BodyViewer3D({ modelType }: BodyViewer3DProps) {
  const controlsRef = useRef<{ reset: () => void } | null>(null);
  const prevModelRef = useRef<string>(modelType);

  const handleReset = useCallback(() => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  }, []);

  // Reset camera when body part changes
  useEffect(() => {
    if (prevModelRef.current !== modelType) {
      prevModelRef.current = modelType;
      handleReset();
    }
  }, [modelType, handleReset]);

  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[oklch(0.94_0.02_200)] to-[oklch(0.90_0.04_185)]"
      style={{ touchAction: "none" }}
      data-ocid="body-viewer-canvas"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.55 0.125 175) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <CanvasScene modelType={modelType} controlsRef={controlsRef} />
      </Canvas>

      {/* Gesture hint */}
      <div className="absolute bottom-4 left-4 flex gap-2 pointer-events-none">
        <span className="glass text-xs text-foreground/70 px-2.5 py-1 rounded-full flex items-center gap-1.5">
          <span>☞</span>
          <span>Drag to rotate</span>
        </span>
        <span className="glass text-xs text-foreground/70 px-2.5 py-1 rounded-full flex items-center gap-1.5">
          <span>⊕</span>
          <span>Scroll to zoom</span>
        </span>
      </div>

      {/* Reset camera button */}
      <Button
        variant="outline"
        size="icon"
        onClick={handleReset}
        className="absolute bottom-4 right-4 w-9 h-9 glass border-border/40 hover:bg-primary/10 hover:border-primary/40 transition-smooth"
        aria-label="Reset camera view"
        data-ocid="reset-camera-btn"
      >
        <RotateCcw className="w-4 h-4 text-foreground/70" />
      </Button>

      {/* Loading skeleton overlay (hidden once canvas mounts) */}
      <div
        className="absolute inset-0 bg-muted/30 animate-pulse rounded-2xl pointer-events-none opacity-0"
        aria-hidden="true"
      />
    </div>
  );
}
