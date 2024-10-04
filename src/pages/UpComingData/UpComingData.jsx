const UpComingData = () => {
  return (
    <div className="UpComingData bg-blue-dark px-12  py-8 ">
      <p
        className="text-lg md:text-xl lg:text-2xl font-normal md:font-medium  leading-loose "
        style={{
          color: "#A1B0C6",
        }}
      >
        Europa Clipper is launching Oct. 10, 2024, on the first mission to
        conduct a detailed study of Jupiter&apos;s moon Europa. There’s
        scientific evidence that the ingredients for life may exist on Europa
        right now.
      </p>
      <h4 className="text-lg md:text-xl lg:text-2xl font-semibold md:font-bold text-light leading-10   mt-12">
        Explore Europa&apos;s ocean further by delving into these resources:
      </h4>
      <ul
        className="list-disc  my-2 mx-4   font-light text-xl"
        style={{
          color: "#A1B0C6",
        }}
      >
        <li className="underline underline-offset-1">
          <a target="_blank" href="https://oceanworlds.space/">
            Network for ocean worlds
          </a>
        </li>
        <li className="underline underline-offset-1">
          <a
            target="_blank"
            href="https://science.nasa.gov/toolkit/oceanworlds/"
          >
            Ocean worlds resources
          </a>
        </li>
        <li className="underline underline-offset-1">
          <a target="_blank" href="https://www.nasa.gov/specials/ocean-worlds/">
            NASA: Ocean worlds
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UpComingData;
