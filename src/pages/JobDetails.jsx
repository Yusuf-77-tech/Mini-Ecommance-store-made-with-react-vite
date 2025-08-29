import { useParams, Link } from "react-router-dom";
import jobs from "../data/jobs";

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id.toString() === id);

  if (!job) return <p>Job not found</p>;

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <Link to="/jobs" className="back-btn">⬅ Back to Jobs</Link>
    </div>
  );
}

export default JobDetails;