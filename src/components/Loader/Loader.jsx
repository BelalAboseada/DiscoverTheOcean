/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import LoadingData from "@images/Loader.json";

const Loader = ({ className }) => {
  return (
    <div className="flex justify-center items-center  bg-blue-light h-[100vh] ">
      <Lottie animationData={LoadingData} className={` ${className} w-[350px] h-[350px]`} />
    </div>
  );
};

export default Loader;
