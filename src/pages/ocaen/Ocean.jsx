import Ocean_img from "../../assets/images/Ocean.jpg"
const Ocean = () => {
  return (
    <div className="Ocean relative w-full h-[120vh]">
      <div className="ocean_image absolute">
        <img src={Ocean_img} alt="Ocean image" className="w-full h-full object-cover " />
      </div>
    </div>
  );
}

export default Ocean