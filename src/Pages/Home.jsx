import AboutMe from "../Section/AboutMe/AboutMe";
import Education from "../Section/Education/Education";
import Footer from "../Section/Footer/Footer";
import MyStory from "../Section/MyStory/MyStory";
import Navbar from "../Section/Navbar/Navbar";
import Projects from "../Section/Projects/Projects";
import Skills from "../Section/Skills/Skills";

const Home = () => {
    return (
        <div className="bg-[#000000] relative text-[#f5f5f5] h-screen">
            <Navbar></Navbar>
            <AboutMe></AboutMe>
            <MyStory></MyStory>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;