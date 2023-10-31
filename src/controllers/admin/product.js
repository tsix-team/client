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
        .then( async response => {
            const data = response.data.response;
            // const dataCate = await axios.get('/cate')
            // const dataSubcate = await axios.get('/subcate')
            // const cates = dataCate.data.response
            // const subcates = dataSubcate.data.response
            console.log(data);
            res.render('admin/products',{layout:'admin', title:'Quản lý sản phẩm',data,query:config.params})
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/products',{layout:'admin', title:'Quản lý sản phẩm',query:config.params,error})
            //res.render('admin/500',{layout:'error', title:'500'})
  });
}
export const createPd = (req,res) => {
  //res.render('admin/products',{layout:'admin', title:'Quản lý sản phẩm'})
  const uploadedImage = req.files?.image
  const uploadedImages = req.files?.images
  const formData = { ...req.body,uploadedImage,uploadedImages}
  console.log("form dataaaaa: ",formData);
  axios.post('/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
          const data = response.data.response;
          console.log(data);
          res.redirect('/admin/products');
      })
      .catch(error => {
          // Xử lý lỗi nếu có
          console.error(error);
          res.render('admin/500',{layout:'error', title:'500'})
});
}