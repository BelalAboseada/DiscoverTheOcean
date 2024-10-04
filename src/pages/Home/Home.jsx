import { useState, useEffect } from "react";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import Loader from "../../components/Loader/Loader";
import EcoSystem from "../EcoSystem/EcoSystem";
import UpComingData from "../UpComingData/UpComingData";
import Footer from "../Footer/Footer";

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
    <div className="Home ">
      {isLoading ? (
        <div className="Loader">
          <Loader />
        </div>
      ) : (
        <>
          <Hero />
          <EcoSystem />
          <UpComingData /> 
          <AboutUs />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
