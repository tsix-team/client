import express from 'express'
import * as indexController from '../controllers/client/index'
import * as authController from '../controllers/client/auth'
import * as pdController from '../controllers/client/product'
import * as postController from '../controllers/client/post'
import * as orderController from '../controllers/client/order'
import * as userController from "../controllers/client/profile"
import {requireLoginClient} from '../middlewares/auth' 
const router = express.Router();


router.get('/',indexController.home)
//auth
router.get('/login',(req,res)=>{
    if (req.user) {
        return res.redirect('/')
    }
    res.render('client/login',{layout:'client/register',title:'Login'})
})
router.post('/login',authController.login)

router.get('/register',(req,res)=>{
    res.render('client/register',{layout:'client/register',title:'Register'})
})
router.post('/register',authController.register)
//product
router.get('/product',pdController.indexProduct)
router.get('/danh-muc/:slug',pdController.cateProduct)
router.get('/danh-muc/:cate/:slug',pdController.subcateProduct)

router.get('/product-details/:slug',pdController.productDetail)

//cart
router.get('/cart',(req,res)=>{
    res.render('client/cart',{layout:'client/cart',title:'Cart'})
})
router.post('/add-to-cart/:slug',pdController.addToCart)

router.get('/contact',(req,res)=>{
    res.render('client/contact',{layout:'client/contact',title:'Contact'})
})
//pôst
router.get('/news',postController.indexPost)
router.get('/post/:id',postController.postDetail)


router.get('/checkout', requireLoginClient,orderController.viewCheckout)
router.post('/checkout', requireLoginClient,orderController.checkout)

router.get('/about',(req,res)=>{
    res.render('client/about',{layout:'client/about',title:'Về chúng tôi'})
})
router.get('/policy',(req,res)=>{
    res.render('client/policy',{layout:'client/policy',title:'Bảo hành'})
})
router.get("/profile", userController.getProfile)

router.post("/profile/:id/update-profile", userController.updateProfile)

router.post("/search", pdController.searchPd)

router.get("/search", pdController.liveSearch)

router.post("/product-details/:slug", pdController.comment)


export default router