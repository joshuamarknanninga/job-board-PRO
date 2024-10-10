import React, { useState, useEffect } from 'react';
import JobList from '../components/JobList';
import API from '../utils/API';
import JobDetailModal from '../components/JobDetailModal'; // You'll create this component

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    API.searchJobs(searchTerm).then(data => setJobs(data.jobs));
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <JobList jobs={jobs} onJobClick={handleJobClick} />
      {selectedJob && <JobDetailModal job={selectedJob} onClose={closeModal} />}
    </div>
  );
};

export default Search;
