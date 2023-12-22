import express from 'express'
import uploadCloud from '../config/cloudinary.config';
import * as indexController from '../controllers/admin'
import * as postController from '../controllers/admin/post'
import * as userController from '../controllers/admin/user'
import * as pdController from '../controllers/admin/product'
import * as orderController from '../controllers/admin/order'
import * as cateController from '../controllers/admin/category'
import * as cmtController from '../controllers/admin/comment'
const router = express.Router();

router.get('/',indexController.home)
// router.get('/login',(req,res)=>{
//     res.render('admin/login',{ layout:'login'})
// })
// router.post('/login',authController.login)


//user
router.get('/users',userController.indexUser)
router.get('/employees',userController.employees)
router.get('/users/update/:id',userController.viewUpdateUser)
router.post('/users/update/:id',userController.updateUser)
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
router.get('/categories/update/:id',cateController.viewUpdateCate)
router.post('/categories/update/:id',cateController.updateCate)
//subcategories
router.get('/subcategories',cateController.indexSubcate)
router.post('/subcategories',cateController.createSubcate)
router.get('/subcategories/d/:id',cateController.deleteSubcate)
router.get('/subcategories/update/:id',cateController.viewUpdateSubcate)
router.post('/subcategories/update/:id',cateController.updateSubcate)

//posts
router.get('/posts',postController.indexPost)
router.post('/posts',uploadCloud.single('image'), postController.createPost)
router.get('/posts/update/:id',postController.viewUpdate)
router.post('/posts/update/:id',uploadCloud.single('image'),postController.updatePost)
router.get('/posts/d/:id', postController.deletePost)

//orders
router.get('/orders',orderController.indexOrder)
router.get('/orders/view/:id',orderController.viewUpdateOrder)
router.get('/orders/quickUpdate/:id',orderController.updateOrder)
//router.post('/orders/view/:id',orderController.updateOrder)
router.post('/orders',orderController.createOrder)
//router.get('/orders/d/:id',orderController.deleteCate)

//invoices
router.get('/invoices',orderController.indexInvoice)

//cmt
router.get('/comments',cmtController.indexComment)
router.get('/comments/d/:id',cmtController.deleteCmt)

// router.get('/login',(req,res)=>{
//     res.render('login',{title:'Login page'})
// })

export default router