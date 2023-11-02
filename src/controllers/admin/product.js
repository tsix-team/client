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
          const dataProducts = response.data.response;
            const cate = await axios.get('/cate')
            const dataCates = cate.data.response
            // const cate = [
            //   {id_cate:1,name_cate:'cate1'},
            //   {id_cate:2,name_cate:'cate2'},
            //   {id_cate:3,name_cate:'cate3'},
            //   ]
            // const product = [
            //   {id_pd:1,name_pd:'pd1',id_cate:2},
            //   {id_pd:2,name_pd:'pd2',id_cate:1},
            //   {id_pd:3,name_pd:'pd3',id_cate:1},
            //   ]
            dataProducts.forEach((productItem) => {
              const correspondingCate = dataCates.find((cateItem) => cateItem.id_cate == productItem.id_cate);
              if (correspondingCate) {
                productItem.name_cate = correspondingCate.name_cate;
              } else{
                productItem.name_cate = 'unset'
              }
            });
            
            console.log('datapd e:',dataProducts);
            // const dataCate = await axios.get('/cate')
            // const dataSubcate = await axios.get('/subcate')
            // const cates = dataCate.data.response
            // const subcates = dataSubcate.data.response
            res.render('admin/products',{layout:'admin', title:'Quản lý sản phẩm',dataProducts,dataCates,query:config.params})
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
          res.redirect('/admin/products');
      })
      .catch(error => {
          // Xử lý lỗi nếu có
          console.error(error);
          res.render('admin/500',{layout:'error', title:'500'})
});
}
export const viewUpdate = (req,res) =>{
  const {slug} = req.params
  axios.get(`/product/${slug}`).then(async response =>{
    const product = response.data.response;
    const id_pd = product.id_pd
    const getImgs = await axios.get(`/product/imgs/${id_pd}`)
    const imgs = getImgs.data.response
    res.render('admin/products/update',{layout:'admin', title:'Xem & sửa',product,imgs})
  }).catch(error => {
    // Xử lý lỗi nếu có
    console.error(error);
    res.render('admin/products',{layout:'admin', title:'Quản lý sản phẩm',error})
    //res.render('admin/500',{layout:'error', title:'500'})
  })
}