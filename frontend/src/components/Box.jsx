import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function Box(props) {
  // `useRef` se hum mesh ko directly access kar sakte hain
  const meshRef = useRef();

  // Hover state
  const [hovered, setHover] = useState(false);
  
  // Active (click) state
  const [active, setActive] = useState(false);

  // `useFrame` har frame par is function ko call karta hai
  useFrame((state, delta) => {
    // Box ko dheere-dheere rotate karein
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.8 : 1.5} // Click par bada ho
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      {/* Hover par color badlein */}
      <meshStandardMaterial color={hovered ? '#e94560' : '#1f4068'} />
    </mesh>
  );
}

export default Box;
