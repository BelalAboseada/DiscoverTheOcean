import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import "./App.scss";
import Home from "./pages/Home/Home";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return <Home />;
}

export default App;
