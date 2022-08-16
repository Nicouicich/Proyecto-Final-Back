import { Express } from "express";

export const middlewareAuth = (req, res, next) => {
  console.log('Is Authenticated')
  console.log(req.isAuthenticated());
  if (!req.isAuthenticated()) return res.status(401).json({ msg: 'Unathorized' });

  next();
}
