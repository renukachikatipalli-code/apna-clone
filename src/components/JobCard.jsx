import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <Link
      to={`/job/${job.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          marginBottom: "15px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          transition: "0.3s",
          cursor: "pointer",
        }}
      >
        <h2 style={{ marginBottom: "8px" }}>{job.title}</h2>

        <p
          style={{
            color: "#666",
            marginBottom: "10px",
            fontWeight: "500",
          }}
        >
          {job.company}
        </p>

        <p style={{ margin: "5px 0" }}>
          📍 <strong>{job.location}</strong>
        </p>

        <p style={{ margin: "5px 0" }}>
          💰 <strong>{job.salary}</strong>
        </p>

        <p style={{ margin: "5px 0" }}>
          ⏳ <strong>{job.experience}</strong>
        </p>

        <div
          style={{
            marginTop: "12px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {job.skills.map((skill, index) => (
            <span
              key={index}
              style={{
                background: "#e8f0fe",
                color: "#1a73e8",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        <button
          style={{
            marginTop: "15px",
            padding: "10px 18px",
            background: "#1a73e8",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </div>
    </Link>
  );
}

export default JobCard;