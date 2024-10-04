import { useState, useEffect } from "react";
import moon from "@images/Moon3.png";
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
    <div className="Hero h-[300vh] main_bg overflow-hidden">
      <div className="logo absolute left-4 top-4 z-10">
        <span className="font-bold md:font-extrabold text-base text-light-md text-light">
          Discover our
          <br /> Europa ocean
        </span>
      </div>
      <div className="content h-[100vh]  relative flex justify-center">
        {scrollY <= 650 && (
          <div
            className="moon absolute z-10  mt-36  "
            id="moon"
            style={{
              transform: `translateY(${scrollY * 0.5}px) rotate(${-Math.min(
                scrollY,
                90
              )}deg) scale(${1 + scrollY / 1000})`,
              opacity: `${Math.max(1 - scrollY / 600, 0)}`,
              transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
            }}
          >
            <img
              src={moon}
              alt="moon"
              className="bg-transparent w-[400px] h-[400px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[550px] scale-125 object-contain mix-blend-screen"
              loading="lazy"
            />
          </div>
        )}

        <div className="absolute top-16 right-12 md:top-20 lg:top-24 md:right-16 lg:right-20 text-light m-2 p-2 max-w-[350px] md:max-w-[400px] lg:max-w-[500px]">
          <p className="text-xs font-light md:text-sm lg:text-base text-light-md lg:font-normal ">
            Icy Surface which is 10:15 miles thick It is exposed to constant
            radiation from Jupiter. its thickness prevents sunlight from
            reaching the ocean below, but this thickness protects the ocean
            beneath it from direct exposure to radiation
          </p>
        </div>
        <div className="absolute lg:bottom-14 lg:left-36 bottom-36 left-20 md:bottom-12  md:left-16 text-light m-2 p-2 max-w-[350px] md:max-w-[400px] lg:max-w-[500px] ">
          <p className="text-xs font-light md:text-sm lg:text-base text-light-md lg:font-normal">
            Europa&apos;s subsurface ocean contains salty cold water, but with
            temperatures near thermal vents reaching 80°C to 120°C under high
            pressure. Rich in volcanic gases like H2S, CH4, H2, C, and N2, it
            spans depths from 40 to 150 miles. These conditions make it a key
            focus in the search for extraterrestrial life.
          </p>
        </div>
      </div>
      <div className="ocean h-[200vh] relative">
        <div
          className="Popup max-w-[300px]   w-fit p-2 absolute rounded-2xl top-[25vh] left-[70vh] backdrop-blur-lg"
          style={{
            background: "#5B6D89A3",
          }}
          data-aos="zoom-in"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <p className=" text-base text-light-md font-medium">
            Europe ocean is considered one of the most promising places in the
            Solar system to look for life beyond earth.
          </p>
        </div>
        <div
          className="Popup max-w-[350px]   w-fit p-2 absolute rounded-2xl top-[60vh] right-24 backdrop-blur-lg"
          style={{
            background: "#5B6D89A3",
          }}
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <p className=" text-base text-light-md font-semibold">
            There are three main requirements to life!
          </p>
          <ul className="list-disc text-base text-light-md font-medium px-4">
            <li>Liquid water </li>
            <li>Certain chemical elements </li>
            <li>Energy Source</li>
          </ul>
        </div>
        <div
          className="Popup max-w-[300px]   w-fit p-2 absolute rounded-2xl top-[90vh] left-16 backdrop-blur-lg"
          style={{
            background: "#5B6D89A3",
          }}
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <p className=" text-base text-light-md font-medium">
            <span className="font-semibold block">Liquid water</span> ocean
            contains salty cold water, but with temperatures near thermal vents
            reaching <span className="font-semibold">80°C</span> to{" "}
            <span className="font-semibold">120°C</span> under high pressure.
          </p>
        </div>
        <div
          className="Popup max-w-[300px]   w-fit p-2 absolute rounded-2xl top-[130vh] right-16 backdrop-blur-lg"
          style={{
            background: "#5B6D89A3",
          }}
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <p className=" text-base text-light-md font-medium">
            <span className="block font-semibold"> Certain Chemicals</span> This
            water rich in volcanic gases like{" "}
            <span className="font-semibold">H2S, CH4, H2, C,</span> and N2, it
            spans depths from{" "}
            <span className="font-semibold">40 to 150 miles.</span>
          </p>
        </div>
        <div
          className="Popup max-w-[400px]   w-fit p-3 absolute rounded-2xl top-[150vh] left-16  backdrop-blur-lg "
          style={{
            background: "#5B6D89A3",
          }}
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <p className=" text-base text-light-md  font-medium ">
            <span className="block font-semibold">
              Energy Source Geological feature
            </span>{" "}
            1. Volcanic activity Its source is the movement of the rocky mantle
            below the ocean layer, which is the source that supplies the
            environment with chemical energy such as{" "}
            <span className="font-semibold">carbon (C) , sulfur,</span> and some
            gases such as <span className="font-semibold">ammonia (NH3)</span>,
            <span className=" font-semibold"> Methane(CH4)</span>, and{" "}
            <span className="font-semibold">nitrogen(N2).</span>
          </p>
        </div>
        <div
          className="Popup max-w-[400px]   w-fit p-2 absolute rounded-2xl top-[165vh] right-16 backdrop-blur-lg "
          style={{
            background: "#5B6D89A3",
          }}
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <p className=" text-base text-light-md  font-medium">
            <span className="font-semibold "> Hydrothermal veins </span>{" "}
            Geological openings produce streams of hot water rich in minerals
            necessary for chemosynthesis processes and are also the main source
            of hydrogen sulfide gas. The temperature of the water rushing from
            these openings may reach{" "}
            <span className="font-semibold">400c°</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
