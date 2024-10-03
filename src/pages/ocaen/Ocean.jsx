import React, { useEffect } from "react";
import "./style.scss"; // Ensure your styles are included here

const Ocean = () => {
  // useEffect(() => {
  //   // Function to handle the scroll event and move the Octocat
  //   const handleScroll = () => {
  //     const octocat = document.getElementById("octocat");
  //     const scrollY = window.scrollY || document.documentElement.scrollTop;
  //     const maxScroll =
  //       document.documentElement.scrollHeight - window.innerHeight;

  //     // Calculate the translation based on scroll position
  //     const translateX = (scrollY / maxScroll) * 600 - 300; // Move left or right, centered on the screen
  //     octocat.style.transform = `translateY(-50%) translateX(${translateX}px)`; // Move based on scroll
  //   };

  //   // Add event listener for scroll
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className="ocean">
      {/* Render bubbles */}
      <div className="bubble bubble--1"></div>
      <div className="bubble bubble--2"></div>
      <div className="bubble bubble--3"></div>
      <div className="bubble bubble--4"></div>
      <div className="bubble bubble--5"></div>
      <div className="bubble bubble--6"></div>
      <div className="bubble bubble--7"></div>
      <div className="bubble bubble--8"></div>
      <div className="bubble bubble--9"></div>
      <div className="bubble bubble--10"></div>
      <div className="bubble bubble--11"></div>
      <div className="bubble bubble--12"></div>

      {/* Octocat */}
      <div id="octocat"></div>
    </div>
  );
};

export default Ocean;
