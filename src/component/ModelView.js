import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "./Loader"; // مطمئن شوید که این کامپوننت درست وارد شده باشد
import * as THREE from "three"; // واردات سه از "three"
import Lights from "./Lights"; // نورپردازی
import IPhone from "./IPhone"; // مدل آی‌فون

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}: {
  index: number,
  groupRef: React.RefObject<THREE.Group>,
  gsapType: string,
  controlRef: React.RefObject<OrbitControls>,
  setRotationState: (state: number) => void,
  size: [number, number, number],
  item: any,
}) => {
  return (
    <Suspense fallback={<Loader />}>
      <View
        index={index}
        id={gsapType}
        className={`w-full h-full absolute ${
          index === 2 ? "right-[-100%]" : ""
        }`}>
        {/* Ambient Light */}
        <ambientLight intensity={0.5} color={"#ffffff"} />

        {/* دوربین */}
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />

        {/* نورپردازی */}
        <Lights />

        {/* کنترل‌های Orbit */}
        <OrbitControls
          makeDefault
          ref={controlRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0, 0)}
          onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        />

        {/* گروه (آی‌فون) */}
        <group
          ref={groupRef}
          name={index === 1 ? "small" : "large"}
          position={[0, 0, 0]}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </group>
      </View>
    </Suspense>
  );
};

export default ModelView;
