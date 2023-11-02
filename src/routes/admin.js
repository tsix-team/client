import express from 'express'
import uploadCloud from '../config/cloudinary.config';
import * as indexController from '../controllers/admin'
import * as authController from '../controllers/admin/auth'
import * as userController from '../controllers/admin/user'
import * as pdController from '../controllers/admin/product'
import * as cateController from '../controllers/admin/category'
const router = express.Router();

router.get('/',indexController.home)
// router.get('/login',(req,res)=>{
//     res.render('admin/login',{ layout:'login'})
// })
// router.post('/login',authController.login)


//user
router.get('/users',userController.indexUser)
router.post('/users',userController.createUser)

//product
router.get('/products',pdController.indexPd)
router.get('/products/update/:slug',pdController.viewUpdate)
router.post('/products',uploadCloud.fields([{ name: 'image' }, { name: 'images' }]), pdController.createPd)

//categories
router.get('/categories',cateController.indexCate)
router.post('/categories',cateController.createCate)
router.get('/categories/d/:id',cateController.deleteCate)

// router.get('/login',(req,res)=>{
//     res.render('login',{title:'Login page'})
// })

export default router