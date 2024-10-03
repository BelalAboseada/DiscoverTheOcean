import { useState, useEffect, useRef } from "react";
import moon from "../../assets/images/moon.png";
import stones from "../../assets/images/stones.png";
import "./style.scss";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const constraintsRef = useRef(null);

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
    <div ref={constraintsRef} className="Hero relative overflow-hidden">
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
            className="bg-transparent   w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px]   mix-blend-screen"
            loading="lazy"
          />
        </div>
        {/* Stones */}
        <div
          className="stones_1 absolute top-44 right-20 md:top-15 md:right-30 lg:top-20 lg:right-40"
          style={{
            transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.3}px)`,
          }}
        >
          <img
            src={stones}
            alt="stones"
            className="bg-transparent w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] object-cover mix-blend-screen"
            loading="lazy"
          />
        </div>
        <div
          className="stones_2 absolute top-20 left-20 md:top-34 md:left-34 lg:top-40 lg:left-40"
          style={{
            transform: `translate(${scrollY * -0.3}px, ${scrollY * 0.4}px)`,
          }}
        >
          <img
            src={stones}
            alt="stones"
            className="bg-transparent  w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]  object-cover mix-blend-screen"
            loading="lazy"
          />
        </div>
        <div
          className="stones_3 absolute bottom-36 left-14 md:bottom-20 md:left-44 lg:bottom-20 lg:left-56"
          style={{
            transform: `translate(${scrollY * -0.2}px, ${scrollY * 0.2}px)`,
          }}
        >
          <img
            src={stones}
            alt="stones"
            className="bg-transparent  w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]  object-cover mix-blend-screen"
            loading="lazy"
          />
        </div>
        <div
          className="stones_4 absolute bottom-10 right-16"
          style={{
            transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.5}px)`,
          }}
        >
          <img
            src={stones}
            alt="stones"
            className="bg-transparent  w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]  object-cover mix-blend-screen"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
