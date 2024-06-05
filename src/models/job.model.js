let jobs = [];
let jobId = 1;

export const createJob = (job) => {
  job.id = jobId++;
  job.applicants = [];
  jobs.push(job);
  return job;
};

export const getAllJobs = () => jobs;

export const findJobById = (id) => {
  return jobs.find(job => job.id === parseInt(id));
};

export const updateJob = (id, updatedJob) => {
  const jobIndex = jobs.findIndex(job => job.id === parseInt(id));
  if (jobIndex !== -1) {
    jobs[jobIndex] = { ...jobs[jobIndex], ...updatedJob };
    return jobs[jobIndex];
  }
  return null;
};

export const deleteJob = (id) => {
  const jobIndex = jobs.findIndex(job => job.id === parseInt(id));
  if (jobIndex !== -1) {
    return jobs.splice(jobIndex, 1)[0];
  }
  return null;
};

export const addApplicantToJob = (jobId, applicant) => {
  const job = findJobById(jobId);
  if (job) {
    job.applicants.push(applicant);
    return true;
  }
  return false;
};

export const getApplicantsForJob = (jobId) => {
  const job = findJobById(jobId);
  return job ? job.applicants : [];
};
