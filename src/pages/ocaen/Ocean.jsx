import Ocean_img from "../../assets/images/Ocean.jpg";
const Ocean = () => {
  return (
    <div className="Ocean relative flex justify-center items-center h-[150vh] z-30">
      <div className="ocean_image  absolute ">
        <img
          src={Ocean_img}
          alt="Ocean image"
          className=" w-full h-full  -z-10 object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Ocean;
