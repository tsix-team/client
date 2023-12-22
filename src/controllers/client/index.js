require('dotenv').config()

import axios from 'axios';
axios.defaults.baseURL = process.env.API;
const config = {
    params: {},
};
export const home = (req, res) => {
    config.params = {size:12}
    axios.get('/product',config)
        .then(async response => {
            const dataProducts = response.data.response;
            const posts = await axios.get('/post?size=4')
            const dataPosts = posts.data.response
            res.render('client', { title: 'Tsix', dataProducts,dataPosts })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('client', { title: 'Tsix', error })
            //res.render('admin/500',{layout:'error', title:'500'})
        });
}