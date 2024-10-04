import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer bg-blue-md flex items-center justify-center flex-col ">
      <h3
        className=" font-medium text-2xl my-2"
        style={{
          color: "#A1B0C6",
        }}
      >
        Share with your community
      </h3>
      <div className="social grid grid-cols-4 gap-4 my-2">
        <a href="">
          <span>
            <FaLinkedin
              className="text-light-md w-8 h-8"
              style={{
                color: "#A1B0C6",
              }}
            />
          </span>
        </a>
        <a href="">
          <span>
            <FaInstagram
              className="text-light-md w-8 h-8"
              style={{
                color: "#A1B0C6",
              }}
            />
          </span>
        </a>
        <a href="">
          <span>
            <FaYoutube
              className="text-light-md w-8 h-8"
              style={{
                color: "#A1B0C6",
              }}
            />
          </span>
        </a>
        <a href="">
          <span>
            <FaTwitter
              className="text-light-md w-8 h-8"
              style={{
                color: "#A1B0C6",
              }}
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
