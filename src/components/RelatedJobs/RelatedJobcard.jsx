function RelatedJobCard({ job }) {
  return (
    <div className="card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
    </div>
  );
}

export default RelatedJobCard;