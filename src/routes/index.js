import authRouter from './auth'
import adminRouter from './admin'
import clientRouter from './client'
import {requireLogin,isLogged} from '../middlewares/auth' 
import { getCate } from '../services/axios';
require('dotenv').config()
const sessionData = async (req, res, next)=>{
  res.locals.user = req.user || undefined
  res.locals.bigCate = await getCate()
  res.locals.success = req.flash('success')
  res.locals.error = req.flash('error')
  next();
}
const initRoutes = (app) => {
    app.use('/',isLogged, sessionData, clientRouter)
    app.use('/auth', authRouter)
    app.use('/admin',requireLogin, adminRouter)
    app.get('*', (req, res) => {
        res.status(404).render('admin/404',{layout:'error'});
      });
}

export default initRoutes