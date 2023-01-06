import './App.css';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Model } from './CubeGrass'
import {Cube} from './Cube'
import { Bounds, BakeShadows } from '@react-three/drei'
import { ArrayPositions, MaxPositions } from './constants/data';
import { useKeys } from './hooks/useKeys';
import Move from './functions/Move';
function App() {
  const { color } = useControls({ color: 'rgb(220,220,225)' })
  const [animate, setAnimate]=useState(false)
  const [SpawnCube, setSpawnCube] = useState([
    {
      x: 6,
      z: 2,
      y: 4,
    },
      {
      x: 4,
      z: 2,
      y: 2,
    },
            {
      x: 0,
      z: 2,
      y: 0,
    },
                        {
      x: 2,
      z: 2,
      y: 6,
    },
  ]);
  const HandleChange = (key,index) => {
    switch (key) {
      case 'up': 
        Move('up',setAnimate,animate,setSpawnCube)
        break
      case 'down': 
        Move('down',setAnimate,animate,setSpawnCube)
        break
            case 'left': 
        Move('left',setAnimate,animate,setSpawnCube)
        break
      case 'right': 
        Move('right',setAnimate,animate,setSpawnCube)
        break
      default:
      // Acción para cualquier otro caso
      break
    }
  }
  useKeys([
    { keys: ['ArrowUp', 'w', 'W'], fn: () => HandleChange('up') },
    { keys: ['ArrowDown', 's', 'S'], fn: () => HandleChange('down') },
    { keys: ['ArrowLeft', 'a', 'A'], fn: () => HandleChange('left') },
    { keys: ['ArrowRight', 'd', 'D'], fn: () => HandleChange('right') }
  ])
  return (
    <div className="App" style={{ background: color, height: '50vw' }}>
          <Canvas orthographic shadows dpr={[1, 20]} camera={{ position: [10, 10, 10], zoom: -1500 }}>
      <ambientLight intensity={0.1} />
      <hemisphereLight intensity={0.125} color="#8040df" />
      <spotLight castShadow color={color} intensity={5} position={[20, 50, 60]} angle={0.25} penumbra={1} shadow-mapSize={[128, 128]} shadow-bias={0.00005} />

        <Bounds fit clip observe margin={1}>
          {SpawnCube.map(c => {
            return (
              <Cube style={{transition: '2s ease'}} scale={1} position={[c.x, c.z, c.y]} />
            )
          })}
          {ArrayPositions.map(item => {
            return (
            <Model position={[item.x, item.z, item.y]} color={color} angle={0} />
            )
          })}
      </Bounds>
      <OrbitControls
        makeDefault
        minAzimuthAngle={0.72}
        maxAzimuthAngle={0.72}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
        enableZoom={true}
        enablePan={true}
        zoomSpeed={0.3}
      />
    </Canvas>
    </div>
  );
}

export default App;
