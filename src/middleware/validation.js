import { body, validationResult } from 'express-validator';

export const validateJob = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('company').notEmpty().withMessage('Company is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('msgPage', { message: errors.array()[0].msg });
    }
    next();
  }
];
