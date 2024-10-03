import { useState, useEffect } from "react";
import moon from "../../assets/images/Moon3.png"; // Using the uploaded image
import "./style.scss";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Hero h-[150vh]">
      <div className="logo absolute left-4 top-4 z-10 ">
        <span className="font-bold md:font-extrabold text-base text-light">
          Discover the
          <br /> Ocean
        </span>
      </div>
      <div className="content main_bg relative flex justify-center   ">
        {/* Moon Flip */}
        <div
          className="moon absolute mt-40"
          style={{
            transform: `translateY(${scrollY * 0.5}px) rotate(${-Math.min(
              scrollY,
              90
            )}deg)
             scale(${1 + scrollY / 1000})`,
            transition: "transform 1s ease-out",
          }}
        >
          <img
            src={moon}
            alt="moon"
            className="bg-transparent w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[650px] lg:h-[550px] scale-125 object-contain mix-blend-screen"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
