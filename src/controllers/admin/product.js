require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
let config = {
    params: {},
  };
export const indexPd = (req,res) => {
    
    //res.render('admin/products',{layout:'admin', title:'Quản lý sản phẩm'})
    config.params = {...req.query}
    axios.get('/product',config)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.render('admin/products',{layout:'admin', title:'Quản lý sản phẩm',data,query:config.params})
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500',{layout:'error', title:'500'})
  });
}