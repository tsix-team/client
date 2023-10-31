import express from 'express'
import uploadCloud from '../config/cloudinary.config';
import * as authController from '../controllers/admin/auth'
import * as userController from '../controllers/admin/user'
import * as pdController from '../controllers/admin/product'
import * as cateController from '../controllers/admin/category'
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('admin/index',{ layout:'admin',title:'Admin'})
})
router.get('/login',(req,res)=>{
    res.render('admin/login',{ layout:'login'})
})
router.post('/login',authController.login)

router.get('/users',userController.indexUser)

//product
router.get('/products',pdController.indexPd)
router.post('/products',uploadCloud.fields([{ name: 'image' }, { name: 'images' }]), pdController.createPd)


router.get('/categories',cateController.indexCate)


router.post('/categories',cateController.createCate)
router.get('/categories/d/:id',cateController.deleteCate)

// router.get('/login',(req,res)=>{
//     res.render('login',{title:'Login page'})
// })

export default router