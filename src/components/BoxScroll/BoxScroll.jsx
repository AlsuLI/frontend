import * as THREE from "three";
import { useRef, useState } from "react";
import images from "../../constants/images";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Decal, Html, useTexture } from "@react-three/drei";
import "./BoxScroll.scss";
import { AppWrapper} from "../../wrapper";

function Box({ text, color, args, image, ...props }) {
  const [hovered, setHovered] = useState(false);
  const texture = useTexture(image);

  return (
    <mesh
      {...props}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
    >
      <boxGeometry args={[5, 7, 1]}  />
      <meshStandardMaterial color={hovered ? "hotpink" : color} />
      <Decal
        position={[0, 1.5, 0.5]}
        scale={[3, 3, 0]}
        rotation={[0, 0, 0]}
        transparent
      >
        <meshBasicMaterial
          map={texture}
          polygonOffset
          polygonOffsetFactor={-1}
          transparent
        />
      </Decal>
      <Html
        style={{ width: "14.75em", textAlign: "justify " }}
        position={[-1.5, -0.3, 0]}
      >
        {text}
      </Html>
    </mesh>
  );
}

function ScrollContainer({ scroll, children }) {
  const { viewport } = useThree();
  const group = useRef();
  useFrame((state, delta) => {
    group.current.position.y = THREE.MathUtils.damp(
      group.current.position.y,
      viewport.height * scroll.current,
      4,
      delta
    );
  });
  return (
    <group style={{ display: "flex" }} ref={group}>
      {children}
    </group>
  );
}

function Scene() {
  return (
    <>
      <Box
        text={
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            deleniti soluta, et, cupiditate optio ducimus autem ratione ipsa
            placeat rem eveniet labore delectus blanditiis excepturi a.
            Distinctio est sapiente perspiciatis!
          </span>
        }
        color="#FFFFFF"
        position={[0, 0, -1]}
        image={images.frontend}
      />
      <Box
        text={<span>This is HTML</span>}
        color="#fbe7e8"
        position={[-6, 0, -1]}
        image={images.webD}
      />
      <Box
        text={<h1>H1 caption</h1>}
        color="#fbe7e8"
        position={[6, 0, -1]}
        image={images.js}
      />
    </>
  );
}

function BoxScroll() {
  const scrollRef = useRef();
  const scroll = useRef(0);
  return (
    <>
      <div className="wrapper">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 0, 10]} />
          <ScrollContainer scroll={scroll}>
            <Scene />
          </ScrollContainer>
        </Canvas>
        <div
          ref={scrollRef}
          onScroll={(e) =>
            (scroll.current =
              e.target.scrollTop /
              (e.target.scrollHeight - e.target.clientHeight))
          }
          className="scroll"
        >
          <div style={{ height: `100vh` }}></div>
        </div>
      </div>
    </>
  );
}



export default AppWrapper(
(BoxScroll),
  "про",
);
