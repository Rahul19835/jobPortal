import {
    createJob, getAllJobs, findJobById, updateJob, deleteJob, addApplicantToJob, getApplicantsForJob
  } from '../models/job.model.js';
  
  export const renderAllJobs = (req, res) => {
    const jobs = getAllJobs();
    res.render('jobs/allJobs', { jobs });
  };
  
  export const renderJobDetails = (req, res) => {
    const job = findJobById(req.params.id);
    if (job) {
      res.render('jobs/jobDetails', { job });
    } else {
      res.status(404).send('Job not found');
    }
  };
  
  export const renderCreateJob = (req, res) => {
    res.render('jobs/createJob');
  };
  
  export const handleCreateJob = (req, res) => {
    const { title, description, company } = req.body;
    createJob({ title, description, company, recruiter: req.session.user.email });
    res.redirect('/jobs');
  };
  
  export const renderEditJob = (req, res) => {
    const job = findJobById(req.params.id);
    if (job && job.recruiter === req.session.user.email) {
      res.render('jobs/editJob', { job });
    } else {
      res.status(403).send('Forbidden');
    }
  };
  
  export const handleEditJob = (req, res) => {
    const job = findJobById(req.params.id);
    if (job && job.recruiter === req.session.user.email) {
      updateJob(req.params.id, req.body);
      res.redirect(`/jobs/${req.params.id}`);
    } else {
      res.status(403).send('Forbidden');
    }
  };
  
  export const handleDeleteJob = (req, res) => {
    const job = findJobById(req.params.id);
    if (job && job.recruiter === req.session.user.email) {
      deleteJob(req.params.id);
      res.redirect('/jobs');
    } else {
      res.status(403).send('Forbidden');
    }
  };
  
  export const renderJobApplicants = (req, res) => {
    const applicants = getApplicantsForJob(req.params.id);
    res.render('jobs/jobApplicants', { applicants });
  };
  
  export const handleApplyJob = (req, res) => {
    const { name, email, resume } = req.body;
    addApplicantToJob(req.params.id, { name, email, resume });
    // Send confirmation email logic here
    res.render('msgPage', { message: 'Application successful' });
  };
  