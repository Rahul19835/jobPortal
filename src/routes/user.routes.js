import express from 'express';
import {
  renderRegister, renderLogin, handleRegister, handleLogin, handleLogout
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/register', renderRegister);
router.post('/register', handleRegister);
router.get('/login', renderLogin);
router.post('/login', handleLogin);
router.get('/logout', handleLogout);

export default router;
