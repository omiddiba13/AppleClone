import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
  return (
    <group name="lights">
      <Environment resolution={512}>
        <group>
          {/* نور اول با شدت ملایم‌تر */}
          <Lightformer
            form="rect"
            intensity={1} // شدت نور کمتر برای طبیعی‌تر شدن
            position={[-1, 0, -10]}
            scale={15}
            color={"#ffffff"}
          />
          {/* نور دوم با شدت کمتر */}
          <Lightformer
            form="rect"
            intensity={2} // شدت کمتر
            position={[-10, 2, 1]}
            scale={15}
            rotation-y={Math.PI / 2}
          />
          {/* نور سوم با شدت کمتر */}
          <Lightformer
            form="rect"
            intensity={2.5} // شدت کمتر
            position={[10, 0, 1]}
            scale={15}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>
      {/* نور نقطه‌ای اول با شدت ملایم‌تر */}
      <spotLight
        position={[-2, 10, 5]}
        angle={0.3}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.8} // کاهش شدت برای طبیعی‌تر شدن
        color={"#ffffff"}
      />
      {/* نور نقطه‌ای دوم با شدت ملایم */}
      <spotLight
        position={[0, -25, 10]}
        angle={0.3}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.8} // شدت کمتر
        color={"#ffffff"}
      />
      {/* نور نقطه‌ای سوم با شدت مناسب */}
      <spotLight
        position={[0, 15, 5]}
        angle={0.3}
        penumbra={1}
        decay={0.1}
        intensity={Math.PI * 2} // شدت نور متوسط
      />
      {/* نور محیطی برای روشنایی کلی */}
      <ambientLight intensity={0.6} color={"#ffffff"} />{" "}
      {/* افزایش نور محیطی به 0.6 */}
    </group>
  );
};

export default Lights;
