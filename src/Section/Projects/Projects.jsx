import { useEffect, useState } from "react";
import ProjectCard from "../../Components/ProjectCard";
import Title from "../../Components/Title";

const Projects = () => {
    const [data, setData] = useState([]);
    useEffect(() =>{
        fetch('projectData.json')
        .then(res => res.json())
        .then(data =>{
            setData(data);
        })
    }, []);

    return (
        <div id="project">
            <Title>Projects that represent my Skills</Title>
            <div className="max-w-7xl mb-20 grid grid-cols-12 gap-4 mx-auto w-full">
                {
                    data.map((projectInfo) => <ProjectCard
                    key={projectInfo.id}
                    projectInfo={projectInfo}>
                    </ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;