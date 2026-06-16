function JobHero({ job }) {
  return (
    <div className="hero">
      <h1>{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
      <p>{job.experience}</p>
    </div>
  );
}

export default JobHero;