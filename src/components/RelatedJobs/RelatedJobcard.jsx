import { Link } from "react-router-dom";

function RelatedJobCard({ job }) {
  return (
    <Link to={`/job/${job.id}`}>
      <div className="card">
        <h3>{job.title}</h3>
        <p>{job.company}</p>
      </div>
    </Link>
  );
}

export default RelatedJobCard;