import authRouter from './auth'
import adminRouter from './admin'
import clientRouter from './client'
import {requireLogin,isLogged} from '../middlewares/auth' 

require('dotenv').config()

const initRoutes = (app) => {
    app.use('/',isLogged, clientRouter)
    app.use('/auth', authRouter)
    app.use('/admin',requireLogin, adminRouter)
    app.get('*', (req, res) => {
        res.status(404).render('admin/404',{layout:'error'});
      });
}

export default initRoutes