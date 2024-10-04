import image1 from "@images/eco_1.png";
import image2 from "@images/eco_2.png";
import image3 from "@images/eco_3.png";
import image4 from "@images/eco_4.png";
import image5 from "@images/eco_5.png";
import image6 from "@images/eco_6.png";
import image7 from "@images/eco_7.png";
import image8 from "@images/eco_8.png";

const EcoSystem = () => {
  const data = [
    {
      id: 1,
      title: "Ecological Diversity",
      image: image1,
      desc: "The ecosystem would be based around deep hydrothermal vents, with a dense concentration of organisms near these vents that provide chemical energy. Away from the vents, the biological density would likely decrease, with life relying more on organic matter that may drift from the vents or be produced via chemosynthesis.",
    },
    {
      id: 2,
      title: "Archaeans",
      image: image2,
      desc: "These would form the foundation of life in such an environment. These organisms can exploit chemical compounds like hydrogen sulfide and methane as energy sources instead of relying on sunlight.",
    },
    {
      id: 3,
      title: "Larger Complex Organisms",
      image: image3,
      desc: "Although the existence of such complex organisms is not confirmed, the presence of energy sources and long evolutionary periods may allow for the emergence of fish-like or marine species that rely on a diet based on microbes, worms, or even predation within the ecosystem.",
    },
    {
      id: 4,
      title: "Crustaceans",
      image: image4,
      desc: "Small crustaceans may evolve to feed on bacteria or bacteria-feeding organisms, like small shrimp or similar creatures.",
    },
    {
      id: 5,
      title: "Tube worms",
      image: image5,
      desc: "Similar to those found on Earth around deep-sea hydrothermal vents. These worms live in symbiosis with chemosynthetic bacteria and supply them with raw materials from the vents to generate energy.",
    },
    {
      id: 6,
      title: "Volcanic activity",
      image: image6,
      desc: "Its source is the movement of the rocky mantle below the ocean layer, which is the source that supplies the environment with chemical energy such as carbon (C), sulfur, and some gases such as ammonia (NH3), Methane(CH4), and nitrogen(N2).",
    },
    {
      id: 7,
      title: "Heat- and cold-resistant enzymes",
      image: image7,
      desc: "The enzymes must function under extreme temperatures, both in the warm areas near the vents and in the colder, more distant regions",
    },
    {
      id: 8,
      title: "Cell membranes",
      image: image8,
      desc: "Organisms would need cell membranes capable of resisting the immense pressure in the ocean depths.",
    },
  ];

  return (
    <div className="EcoSystem bg-light py-3 px-12">
      <h1 className="title m-2 text-2xl font-bold text-blue-dark ">
        Europa Ecosystem
      </h1>
      <p className="m-2 text-sm md:text-base font-normal md:font-medium ">
        If life exists on Europa, it would likely resemble what we observe in
        Earth&apos;s deep oceans, relying on chemosynthesis around hydrothermal
        vents, with biodiversity ranging from microscopic organisms to simple
        multicellular life forms and potentially some complex organisms that
        evolved over billions of years.
      </p>
      <div className="content grid grid-cols-8 gap-10 my-2 mx-8 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="eco col-span-2 md:col-span-2  lg:col-span-2 relative rounded-2xl overflow-hidden group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="eco-image w-80   h-48 rounded-t-2xl object-cover"
            />
            <h2 className="eco-title text-lg font-bold bg-blue-dark text-light px-2 py-4 rounded-b-2xl ">
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
