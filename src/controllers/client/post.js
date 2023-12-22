require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
const config = {
    params: {},
};
export const indexPost = (req, res) => {
    config.params = {size:12}
    axios.get('/post',config)
        .then(async response => {
            const dataPosts = response.data.response;
            res.render('client/news', { layout: 'client/news', title: 'Tin tức', dataPosts })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            // res.render('client/product', { title: 'Sản phẩm', user, error })
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const postDetail = (req, res) => {
    
    const { id } = req.params
    axios.get(`/post/${id}`)
        .then(async response => {
            const dataPost = response.data.response;
            res.render('client/news-details', { layout: 'client/news-details', title: dataPost.title, dataPost })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            // res.render('client/product', { title: 'Sản phẩm', user, error })
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}