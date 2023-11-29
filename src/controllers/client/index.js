require('dotenv').config()
import { getCate } from '../../services/axios';
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
export const home = (req, res) => {
    const user = req.user
    axios.get('/product')
        .then(async response => {
            const dataProducts = response.data.response;
            const bigCate = await getCate()
            console.log('bigCate from index',bigCate);
            res.render('client', { title: 'Tsix', user, dataProducts, bigCate })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('client', { title: 'Tsix', user, error })
            //res.render('admin/500',{layout:'error', title:'500'})
        });
}