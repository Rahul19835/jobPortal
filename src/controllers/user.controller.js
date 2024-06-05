import { addUser, confirmUserLogin, getAllUsers } from '../models/user.model.js';

export const renderRegister = (req, res) => {
  res.render('users/register');
};

export const renderLogin = (req, res) => {
  if (req.session.user) {
    res.redirect('/jobs');
  } else {
    res.render('users/login', { msg: null });
  }
};

export const handleRegister = (req, res) => {
  const { email, password, name } = req.body;
  addUser({ email, password, name, type: 'recruiter' });
  res.redirect('/users/login');
};

export const handleLogin = (req, res) => {
  const { email, password } = req.body;
  const user = confirmUserLogin(email, password);
  if (user) {
    req.session.user = user;
    res.redirect('/jobs');
  } else {
    res.render('users/login', { msg: 'Invalid email or password',type:'error' });
  }
};

export const handleLogout = (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).send(err);
    res.redirect('/users/login');
  });
};
