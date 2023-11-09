import express from 'express'
//import * as userController from '../controllers/admin/user'
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('client',{title:'HOME'})
})
router.get('/login',(req,res)=>{
    res.render('client/login',{layout:'client/register',title:'Login'})
})
router.get('/register',(req,res)=>{
    res.render('client/register',{layout:'client/register',title:'Register'})
})
router.get('/product',(req,res)=>{
    res.render('client/product',{layout:'client/product',title:'Product'})
})
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