import express from 'express'
import * as indexController from '../controllers/client/index'
import * as authController from '../controllers/client/auth'
import * as pdController from '../controllers/client/product'
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
router.get('/product-details/:slug',pdController.productDetail)
router.get('/cart',(req,res)=>{
    res.render('client/cart',{layout:'client/cart',title:'Cart'})
})
router.get('/contact',(req,res)=>{
    res.render('client/contact',{layout:'client/contact',title:'Contact'})
})
router.get('/news',(req,res)=>{
    res.render('client/news',{layout:'client/news',title:'News'})
})
router.get('/checkout',(req,res)=>{
    res.render('client/checkout',{layout:'client/checkout',title:'Checkout'})
})
router.get('/about',(req,res)=>{
    res.render('client/about',{layout:'client/about',title:'About'})
})
export default router