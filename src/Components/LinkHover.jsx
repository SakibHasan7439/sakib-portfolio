import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LinkHover = ({icon, address}) => {
    return (
        <div>
            <Link to={address} target="_blank" className="rounded-full block border-2 border-[#e5ff00] transition duration-200 hover:-translate-y-2 pl-1 pt-1 w-[40px] h-[40px] bg-[#e5ff00] text-black ">
                {icon}
            </Link>
        </div>
    );
};

export default LinkHover;