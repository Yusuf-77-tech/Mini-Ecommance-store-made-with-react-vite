import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <>
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company} - {job.location}</p>
      <p><span className="badge">{job.type}</span></p>
      <Link to={`/jobs/${job.id}`} className="details-btn">View Details</Link>
    </div>
    </>
  );
}

export default JobCard;