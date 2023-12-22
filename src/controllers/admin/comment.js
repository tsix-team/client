require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
const config = {
    params: {},
};
export const indexComment = (req, res) => {
    config.params = { ...req.query } || { page: 1, size: 20 }
    axios.get('/comment', config)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.render('admin/comments', { layout: 'admin/index', title: 'Quản lý bình luận', data })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const deleteCmt = (req,res) =>{
    const {id} = req.params
    axios.delete(`/comment/${id}`).then(async response =>{
      res.redirect('/admin/comments');
    }).catch(error => {
      // Xử lý lỗi nếu có
      console.error(error);
      res.render('admin/comments',{layout:'admin/index', title:'Quản lý bài viết',error})
      //res.render('admin/500',{layout:'error', title:'500'})
    })
  }