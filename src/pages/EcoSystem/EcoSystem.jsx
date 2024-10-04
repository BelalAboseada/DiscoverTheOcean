import image1 from "../../assets/images/Card_1.png";
import image2 from "../../assets/images/Card_2.png";
import image3 from "../../assets/images/Card_3.png";
import image4 from "../../assets/images/Card_4.png";
import image5 from "../../assets/images/Card_5.png";
import image6 from "../../assets/images/Card_6.png";

const EcoSystem = () => {
  const data = [
    {
      id: 1,
      title: "Archaeans",
      image: image1,
      desc: "These microorganisms thrive in extreme conditions and are likely to exist in Europa’s harsh environment.",
    },
    {
      id: 2,
      title: "Chemosynthetic Life",
      image: image2,
      desc: "Life forms relying on chemicals instead of sunlight, similar to Earth’s hydrothermal vent ecosystems.",
    },
    {
      id: 3,
      title: "Larger Complex Organisms",
      image: image3,
      desc: "Potentially more evolved life forms that may have developed over billions of years.",
    },
    {
      id: 4,
      title: "Crustaceans",
      image: image4,
      desc: "Small marine creatures that could have adapted to the deep ocean-like environment on Europa.",
    },
    {
      id: 5,
      title: "Tube worms",
      image: image5,
      desc: "Similar to Earth's hydrothermal vent worms, these creatures may thrive in Europa’s oceans.",
    },
    {
      id: 6,
      title: "Volcanic activity",
      image: image6,
      desc: "Geological activity could provide the heat and chemicals needed for life to thrive.",
    },
  ];

  return (
    <div className="EcoSystem bg-light p-2">
      <h1 className="title m-2 text-2xl font-bold text-blue-dark">
        Europa Ecosystem
      </h1>
      <p className="m-2 text-sm md:text-base font-normal md:font-medium">
        If life exists on Europa, it would likely resemble what we observe in
        Earth&apos;s deep oceans, relying on chemosynthesis around hydrothermal
        vents, with biodiversity ranging from microscopic organisms to simple
        multicellular life forms and potentially some complex organisms that
        evolved over billions of years.
      </p>
      <div className="content grid grid-cols-6 gap-10 my-2 mx-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="card col-span-6 md:col-span-3  lg:col-span-2 relative rounded-2xl overflow-hidden group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="card-image rounded-t-2xl object-cover"
            />
            <h2 className="card-title text-xl font-bold bg-blue-dark text-light px-2 py-4 rounded-b-2xl">
              {item.title}
            </h2>
            <div className="overlay absolute inset-0 bg-blue-dark bg-opacity-80 text-white p-4 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <p className="text-center">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoSystem;
