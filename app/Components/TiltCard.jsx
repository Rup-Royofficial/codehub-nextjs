import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

const Example = ({bgImg}) => {
  // console.log(bgImg)
  return (
    // bg-gradient-to-br from-indigo-500 to-violet-500
    <div className="grid w-full place-content-center  px-4 py-12 text-slate-900">
      <TiltCard backgImg={bgImg}/>
    </div>
  );
};

const TiltCard = ({backgImg}) => {
  // backgroundImg = "/images/illus-codespaces.png";
  // console.log(backgImg + "helloe")
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        
      }}
      className="relative h-96 w-72 rounded-xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200"
    >
      <div
        
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          backgroundImage: `url(${backgImg})`
        }}
        className="absolute inset-4 grid place-content-center rounded-xl  bg-cover bg-end  shadow-lg"
      >
        {/* <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        /> */}
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          
        </p>
      </div>
    </motion.div>
  );
};

export default Example;