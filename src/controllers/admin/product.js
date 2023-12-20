require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
const config = {
    params: {},
  };
export const indexPd = (req,res) => {
    //res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm'})
    config.params = {...req.query} || {page:1,size:5}
    
    axios.get('/product',config)
        .then( async response => {
          const dataProducts = response.data.response;
            const subcate = await axios.get('/subcate')
            const dataSubcates = subcate.data.response
            dataProducts.forEach((productItem) => {
              const correspondingCate = dataSubcates.find((subcateItem) => subcateItem.id_subcate == productItem.id_subcate);
              if (correspondingCate) {
                productItem.name_subcate = correspondingCate.name_subcate;
              } else{
                productItem.name_subcate = 'none'
              }
            });
            // const dataCate = await axios.get('/cate')
            // const dataSubcate = await axios.get('/subcate')
            // const cates = dataCate.data.response
            // const subcates = dataSubcate.data.response
            res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm',dataProducts,dataSubcates,query:config.params})
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm',query:config.params,error})
            //res.render('admin/500',{layout:'error', title:'500'})
  });
}
export const createPd = (req,res) => {
  //res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm'})
  console.log("post pd... ");

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
          req.flash('success', 'Thêm sản phẩm thành công');
          res.redirect('/admin/products');
      })
      .catch(error => {
          // Xử lý lỗi nếu có
          console.error(error);
          req.flash('error', 'Có lỗi xảy ra hoặc sản phẩm đã tồn tại!');
          res.render('admin/500',{layout:'error', title:'500'})
});
}
export const updatePd = (req,res) => {
  //res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm'})
  console.log("post pd... ");
  const {id} = req.params
  const uploadedImage = req.files?.image
  const uploadedImages = req.files?.images
  const formData = { ...req.body,uploadedImage,uploadedImages}
  console.log("form dataaaaa: ",formData);
  axios.put(`/product/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
          const data = response.data.response;
          console.log('res data update:',data);
          req.flash('success', 'Đã cập nhật sản phẩm');
          res.redirect('/admin/products');
      })
      .catch(error => {
          // Xử lý lỗi nếu có
          console.error(error);
          req.flash('error', 'Có lỗi xảy ra');
          res.redirect('/admin/products');
});
}
export const viewUpdate = (req,res) =>{
  
  const {id} = req.params
  axios.get(`/product/${id}`).then(async response =>{
    const product = response.data.response;
    const id_pd = product.id_pd
    const cate = await axios.get('/subcate')
    const dataSubcates = cate.data.response
    const getImgs = await axios.get(`/product/imgs/${id_pd}`)
    const imgs = getImgs.data.response
    res.render('admin/products/update',{layout:'admin/index', title:'Xem & sửa',product,imgs,dataSubcates})
  }).catch(error => {
    // Xử lý lỗi nếu có
    console.error(error);
    res.render('admin/500',{layout:'error', title:'500'})
    //res.render('admin/500',{layout:'error', title:'500'})
  })
}
export const deletePd = (req,res) =>{
  const {id} = req.params
  axios.delete(`/product/${id}`).then(async response =>{
    req.flash('success', 'Đã xóa sản phẩm');
    res.redirect('/admin/products');
  }).catch(error => {
    // Xử lý lỗi nếu có
    console.error(error);
    req.flash('error', 'Có lỗi xảy ra');
    res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm',error})
    //res.render('admin/500',{layout:'error', title:'500'})
  })
}