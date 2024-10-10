import React from 'react';
import './JobDetailModal.css'; // Create appropriate CSS for modal

const JobDetailModal = ({ job, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{job.title}</h2>
        <h3>{job.company}</h3>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Description:</strong> {job.description}</p>
        {/* Add more job details as needed */}
      </div>
    </div>
  );
};

export default JobDetailModal;
