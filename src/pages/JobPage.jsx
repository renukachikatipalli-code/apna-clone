import jobs from "../../data/jobs.json";
import RelatedJobCard from "./RelatedJobCard";

function RelatedJobs() {
  return (
    <div>
      <h2>Related Jobs</h2>

      {jobs.map((job) => (
        <RelatedJobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default RelatedJobs;