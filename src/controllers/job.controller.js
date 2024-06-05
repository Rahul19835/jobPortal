import {
  createJob, getAllJobs, findJobById, updateJob, deleteJob, addApplicantToJob, getApplicantsForJob
} from '../models/job.model.js';

export const renderAllJobs = (req, res) => {
  const jobs = getAllJobs();
  res.render('jobs/allJobs', { jobs, user: req.session.user });
};

export const renderJobDetails = (req, res) => {
  const job = findJobById(req.params.id);
  if (job) {
    res.render('jobs/jobDetails', { job, user: req.session.user });
  } else {
    res.status(404).send('Job not found');
  }
};

export const renderCreateJob = (req, res) => {
  res.render('jobs/createJob', { user: req.session.user, msg: null, errors: [], job: {} });
};

export const handleCreateJob = (req, res) => {
  const { jobTitle, jobDesc, jobType, JobPrice, experience, qualifications, companyName, companyLocation } = req.body;
  const img = req.file ? req.file.filename : '';
  createJob({ jobTitle, jobDesc, jobType, JobPrice, experience, qualifications, companyName, companyLocation, img });
  res.redirect('/jobs');
};

export const renderEditJob = (req, res) => {
  const job = findJobById(req.params.id);
  if (job) {
    res.render('jobs/editJob', { job, user: req.session.user, msg: null, errors: [] });
  } else {
    res.status(403).send('Forbidden');
  }
};

export const handleEditJob = (req, res) => {
  const job = findJobById(req.params.id);
  if (job) {
    const img = req.file ? req.file.filename : job.img;
    updateJob(req.params.id, { ...req.body, img });
    res.redirect(`/jobs/${req.params.id}`);
  } else {
    res.status(403).send('Forbidden');
  }
};

export const handleDeleteJob = (req, res) => {
  const job = findJobById(req.params.id);
  if (job) {
    deleteJob(req.params.id);
    res.redirect('/jobs');
  } else {
    res.status(403).send('Forbidden');
  }
};

export const renderJobApplicants = (req, res) => {
  const job = findJobById(req.params.id);
  const applicants = getApplicantsForJob(req.params.id);
  res.render('jobs/jobApplicants', { applicants, job, user: req.session.user });
};

export const handleApplyJob = (req, res) => {
  const { name, email, phone } = req.body;
  const resume = req.file.filename;
  addApplicantToJob(req.params.id, { name, email, phone, resume });
  res.redirect('/jobs');
};
