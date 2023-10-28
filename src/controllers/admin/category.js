require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
let config = {
    params: {},
  };
export const indexCate = (req,res) => {
    
    //res.render('admin/products',{layout:'admin', title:'Quản lý sản phẩm'})
    config.params = {...req.query}
    axios.get('/cate',config)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.render('admin/categories',{layout:'admin', title:'Quản lý danh mục',data,query:config.params})
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500',{layout:'error', title:'500'})
  });
}
export const getCate = (req,res) => {
    
    //res.render('admin/products',{layout:'admin', title:'Quản lý sản phẩm'})
    axios.get('/cate')
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.render('admin/categories',{layout:'admin', title:'Quản lý danh mục',data})
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500',{layout:'error', title:'500'})
  });
}
export const getCateById = (req,res) => {
    
    //res.render('admin/products',{layout:'admin', title:'Quản lý sản phẩm'})
    axios.get('/cate')
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.render('admin/categories',{layout:'admin', title:'Quản lý danh mục',data})
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500',{layout:'error', title:'500'})
  });
}
export const createCate = (req,res) => {
    const data = {...req.body}
    //res.render('admin/products',{layout:'admin', title:'Quản lý sản phẩm'})
    axios.post('/cate',data)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.redirect('/admin/categories');
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500',{layout:'error', title:'500'})
  });
}
export const deleteCate = (req,res) => {
    const id = req.params.id
    //res.render('admin/products',{layout:'admin', title:'Quản lý sản phẩm'})
    axios.delete(`/cate/${id}`)
        .then(response => {
            const data = response.data?.response;
            console.log(data);
            res.redirect('/admin/categories');
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500',{layout:'error', title:'500'})
  });
}