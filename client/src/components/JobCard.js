import React from 'react';
import './JobCard.css'; // Create CSS to style as post-it notes

const JobCard = ({ job, onClick }) => {
  return (
    <div className="job-card" onClick={onClick}>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <span>{job.location}</span>
    </div>
  );
};

export default JobCard;
