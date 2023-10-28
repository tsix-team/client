require('dotenv').config()
import jwt from 'jsonwebtoken'
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
export const requireLogin = (req,res,next) => {
    const token = req.cookies?.tsixToken || null;
    if (!token) {
        return res.redirect('admin/login');
      } else{
        try {
          const decoded = jwt.verify(token, process.env.SECRET_KEY);
          req.user = decoded;
          next();
        } catch (err) {
          res.status(400).send('Invalid token');
        }
      }
}