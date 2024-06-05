export const validateJob = (req, res, next) => {
  const errors = [];
  const { jobTitle, jobDesc, jobType, JobPrice, experience, qualifications, companyName, companyLocation } = req.body;

  if (!jobTitle || jobTitle.trim() === '') errors.push({ msg: 'Job title is required' });
  if (!jobDesc || jobDesc.trim() === '') errors.push({ msg: 'Job description is required' });
  if (!companyName || companyName.trim() === '') errors.push({ msg: 'Company name is required' });
  if (!companyLocation || companyLocation.trim() === '') errors.push({ msg: 'Location is required' });
  if (!jobType || jobType.trim() === '') errors.push({ msg: 'Employee type is required' });
  if (!experience || experience.trim() === '') errors.push({ msg: 'Experience is required' });
  if (!qualifications || qualifications.trim() === '') errors.push({ msg: 'Qualifications are required' });
  if (!JobPrice || JobPrice.trim() === '') errors.push({ msg: 'Salary is required' });

  if (errors.length > 0) {
    const view = req.originalUrl.includes('/create') ? 'jobs/createJob' : 'jobs/editJob';
    const job = req.originalUrl.includes('/create') ? req.body : { ...req.body, id: req.params.id, img: req.file ? req.file.filename : req.body.img };
    return res.render(view, {
      errors,
      job,
      user: req.session.user,
      msg: null
    });
  }
  
  next();
};
