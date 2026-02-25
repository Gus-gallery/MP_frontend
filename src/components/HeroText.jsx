import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { useRef, useMemo } from "react";

function TextParticles() {
  const pointsRef = useRef();
  const mouse = useRef(new THREE.Vector2(0, 0));

  const { positions, original } = useMemo(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const isMobile = width < 600;
    const text = "MARKET PROJECT";

    let fontSize = 300;
    ctx.font = `bold ${fontSize}px Helvetica`;

    while (ctx.measureText(text).width > width * 0.9) {
      fontSize -= 1;
      ctx.font = `bold ${fontSize}px Helvetica`;
    }

    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (isMobile) {
      ctx.fillText("MARKET", width / 2, height / 2 - fontSize);
      ctx.fillText("PROJECT", width / 2, height / 2 + fontSize);
    } else {
      ctx.fillText(text, width / 2, height / 2);
    }

    const imageData = ctx.getImageData(0, 0, width, height);
    const gap = width < 768 ? 3 : 4;

    const positions = [];
    const original = [];

    for (let y = 0; y < height; y += gap) {
      for (let x = 0; x < width; x += gap) {
        const index = (y * width + x) * 4;
        if (imageData.data[index + 3] > 128) {
          const px = x - width / 2;
          const py = height / 2 - y;
          positions.push(px, py, 0);
          original.push(px, py, 0);
        }
      }
    }

    return {
      positions: new Float32Array(positions),
      original: new Float32Array(original),
    };
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  useFrame(({ mouse: m }) => {
    mouse.current.x = m.x * window.innerWidth / 2;
    mouse.current.y = m.y * window.innerHeight / 2;

    const pos = geometry.attributes.position.array;

    for (let i = 0; i < pos.length; i += 3) {
      const dx = pos[i] - mouse.current.x;
      const dy = pos[i + 1] - mouse.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = window.innerWidth < 768 ? 80 : 120;

      if (dist < radius && dist > 0) {
        const force = (radius - dist) / radius;
        pos[i] += (dx / dist) * force * 5;
        pos[i + 1] += (dy / dist) * force * 5;
      } else {
        pos[i] += (original[i] - pos[i]) * 0.05;
        pos[i + 1] += (original[i + 1] - pos[i + 1]) * 0.05;
      }
    }

    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={1}
        color={"#ff9900"}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroParticlesWebGL() {
  return (
    <div style={{ position: "fixed", inset: 0, background: "#1A1A1A" }}>
      <Canvas
        camera={{ position: [0, 0, 500], fov: 75 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#101010"]} />

        <TextParticles />

        <EffectComposer>
          <Bloom
            intensity={2.5}
            luminanceThreshold={0}
            luminanceSmoothing={1.1}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}