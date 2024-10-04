import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import {
  WhatsappShareButton,
  TwitterShareButton,
  FacebookShareButton,
 EmailShareButton,
  LinkedinShareButton,
} from "react-share";

const Footer = () => {

    const shareUrl = "https://discover-the-ocean.vercel.app/"; 
      const title = "Europa Ocean"; 
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
      <div className="social grid grid-cols-5 gap-4 my-2">
        <WhatsappShareButton url={shareUrl} title={title}>
          <FaWhatsapp
            className="text-light-md w-8 h-8"
            style={{
              color: "#A1B0C6",
            }}
          />
        </WhatsappShareButton>
        <LinkedinShareButton url={shareUrl} title={title}>
          <span>
            <FaLinkedin
              className="text-light-md w-8 h-8"
              style={{
                color: "#A1B0C6",
              }}
            />
          </span>
        </LinkedinShareButton>
        <FacebookShareButton url={shareUrl} title={title}>
          <span>
            <FaFacebook
              className="text-light-md w-8 h-8"
              style={{
                color: "#A1B0C6",
              }}
            />
          </span>
        </FacebookShareButton>
        <EmailShareButton url={shareUrl} title={title}>
          <span>
            <IoMail
              className="text-light-md w-8 h-8"
              style={{
                color: "#A1B0C6",
              }}
            />
          </span>
        </EmailShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <span>
            <FaTwitter
              className="text-light-md w-8 h-8"
              style={{
                color: "#A1B0C6",
              }}
            />
          </span>
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default Footer;
