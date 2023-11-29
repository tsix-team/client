require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
const config = {
    params: {},
  };
export const indexPost = (req,res) => {
    //res.render('admin/posts',{layout:'admin/index', title:'Quản lý bài viết'})
    config.params = {...req.query} || {page:1,size:10}
    const user = req.user
    axios.get('/post',config)
        .then( async response => {
          const dataPosts = response.data.response;
          console.log('Datapostss:',dataPosts);
            res.render('admin/posts',{layout:'admin/index', title:'Quản lý post',user,dataPosts,query:config.params})
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/posts',{layout:'admin/index', title:'Quản lý post',user,query:config.params,error})
            //res.render('admin/500',{layout:'error', title:'500'})
  });
}
export const createPost = (req,res) => {
  //res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm'})
  console.log("post... ");
  const user = req.user
  const uploadedImage = req.file
  const formData = { ...req.body,uploadedImage,id_user:user.id_user}
  console.log(req.file);
  console.log("form dataaaaa: ",formData);
  axios.post('/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
          const data = response.data.response;
          console.log(data);
          res.redirect('/admin/posts');
      })
      .catch(error => {
          // Xử lý lỗi nếu có
          console.error(error);
          res.render('admin/500',{layout:'error', title:'500'})
});
}
export const updatePost = (req,res) => {
  //res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm'})
  console.log("post pd... ");
  const {id} = req.params
  const uploadedImage = req.files?.image
  const formData = { ...req.body,uploadedImage}
  console.log("form dataaaaa: ",formData);
  axios.put(`/post/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
          const data = response.data.response;
          console.log('res data update:',data);
          res.redirect('/admin/products');
      })
      .catch(error => {
          // Xử lý lỗi nếu có
          console.error(error);
          res.render('admin/500',{layout:'error', title:'500'})
});
}
export const viewUpdate = (req,res) =>{
  const user = req.user
  const {id} = req.params
  axios.get(`/product/${id}`).then(async response =>{
    const product = response.data.response;
    const id_pd = product.id_pd
    const cate = await axios.get('/subcate')
    const dataSubcates = cate.data.response
    const getImgs = await axios.get(`/product/imgs/${id_pd}`)
    const imgs = getImgs.data.response
    res.render('admin/products/update',{layout:'admin/index', title:'Xem & sửa',user,product,imgs,dataSubcates})
  }).catch(error => {
    // Xử lý lỗi nếu có
    console.error(error);
    res.render('admin/500',{layout:'error', title:'500'})
    //res.render('admin/500',{layout:'error', title:'500'})
  })
}
export const deletePost = (req,res) =>{
  const {id} = req.params
  axios.delete(`/post/${id}`).then(async response =>{
    res.redirect('/admin/posts');
  }).catch(error => {
    // Xử lý lỗi nếu có
    console.error(error);
    res.render('admin/posts',{layout:'admin/index', title:'Quản lý bài viết',error})
    //res.render('admin/500',{layout:'error', title:'500'})
  })
}