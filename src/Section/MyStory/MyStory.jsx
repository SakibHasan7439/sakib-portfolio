import Lottie from "lottie-react";
import Title from "../../Components/Title";
import aboutMe from "../../assets/aboutMe.json"

const MyStory = () => {
  return (
    <div id="myStory" className="max-w-7xl w-full mx-auto mb-12 md:mb-16 lg:mb-28">
      <Title>Lets Learn About Me</Title>
      <div className="grid grid-cols-12 items-center ">
        <Lottie className="col-span-12 lg:col-span-5" animationData={aboutMe}></Lottie>
        <div className="pb-4 md:text-lg col-span-12 lg:col-span-7">
            Im Sakib Hasan , I&apos;m a frontend developer with a creative mindset and a love for building
            user-friendly web applications. My journey in web development started
            with curiosity and has grown into a full-fledged passion for turning ideas into functional and visually appealing designs. python was my first programming language that i tried, i remember when i brought two books of python programming and try to code in my android phone by reading them, it always makes me happy and i feel joy when i figure out a solution or fix a bug in my code, sometime i stuck into silly problem for hours but i don&apos;t quit until i figure out the problem and comes with a solution. In my small journey of web development I specialize in
            HTML, CSS, and JavaScript, along with frameworks and libraries like
            React, Tailwind CSS, and Bootstrap and some basic backend. I enjoy learning new technologies,
            solving problems, and continuously improving my skills. Beyond coding, I
            have a deep love for reading. I enjoy immersing myself in science
            fiction, religious, and thriller books. I love to play cricket and You will often find me on the cricket field, indulging in my
            favorite sport. I also enjoy watching thriller movies like inception or Shutter island.
        </div>
      </div>
    </div>
  );
};

export default MyStory;
