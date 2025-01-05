import { useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
    const {id} = useParams();
    const projectId = parseInt(id);
    const [details, setDetails] = useState({});
    
    useEffect(() =>{
        fetch('/projectData.json')
        .then(res =>res.json())
        .then(data =>{
            const project = data.find(item => projectId === item.id);
            setDetails(project);
        })
    }, [])

    const {project_name,
        technology_used,
        brief_description,
        live_link,
        github_link,
        image,
        improvement_suggestions,
        challenges_faced} = details;

    return (
        <div className="max-w-5xl my-4 md:my-8 lg:my-16 mx-auto w-full">
            <img className="rounded-md border-2 mb-4 border-black p-4" src={image} alt="project image" />
            <div>
                <h2 className="text-lg md:text-2xl mb-2"><strong>Project Name: </strong>{project_name}</h2>
                <p><strong>Website Live Link:</strong> <Link className="underline" to={`${live_link}`} target="_blank">{live_link}</Link></p>
                <p className="mb-4"><strong>GitHub Link:</strong><Link className="underline" to={`${github_link}`} target="_blank">{github_link}</Link></p>
                <p>{brief_description}</p>
                <p><strong>Improvements can be made: </strong></p>
                <ul className="list-disc mb-4">        
                    {
                        improvement_suggestions &&
                        improvement_suggestions.map((improve, index) => <li key={index}>{improve}</li>)
                    }
                </ul>
                <p><strong>Challenges I faced: </strong></p>
                <ul className="list-disc mb-4">        
                    {
                        challenges_faced &&
                        challenges_faced.map((improve, index) => <li key={index}>{improve}</li>)
                    }
                </ul>
                <p><strong>Technology Used in this website:</strong> </p>
                <ul className="list-disc">
                    {
                        technology_used && 
                        technology_used.map((technology, index) => <li key={index}>{technology}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default ProjectDetails;