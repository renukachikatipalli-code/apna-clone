import React, { useState } from "react";
import jobs from "../data/jobs";
import JobCard from "../components/JobCard";
import "./JobList.css";

function JobList() {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm)
      );

    const matchesLocation =
      locationFilter === "" ||
      job.location.toLowerCase().includes(locationFilter.toLowerCase());

    return matchesSearch && matchesLocation;
  });

  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <h1>Find Your Dream Job 🚀</h1>
        <p>
          Explore thousands of opportunities from top companies across India.
        </p>
      </div>

      <div className="job-page">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Filters</h3>

          <input
            type="text"
            placeholder="Search by title, company, skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input"
          />

          <input
            type="text"
            placeholder="Location (e.g. Hyderabad)"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="input"
          />

          <div className="stats">
            <p>
              <strong>{filteredJobs.length}</strong> Jobs Found
            </p>
          </div>
        </div>

        {/* Jobs */}
        <div className="job-container">
          <h2>Latest Jobs</h2>

          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="no-jobs">
              <h3>No jobs found 😔</h3>
              <p>Try changing your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default JobList;