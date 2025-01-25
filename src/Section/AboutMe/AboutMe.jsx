import { Typewriter } from "react-simple-typewriter";
import owner from "../../assets/user.jpg";
import LinkHover from "../../Components/linkHover";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div id="hero" className="max-w-7xl w-full mx-auto mb-12 md:mb-16 lg:mb-28">
      <div className="grid grid-cols-12 gap-4 justify-between items-center">
        <div className="col-span-12 md:p-6 lg:w-[80%] md:col-span-7">
          <h1 className="text-xl mb-4 font-playfair font-semibold md:text-3xl lg:text-5xl text-[#e5ff00]">
            FRONTEND WEB <br />
            <Typewriter
              words={["DEVELOPER"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2000}
            ></Typewriter>
          </h1>
          <p className="mb-4">
            We create beautiful, user-friendly websites and applications that
            solve real problems.
          </p>
          <ul className="flex items-center mb-8 gap-2">
            <LinkHover
              icon={<FaGithub className="text-3xl rounded-full"></FaGithub>}
              address={"https://github.com/SakibHasan7439"}
            ></LinkHover>

            <LinkHover
              icon={<FaLinkedin className="text-3xl rounded-full"></FaLinkedin>}
              address={"https://www.linkedin.com/in/sakib-hasan23dev"}
            ></LinkHover>

            <LinkHover
              icon={<FaTwitter className="text-3xl rounded-full"></FaTwitter>}
              address={"https://x.com/Sakibhasan0130"}
            ></LinkHover>

            <LinkHover
              icon={<FaFacebook className="text-3xl rounded-full"></FaFacebook>}
              address={"https://web.facebook.com/?_rdc=1&_rdr#"}
            ></LinkHover>
          </ul>
          <a
            className="border-2 ml-1 shadow-md transition duration-200 hover:-translate-y-2 shadow-[#e5ff00] border-[#e5ff00] rounded-md px-4 py-2"
            href="Sakib_Hasan.pdf"
            download={"resume.pdf"}
          >
            RESUME
          </a>
        </div>
        <div className="col-span-12 md:p-6 border-2 rounded-md border-[#ffff00] md:col-span-5">
          <img
            className="lg:w-full object-cover rounded-md lg:h-[400px] md:h-[300px]"
            src={owner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
