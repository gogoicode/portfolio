import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

const FACES = [
  { id: 'about', label: 'About', position: [0, 0, 1.5], rotation: [0, 0, 0] },
  { id: 'experience', label: 'Experience', position: [1.5, 0, 0], rotation: [0, Math.PI / 2, 0] },
  { id: 'projects', label: 'Projects', position: [0, 0, -1.5], rotation: [0, Math.PI, 0] },
  { id: 'skills', label: 'Skills', position: [-1.5, 0, 0], rotation: [0, -Math.PI / 2, 0] },
  { id: 'certifications', label: 'Certifications', position: [0, 1.5, 0], rotation: [-Math.PI / 2, 0, 0] },
  { id: 'contact', label: 'Contact', position: [0, -1.5, 0], rotation: [Math.PI / 2, 0, 0] },
];

function CubeFace({ id, label, position, rotation, onSectionClick }) {
  const [hovered, setHover] = useState(false);

  return (
    <group position={position} rotation={rotation}>
      <mesh 
        onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { e.stopPropagation(); setHover(false); document.body.style.cursor = 'auto'; }}
        onClick={(e) => { e.stopPropagation(); onSectionClick(id); }}
      >
        <planeGeometry args={[3, 3]} />
        <meshPhysicalMaterial 
          color={hovered ? '#38BDF8' : '#0F172A'} 
          transparent 
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Border for the face */}
      <mesh>
        <boxGeometry args={[3, 3, 0.05]} />
        <meshBasicMaterial color={hovered ? '#38BDF8' : '#334155'} wireframe />
      </mesh>
      <Text 
        position={[0, 0, 0.1]} 
        fontSize={0.4} 
        color="#F8FAFC"
        anchorX="center" 
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

function InteractiveCube({ onSectionClick }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Optional: slow auto-rotation if we want it to move when user isn't interacting
    // groupRef.current.rotation.y += delta * 0.1;
    // groupRef.current.rotation.x += delta * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        {FACES.map((face) => (
          <CubeFace 
            key={face.id} 
            {...face} 
            onSectionClick={onSectionClick} 
          />
        ))}
      </group>
    </Float>
  );
}

export default function Scene({ onSectionClick }) {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <color attach="background" args={['#050810']} />
        
        <ambientLight intensity={0.5} />
        {/* Dynamic lights setup */}
        <directionalLight position={[10, 10, 5]} intensity={1} color="#38BDF8" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#818CF8" />
        <pointLight position={[0, 5, 0]} intensity={0.8} color="#C084FC" />

        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          <InteractiveCube onSectionClick={onSectionClick} />
        </Suspense>
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          minPolarAngle={0} 
          maxPolarAngle={Math.PI}
        />
      </Canvas>
    </div>
  );
}
