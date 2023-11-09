require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
export const indexUser = (req,res) => {
    axios.get('/user')
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.render('admin/users',{layout:'admin/index', title:'Quản lý tài khoản',data})
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500',{layout:'error', title:'500'})
  });
}
export const createUser = (req,res) => {
    const data = {...req.body}
    axios.post('/user',data)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.redirect('/admin/users');
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500',{layout:'error', title:'500'})
  });
}