require('dotenv').config()
import jwt from 'jsonwebtoken'
import axios from 'axios';
import {setUser} from '../services/libs';
axios.defaults.baseURL = process.env.API;
export const requireLogin = (req,res,next) => {
    const token = req.cookies?.tsixToken || null;
    console.log("Token reqired: ",token);
    if (!token) {
        return res.redirect('/auth/login');
      } else{
        try {
          const decoded = jwt.verify(token, process.env.SECRET_KEY);
          console.log("User:",decoded);
          req.user = decoded; 
          next();
        } catch (err) {
          res.status(400).send('Invalid token',);
        }
      }
}