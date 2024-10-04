import { eco_data } from "../../assets/data/data";

const EcoSystem = () => {
  return (
    <div className="EcoSystem bg-light py-3 px-12">
      <h1 className="title m-2 text-2xl font-bold text-blue-dark ">
        Chemosynthesis
      </h1>
      <p className="m-2 text-sm md:text-base font-normal md:font-medium ">
        <span className="font-semibold underline underline-offset-1">
          <a
            href="https://deepoceaneducation.org/resources/chemosynthesis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            chemosynthesis
          </a>
        </span>{" "}
        is the process by which microbes create sugars (food) using energy
        released from chemical reactions. This process is used to fuel the base
        of the food web at hydrothermal vents and cold seep sites. The
        chemosynthetic processes at vents and seeps vary based on the different
        chemicals found in the waters emerging from the seafloor at these sites.
        You can discover more through this{" "}
        <span className="font-semibold underline underline-offset-1">
          <a
            href="https://youtu.be/C0YzFLV_fVs?si=fMbXEF5opClTrzJU"
            target="_blank"
            rel="noopener noreferrer"
          >
            video
          </a>
        </span>
      </p>
      <div className="content grid grid-cols-8 gap-10 my-2 mx-8 ">
        {eco_data.map((item) => (
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
