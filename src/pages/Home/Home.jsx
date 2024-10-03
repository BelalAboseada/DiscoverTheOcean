import { useState, useEffect } from "react";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import Loader from "../../components/Loader/Loader";
import Ocean from "../ocaen/Ocean";
import UpComingData from "../UpComingData/UpComingData";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Time out for the loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Home">
      {isLoading ? (
        <div className="Loader">
          <Loader />
        </div>
      ) : (
        <>
          <Hero />
          <Ocean />
          <UpComingData />
          <AboutUs />
        </>
      )}
    </div>
  );
};

export default Home;
