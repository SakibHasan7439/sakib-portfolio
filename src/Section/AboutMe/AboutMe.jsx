import { Typewriter } from 'react-simple-typewriter'
import owner from "../../assets/user.jpg"
import LinkHover from '../../Components/linkHover';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div className="max-w-7xl w-full mx-auto px-4 pb-8 lg:pb-20">
            <div className="grid grid-cols-12 gap-4 justify-between items-center">
                <div className="col-span-12 md:p-6 lg:w-[80%] md:col-span-7">
                    <h1 className="text-xl mb-4 font-playfair font-semibold md:text-3xl lg:text-5xl text-[#e5ff00]">FRONTEND WEB <br />
                        <Typewriter 
                        words={['DEVELOPER']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={2000}>
                        </Typewriter>
                    </h1>  
                    <p className='mb-4'>We create beautiful, user-friendly websites and applications that solve real problems.</p>
                    <ul className='flex items-center gap-2'>
                        <LinkHover icon={<FaGithub className='text-3xl rounded-full'></FaGithub>} address={"https://github.com/SakibHasan7439"}></LinkHover>

                        <LinkHover icon={<FaLinkedin className='text-3xl rounded-full'></FaLinkedin>} address={"https://linkedin.com"}></LinkHover>

                        <LinkHover icon={<FaTwitter className='text-3xl rounded-full'></FaTwitter>} address={"https://x.com/Sakibhasan0130"}></LinkHover>

                        <LinkHover icon={<FaFacebook className='text-3xl rounded-full'></FaFacebook>} address={"https://web.facebook.com/?_rdc=1&_rdr#"}></LinkHover>
                    </ul>
                </div>
                <div className="col-span-12 md:p-6 border-2 rounded-md border-[#ffff00] md:col-span-5">
                    <img className="lg:w-full object-cover rounded-md lg:h-[400px] md:h-[300px]" src={owner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;