import express from 'express'
import * as authController from '../controllers/admin/auth'
const router = express.Router();

router.post('/login',authController.login)
router.get('/login',(req,res)=>{
    res.render('admin/login',{ layout:'admin/login',title:'Login'})
})
router.get('/logout', async (req, res) => {
    await res.clearCookie('tsixToken'); // Xóa token khỏi cookie
    res.redirect('/'); // Chuyển hướng người dùng đến trang login
  });
export default router