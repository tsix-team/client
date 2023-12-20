require('dotenv').config()
import jwt from 'jsonwebtoken'
import axios from 'axios';
import { setUser } from '../services/libs';
axios.defaults.baseURL = process.env.API;
export const requireLogin = (req, res, next) => {
  const token = req.cookies?.tsixToken || null;
  if (!token) {
    return res.redirect('/auth/login');
  } else {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decoded;
      if (!req.user.role||req.user.role == 0) {
        return res.redirect('/auth/login');
      }
      next();
    } catch (err) {
      res.status(400).send('Invalid token',);
    }
  }
}
export const isLogged = (req, res, next) => {
  const token = req.cookies?.tsixToken || null;
  if (token) {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
  }
  next();
}
export const requireLoginClient = (req, res, next) => {
  const token = req.cookies?.tsixToken || null;
  if (!token) {
    return res.redirect('/login');
  } else {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(400).send('Invalid token',);
    }
  }
}