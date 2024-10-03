import { useState, useEffect } from "react";
import moon from "../../assets/images/moon.png";
import stones from "../../assets/images/stones.png";
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
    <div className="Hero relative overflow-hidden">
      <div className="logo absolute left-4 top-4 z-10">
        <span className="font-extrabold text-base text-light">
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
            className="bg-transparent w-[350px] h-[350px] mix-blend-screen"
          />
        </div>
        {/* Stones */}
        <div
          className="stones_1 absolute top-20 right-40"
          style={{
            transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.3}px)`, 
          }}
        >
          <img
            src={stones}
            alt="stones"
            className="bg-transparent w-[250px] h-[250px] object-cover mix-blend-screen"
          />
        </div>
        <div
          className="stones_2 absolute top-40 left-40"
          style={{
            transform: `translate(${scrollY * -0.3}px, ${scrollY * 0.4}px)`, 
          }}
        >
          <img
            src={stones}
            alt="stones"
            className="bg-transparent w-[250px] h-[250px] object-cover mix-blend-screen"
          />
        </div>
        <div
          className="stones_3 absolute bottom-20 left-56"
          style={{
            transform: `translate(${scrollY * -0.2}px, ${scrollY * 0.2}px)`, 
          }}
        >
          <img
            src={stones}
            alt="stones"
            className="bg-transparent w-[250px] h-[250px] object-cover mix-blend-screen"
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
            className="bg-transparent w-[250px] h-[250px] object-cover mix-blend-screen"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
