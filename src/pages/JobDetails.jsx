import { useParams, Link } from "react-router-dom";
import jobs from "../data/jobs";

function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>❌ Job Not Found</h2>
        <Link to="/">Go Back</Link>
      </div>
    );
  }

  const relatedJobs = jobs.filter((j) => j.id !== job.id).slice(0, 3);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "20px auto",
        background: "#fff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#1a73e8",
          fontWeight: "bold",
        }}
      >
        ← Back to Jobs
      </Link>

      <h1>{job.title}</h1>
      <h2>{job.company}</h2>

      <p>📍 {job.location}</p>
      <p>💰 {job.salary}</p>
      <p>⏳ {job.experience}</p>

      <h3>Skills Required</h3>

      <div style={{ marginBottom: "20px" }}>
        {job.skills.map((skill, index) => (
          <span
            key={index}
            style={{
              background: "#e8f0fe",
              color: "#1a73e8",
              padding: "6px 12px",
              marginRight: "10px",
              borderRadius: "20px",
              fontSize: "14px",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      <h3>Job Description</h3>
      <p>{job.description}</p>

      <h3>About Company</h3>
      <p>{job.aboutCompany}</p>

      <button
        onClick={() => alert("✅ Application Submitted Successfully!")}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "#1a73e8",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Apply Now
      </button>

      <hr style={{ margin: "30px 0" }} />

      <h3>Related Jobs</h3>

      {relatedJobs.map((relatedJob) => (
        <div
          key={relatedJob.id}
          style={{
            padding: "15px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h4>{relatedJob.title}</h4>
          <p>{relatedJob.company}</p>

          <Link
            to={`/job/${relatedJob.id}`}
            style={{
              color: "#1a73e8",
              textDecoration: "none",
            }}
          >
            View Job →
          </Link>
        </div>
      ))}
    </div>
  );
}

export default JobDetails;