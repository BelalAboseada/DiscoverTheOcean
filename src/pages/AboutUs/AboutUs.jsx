
const AboutUs = () => {
  // Avatars
  const AvatarsData = [
    {
      name: "Adham Mokhtar",
      role: "Team Leader",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Belal Hesham ",
      role: "Frontend dev",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Ahmed Ali",
      role: "CFO",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mahynour",
      role: "Ui / Ux designer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Rana",
      role: "CFO",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mark Johnson",
      role: "CFO",
      image: "https://via.placeholder.com/150",
    },
   
  ];
  return (
    <div className="AboutUs  p-2 bg-light-md  bottom-0 w-full z-10 ">
      <h1 className="Team font-semibold text-4xl text-blue my-3 mx-4">AOC Team</h1>
      <p className="font-normal text-base my-3 mx-4 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel porta
        nunc. Class <br />
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos
        <br /> himenaeos
      </p>
      <div className="Avatars grid grid-cols-6 gap-4  my-4">
        {AvatarsData.map((avatar, index) => (
          <div key={index} className="Avatar flex flex-col  items-center col-span-1">
            <img src={avatar.image} alt={avatar.name}  className="w-40 h-40 rounded-full object-cover "/>
            <h2 className="Name font-semibold text-xl my-1">{avatar.name}</h2>
            <p className="Role font-normal text-sm">{avatar.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs