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
        <div>
            <Title>Projects that represent my Skills</Title>
            <div className="grid grid-cols-12 gap-4 lg:gap-8 max-w-6xl w-full mx-auto">
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