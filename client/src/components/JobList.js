import React from 'react';
import JobCard from './JobCard';
import './JobList.css'; // Create appropriate CSS

const JobList = ({ jobs, onJobClick }) => {
  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} onClick={() => onJobClick(job)} />
      ))}
    </div>
  );
};

export default JobList;
