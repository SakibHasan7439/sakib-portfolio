import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar mb-8 sticky top-0 z-20 bg-[#e5ff00] text-black">
    <div className="navbar-start">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
            />
            </svg>
        </div>
        <ul
            tabIndex={0}
            className="menu text-lg menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
            <li>
            <Link to="hero" smooth={true} duration={300}>Home</Link>
            </li>
            <li>
            <Link to="myStory" smooth={true} duration={300}>About Me</Link>
            </li>
            <li>
            <Link to="skills" smooth={true} duration={400}>Skills</Link>
            </li>
            <li>
            <Link to="education" smooth={true} duration={500}>Education</Link>
            </li>
            <li>
            <Link to="education" smooth={true} duration={600}>Projects</Link>
            </li>
        </ul>
        </div>
        <div className="w-20">
        <img className="w-full" src={logo} alt="" />
        </div>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu text-xl font-playfair menu-horizontal px-1">
        <li>
            <Link to="hero" smooth={true} duration={300}>Home</Link>
        </li>
        <li>
            <Link to="myStory" smooth={true} duration={300}>About Me</Link>
        </li>
        <li>
            <Link to="skills" smooth={true} duration={400}>Skills</Link>
        </li>
        <li>
            <Link to="education" smooth={true} duration={500}>Education</Link>
        </li>
        <li>
            <Link to="education" smooth={true} duration={600}>Projects</Link>
        </li>
        </ul>
    </div>
    <div className="navbar-end">
        <a
        href="../../assets/Sakib_Hasan.docx"
        download="document.docx"
        target="_blank"
        className="btn font-playfair"
        >
        RESUME
        </a>
    </div>
    </div>
  );
};

export default Navbar;
