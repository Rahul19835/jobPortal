import express from 'express';
import path from 'path';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import expressEjsLayouts from "express-ejs-layouts";
import userRoutes from './src/routes/user.routes.js';
import jobRoutes from './src/routes/job.routes.js';
import { lastVisit } from './src/middleware/lastVisit.js';

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(express.static('public'));
app.use(expressEjsLayouts);

app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(lastVisit);
app.use('/users', userRoutes);
app.use('/jobs', jobRoutes);

app.get('/', (req, res) => {
  res.redirect('/jobs');
});


export default app;