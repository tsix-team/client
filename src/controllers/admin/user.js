require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
const config = {
    params: {},
  };
export const indexUser = (req,res) => {
    config.params = {...req.query} || {page:1,size:10}
    const user = req.user
    axios.get('/user',config)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.render('admin/users',{layout:'admin/index', title:'Quản lý tài khoản',user,data})
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
export const banUser = (req,res) => {
    const {id} = req.params
    axios.put(`/user/ban/${id}`)
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
export const updateUser = (req,res) => {
    const {id} = req.params
    const data = {...req.body}
    axios.put(`/user/${id}`,data)
        .then(response => {
            res.redirect('/admin/users');
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500',{layout:'error', title:'500'})
  });
}
export const viewUpdateUser = (req,res) => {
    const {id} = req.params
    const user = req.user
    axios.get(`/user/${id}`)
        .then(response => {
            const dataUser = response.data.response
            res.render('admin/users/update',{layout:'admin/index', title:'Sửa tài khoản',user,dataUser})
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500',{layout:'error', title:'500'})
  });
}