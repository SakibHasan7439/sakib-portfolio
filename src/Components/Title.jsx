// eslint-disable-next-line react/prop-types
const Title = ({children}) => {
    return (
        <div className="text-center font-playfair text-xl md:text-2xl lg:text-3xl mb-4 md:mb-8 text-[#1e90ff] font-semibold">{children}</div>
    );
};

export default Title;