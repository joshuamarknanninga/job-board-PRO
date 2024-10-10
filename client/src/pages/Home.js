import React, { useEffect, useState } from 'react';
import JobList from '../components/JobList';
import API from '../utils/API';
import JobDetailModal from '../components/JobDetailModal'; // You'll create this component

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    API.fetchJobs().then(data => setJobs(data.jobs));
  }, []);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <div>
      <JobList jobs={jobs} onJobClick={handleJobClick} />
      {selectedJob && <JobDetailModal job={selectedJob} onClose={closeModal} />}
    </div>
  );
};

export default Home;
