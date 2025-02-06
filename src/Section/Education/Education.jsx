import Lottie from "lottie-react";
import Title from "../../Components/Title";
import education from "../../assets/education.json"

const Education = () => {
    return (
        <div id="education" className="max-w-7xl w-full mx-auto mb-8 md:mb-16">
            <Title>My Educational Qualifications</Title>  
            <div className="grid grid-cols-12 items-center gap-4">
                <div className="col-span-12 lg:col-span-6">
                    <div>
                        <Title>
                            Diploma in Computer Technology
                        </Title>
                        <p><strong>Institute Name:</strong>Pabna Polytechnic Institute
                        </p>
                        <p><strong>Total Year:</strong> 2019–2023</p>
                        <p><strong>Location:</strong> Pabna, Bangladesh</p>
                    </div>
                    <div className="divider bg-[#e5ff00] h-[2px] mb-6"></div>
                    <Title>
                        BSc in Computer Science (current) 
                    </Title>
                    <p><strong>Institute Name: </strong>Bangladesh University Of Business And Technology</p>
                    <p><strong>Started Year:</strong> 2024</p>
                    <p><strong>Expected Passing Year:</strong> 2028</p>
                    <p><strong>Location: </strong>Dhaka, Bangladesh</p>
                </div> 
                <div className="col-span-12 lg:col-span-6">
                    <Lottie animationData={education}></Lottie>
                </div>   
            </div>        
        </div>
    );
};

export default Education;