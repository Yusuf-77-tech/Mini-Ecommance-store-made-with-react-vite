import { useState } from "react";
import JobCard from "../component/JobCard";
import jobs from "../data/jobs";

function Jobs() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="jobs-page">
      <h2>Available Jobs</h2>
      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="jobs-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No jobs found 😔</p>
        )}
      </div>
    </div>
  );
}

export default Jobs;