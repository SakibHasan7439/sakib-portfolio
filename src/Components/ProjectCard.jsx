import { Link } from "react-router-dom";
import "./skills.css";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ projectInfo }) => {
  const { image, project_name, technology_used, brief_description, id } =
    projectInfo;

  return (
    <div className="card col-span-12 md:col-span-4 flex projectCard bg-white text-black shadow-xl">
      <figure className="p-2">
        <img
          className="h-[300px] rounded-lg object-cover"
          src={image}
          alt="project image"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          {
            technology_used.slice(1, 5).map((technology, index) =><div key={index} className="badge badge-neutral bg-white text-black">{technology}</div>)
          }
        </div>
        <h2 className="card-title">{project_name}</h2>
        <p>{brief_description.slice(0, 30)}...</p>
        <div className="card-actions justify-end">
          <Link
            to={`/projectDetails/${id}`}
            className="btn bg-[#e5ff00] text-black"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
