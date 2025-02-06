import "./skills.css"
// eslint-disable-next-line react/prop-types
const SkillsCard = ({children, className}) => {
    return (
        <div className={`px-4 py-2 ${className} flex flex-col items-center justify-center w-28 md:w-40 h-28 md:h-40 rounded-2xl onHover bg-white text-black`}>
            {children}
        </div>
    );
};

export default SkillsCard;