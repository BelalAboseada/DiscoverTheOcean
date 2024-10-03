import { useState, useEffect, useRef } from "react";
import moon from "../../assets/images/moon.png";
import stones from "../../assets/images/stones.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./style.scss";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const constraintsRef = useRef(null);

  // State to store the final drag position after dragging
  const [dragOffsets, setDragOffsets] = useState({
    stone1: { x: 0, y: 0 },
    stone2: { x: 0, y: 0 },
    stone3: { x: 0, y: 0 },
    stone4: { x: 0, y: 0 },
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Independent motion values for each stone's drag
  const dragX1 = useMotionValue(0);
  const dragY1 = useMotionValue(0);

  const dragX2 = useMotionValue(0);
  const dragY2 = useMotionValue(0);

  const dragX3 = useMotionValue(0);
  const dragY3 = useMotionValue(0);

  const dragX4 = useMotionValue(0);
  const dragY4 = useMotionValue(0);

  // Store the final position after dragging ends
  const handleDragEnd = (event, info, stone) => {
    setDragOffsets((prev) => ({
      ...prev,
      [stone]: { x: info.point.x, y: info.point.y },
    }));
  };

  // Apply scroll and drag offset together for each stone
  const combinedX1 = useTransform(
    dragX1,
    (x) => x + scrollY * 0.3 + dragOffsets.stone1.x
  );
  const combinedY1 = useTransform(
    dragY1,
    (y) => y + scrollY * 0.3 + dragOffsets.stone1.y
  );

  const combinedX2 = useTransform(
    dragX2,
    (x) => x + scrollY * -0.3 + dragOffsets.stone2.x
  );
  const combinedY2 = useTransform(
    dragY2,
    (y) => y + scrollY * 0.4 + dragOffsets.stone2.y
  );

  const combinedX3 = useTransform(
    dragX3,
    (x) => x + scrollY * -0.2 + dragOffsets.stone3.x
  );
  const combinedY3 = useTransform(
    dragY3,
    (y) => y + scrollY * 0.2 + dragOffsets.stone3.y
  );

  const combinedX4 = useTransform(
    dragX4,
    (x) => x + scrollY * 0.2 + dragOffsets.stone4.x
  );
  const combinedY4 = useTransform(
    dragY4,
    (y) => y + scrollY * 0.5 + dragOffsets.stone4.y
  );

  return (
    <motion.div ref={constraintsRef} className="Hero relative overflow-hidden">
      <div className="logo absolute left-4 top-4 z-10">
        <span className="font-bold md:font-extrabold text-base text-light">
          Discover the
          <br /> Ocean
        </span>
      </div>
      <div className="content main_bg relative flex justify-center items-center h-[100vh]">
        {/* Moon */}
        <div
          className="moon absolute"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <img
            src={moon}
            alt="moon"
            className="bg-transparent w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] mix-blend-screen"
            loading="lazy"
          />
        </div>
        {/* Stones - each with independent motion and scroll behavior */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          onDragEnd={(event, info) => handleDragEnd(event, info, "stone1")}
          style={{ x: combinedX1, y: combinedY1 }} // Independent scroll + drag
          className="stones_1 absolute top-44 right-20 md:top-15 md:right-30 lg:top-20 lg:right-40"
        >
          <img
            src={stones}
            alt="stones"
            className="bg-transparent w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] object-cover mix-blend-screen"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          onDragEnd={(event, info) => handleDragEnd(event, info, "stone2")}
          style={{ x: combinedX2, y: combinedY2 }} // Independent scroll + drag
          className="stones_2 absolute top-20 left-20 md:top-34 md:left-34 lg:top-40 lg:left-40"
        >
          <img
            src={stones}
            alt="stones"
            className="bg-transparent w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] object-cover mix-blend-screen"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          onDragEnd={(event, info) => handleDragEnd(event, info, "stone3")}
          style={{ x: combinedX3, y: combinedY3 }} // Independent scroll + drag
          className="stones_3 absolute bottom-36 left-14 md:bottom-20 md:left-44 lg:bottom-20 lg:left-56"
        >
          <img
            src={stones}
            alt="stones"
            className="bg-transparent w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] object-cover mix-blend-screen"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          onDragEnd={(event, info) => handleDragEnd(event, info, "stone4")}
          style={{ x: combinedX4, y: combinedY4 }} // Independent scroll + drag
          className="stones_4 absolute bottom-10 right-16"
        >
          <img
            src={stones}
            alt="stones"
            className="bg-transparent w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] object-cover mix-blend-screen"
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
