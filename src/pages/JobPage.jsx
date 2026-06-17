import React from "react";

function JobPage({ job, goBack }) {
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={goBack}>⬅ Back</button>

      <h1>{job.title}</h1>
      <h3>{job.company}</h3>

      <p><b>Location:</b> {job.location}</p>
      <p><b>Salary:</b> {job.salary}</p>
      <p><b>Experience:</b> {job.experience}</p>

      <h4>Skills</h4>
      <ul>
        {job.skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <h4>Description</h4>
      <p>{job.description}</p>

      <h4>About Company</h4>
      <p>{job.aboutCompany}</p>
    </div>
  );
}

export default JobPage;