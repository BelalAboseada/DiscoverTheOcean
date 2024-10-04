import Belal from "../../assets/images/Belal.jpeg";
import Ahmed from "../../assets/images/Ahmed.png";
import Adham from "../../assets/images/Adham.png";
import Rana from "../../assets/images/Rana.jpg";
import Nour from "../../assets/images/Nour.jpg";
import Mahmoud from "../../assets/images/Mahmoud.jpg";

const AboutUs = () => {
  // Avatars
  const AvatarsData = [
    {
      name: "Adham Mokhtar",
      role: "Geophysicist, Scientific Officer.",
      image: Adham,
    },
    {
      name: "Belal Abo seada",
      role: "Frontend Developer",
      image: Belal,
    },
    {
      name: "Mahynour Sammany",
      role: "UI UX Designer",
      image: Nour,
    },
    {
      name: "Ahmed Ali ",
      role: "Technical Support",
      image: Ahmed,
    },
    {
      name: "Rana Sherif ",
      role: "Graphic Designer",
      image: Rana,
    },
    {
      name: "Mahmoud Hafez",
      role: "Video Editor",
      image: Mahmoud,
    },
  ];
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
      <div className="Avatars grid grid-cols-1   md:grid-cols-3 lg:grid-cols-6 gap-4  my-4">
        {AvatarsData.map((avatar, index) => (
          <div
            key={index}
            className="Avatar flex flex-col  items-center col-span-1"
          >
            <img
              src={avatar.image}
              alt={avatar.name}
              className="w-40 h-40 rounded-full object-scale-down bg-light-md "
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
