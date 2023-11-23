import { useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
function Model(props){
  const {scene}= useGLTF("./auto.glb");
  return <primitive object={scene}{...props}></primitive>
}
function App() {
  return (
    <Canvas dpr={[1,2]} shadows camera={{fov: 30}} style={{"position": "absolute",width: "60%", height:"800px"}}>
      <color attach="background" args={["#101010"]}></color>
      <PresentationControls speed={1.5} global zoom={3} polar={[-0.1, Math.PI/4]}>
        <Stage environment={"sunset"}>
          <Model scale={0.1}>
            
          </Model>

        </Stage>
      </PresentationControls>
      </Canvas>
    

  );
}

export default App ;
