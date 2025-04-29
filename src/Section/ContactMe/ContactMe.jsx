import Lottie from "lottie-react";
import Title from "../../Components/Title";
import contact from "../../assets/contact.json";
import ContactForm from "../../Components/ContactForm";

const ContactMe = () => {
    return (
        <div className="max-w-7xl w-full mx-auto">
            <Title>Feel Free To Contact Me</Title> 
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className="border-2 col-span-12 md:col-span-6 border-[#3944bc] rounded-md shadow-lg shadow-[#3944bc] p-4 md:p-8">
                    <div className="text-white pl-4 mb-4 text-lg">
                        <p>WhatsApp: +8801644078709</p>
                        <p>Email: sakibhasan16h@gmail.com</p>
                    </div>
                    <ContactForm></ContactForm>
                </div>
                <div className="col-span-12 md:col-span-6 p-4 lg:p-8">
                    <Lottie animationData={contact}></Lottie>
                </div>
            </div>          
        </div>
    );
};

export default ContactMe;