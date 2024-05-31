export const lastVisit = (req, res, next) => {
    if (req.cookies.lastVisit) {
      res.locals.lastVisit = req.cookies.lastVisit;
    }
    res.cookie('lastVisit', new Date().toISOString());
    next();
  };
  