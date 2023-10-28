import express from 'express'
//import * as userController from '../controllers/admin/user'
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index',{title:'HOME'})
})
router.get('/login',(req,res)=>{
    res.render('login',{title:'Login page'})
})
export default router