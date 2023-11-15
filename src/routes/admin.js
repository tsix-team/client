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
router.get('/users/ban/:id',userController.banUser)
router.post('/users',userController.createUser)

//product
router.get('/products',pdController.indexPd)
router.post('/products',uploadCloud.fields([{ name: 'image' }, { name: 'images' }]), pdController.createPd)
router.get('/products/update/:id',pdController.viewUpdate)
router.post('/products/update/:id',uploadCloud.fields([{ name: 'image' }, { name: 'images' }]), pdController.updatePd)
router.get('/products/d/:id',pdController.deletePd)

//categories
router.get('/categories',cateController.indexCate)
router.post('/categories',cateController.createCate)
router.get('/categories/d/:id',cateController.deleteCate)
//subcategories
router.get('/subcategories',cateController.indexSubcate)
router.post('/subcategories',cateController.createSubcate)
router.get('/subcategories/d/:id',cateController.deleteSubcate)
router.get('/subcategories/update/:id',cateController.viewUpdateSubcate)
router.post('/subcategories/update/:id',cateController.updateSubcate)

// router.get('/login',(req,res)=>{
//     res.render('login',{title:'Login page'})
// })

export default router