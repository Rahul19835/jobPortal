import express from 'express';
import session from 'express-session';
import path from 'path';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';

import userRoutes from './routes/user.routes.js';
import jobRoutes from './routes/job.routes.js';
import { lastVisit } from './middleware/lastVisit.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(lastVisit);

app.use('/users', userRoutes);
app.use('/jobs', jobRoutes);

app.get('/', (req, res) => {
  res.redirect('/jobs');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
