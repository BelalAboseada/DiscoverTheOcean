const AboutUs = () => {
  // Avatars
  const AvatarsData = [
    {
      name: "Adham Mokhtar",
      role: "Team Leader",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Belal Abo seada",
      role: "Frontend Developer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mahynour Sammany",
      role: "UI UX Designer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Ahmed Ali ",
      role: "Ui / Ux designer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Rana Sherif ",
      role: "Graphic Designer",
      image: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="AboutUs  p-2 bg-blue-md  bottom-0 w-full z-10 ">
      <h1 className="Team font-semibold text-3xl md:text-4xl  text-light my-3 mx-4">
        Who is AOC team?
      </h1>
      <p className="font-light md:font-normal text-sm md:text-base my-3 mx-4 text-light-md ">
        We are a group of Egyptian youths with a shared passion for space,
        especially the wonders of our solar system. Despite working in diverse
        fields, we&apos;ve come together to combine our skills and expertise for the
        NASA Space Apps hackathon. This year, we&apos;re excited to explore the
        potential ecosystem of Europa&apos;s ocean, contributing our unique
        perspectives to this fascinating challenge.
      </p>
      <div className="Avatars grid grid-cols-1   md:grid-cols-3 lg:grid-cols-5 gap-4  my-4">
        {AvatarsData.map((avatar, index) => (
          <div
            key={index}
            className="Avatar flex flex-col  items-center col-span-1"
          >
            <img
              src={avatar.image}
              alt={avatar.name}
              className="w-40 h-40 rounded-full object-cover "
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
