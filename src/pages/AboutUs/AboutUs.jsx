import { avatarsData } from "../../assets/data/data";

const AboutUs = () => {
  return (
    <div className="AboutUs  py-2 bg-blue-md  bottom-0 w-full px-12  z-10 ">
      <h1 className="Team font-semibold text-3xl md:text-4xl  text-light my-3 mx-4">
        Who is AOC team?
      </h1>
      <p className="font-light md:font-normal text-sm md:text-base my-3 mx-4 text-light-md ">
        We are a group of Egyptian youths with a shared passion for space,
        especially the wonders of our solar system. Despite working in diverse
        fields, we&apos;ve come together to combine our skills and expertise for
        the NASA Space Apps hackathon. This year, we&apos;re excited to explore
        the potential ecosystem of Europa&apos;s ocean, contributing our unique
        perspectives to this fascinating challenge.
      </p>
      <div className="Avatars grid grid-cols-3   md:grid-cols-3 lg:grid-cols-6 gap-4  my-4">
        {avatarsData.map((avatar, index) => (
          <div
            key={index}
            className="Avatar flex flex-col  items-center col-span-1"
          >
            <img
              src={avatar.image}
              alt={avatar.name}
              className="w-28 md:w-40 h-28 md:h-40 rounded-full object-scale-down bg-light-md "
              loading="lazy"
            />
            <h2 className="Name font-semibold text-xl my-1 text-light">
              {avatar.name}
            </h2>
            <p className="Role font-normal text-sm text-light">{avatar.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
