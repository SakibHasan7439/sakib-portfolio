import AboutMe from "../Section/AboutMe/AboutMe";
import ContactMe from "../Section/ContactMe/ContactMe";
import Education from "../Section/Education/Education";
import MyStory from "../Section/MyStory/MyStory";
import Navbar from "../Section/Navbar/Navbar";
import Projects from "../Section/Projects/Projects";
import Skills from "../Section/Skills/Skills";

const Home = () => {
    return (
        <div className="bg-[#000000] relative text-[#f5f5f5]">
            <Navbar></Navbar>
            <AboutMe></AboutMe>
            <MyStory></MyStory>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;