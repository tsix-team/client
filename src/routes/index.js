// import authRouter from './auth'
import adminRouter from './admin'
import clientRouter from './client'
// import {requireLogin} from '../middlewares/auth' 

require('dotenv').config()

const initRoutes = (app) => {
    app.use('/', clientRouter)
    app.use('/admin', adminRouter)
    app.get('*', (req, res) => {
        res.status(404).render('admin/404',{layout:'error'});
      });
}

export default initRoutes