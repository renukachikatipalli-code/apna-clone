function JobHighlights({ job }) {
  return (
    <div className="highlights">
      <h3>Skills Required</h3>

      {job.skills.map((skill) => (
        <span key={skill}>{skill}</span>
      ))}
    </div>
  );
}