import { Link } from "react-router-dom";
import "./skills.css"

// eslint-disable-next-line react/prop-types
const ProjectCard = ({projectInfo}) => {
    const {image, project_name, brief_description, id} = projectInfo;
  return (
    <div className="card projectCard col-span-12 bg-white text-black md:col-span-6 shadow-xl">
      <figure>
        <img
          src={image}
          alt="project image"
          
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project_name}</h2>
        <p>{brief_description.slice(0, 30)}...</p>
        <div className="card-actions justify-end">
          <Link to={`/projectDetails/${id}`}  className="btn bg-[#e5ff00] text-black">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
