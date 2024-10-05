import { useState, useEffect } from "react";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import Loader from "../../components/Loader/Loader";
import EcoSystem from "../EcoSystem/EcoSystem";
import UpComingData from "../UpComingData/UpComingData";
import Footer from "../Footer/Footer";
import bg from "../../assets/images/Hero.png";
import moon from "../../assets/images/Moon3.png";

// List of images to preload
const imageUrls = [bg, moon];

const preloadImages = (urls) => {
  return Promise.all(
    urls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
         img.onload = () => resolve(url);
        img.onerror = reject;
      });
    })
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false); 

  useEffect(() => {
    const loadAssets = async () => {
      // Start preloading the images
      try {
        await preloadImages(imageUrls); // Preload images
        setDataLoaded(true); 
      } catch (error) {
        console.error("Error preloading images", error);
        setDataLoaded(true); 
      }
    };

    loadAssets();


    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000);

 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !dataLoaded) {
    return (
      <div className="Loader">
        <Loader />
      </div>
    );
  }

  return (
    <div className="Home">
      {/* Display content once the loader and assets are ready */}
      <Hero />
      <EcoSystem />
      <UpComingData />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
