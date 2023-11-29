require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
import { getCate } from '../../services/axios';

export const indexProduct = async (req, res) => {
    const bigCate = await getCate()
    const user = req.user
    axios.get('/product')
        .then(async response => {
            const dataProducts = response.data.response;
            res.render('client/product', { layout: 'client/product', title: 'Sản phẩm', user, dataProducts, bigCate })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            // res.render('client/product', { title: 'Sản phẩm', user, error })
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const cateProduct = async (req, res) => {
    const bigCate = await getCate()
    const user = req.user
    const {slug}= req.params
    axios.get(`/product/cate/${slug}`)
        .then(async response => {
            const dataProducts = response.data.response;
            res.render('client/product', { layout: 'client/product', title: 'Sản phẩm', user, dataProducts, bigCate })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            // res.render('client/product', { title: 'Sản phẩm', user, error })
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const subcateProduct = async (req, res) => {
    const bigCate = await getCate()
    const user = req.user
    const {slug}= req.params
    axios.get(`/product/subcate/${slug}`)
        .then(async response => {
            const dataProducts = response.data.response;
            res.render('client/product', { layout: 'client/product', title: 'Sản phẩm', user, dataProducts,bigCate })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            // res.render('client/product', { title: 'Sản phẩm', user, error })
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const productDetail = (req, res) => {
    const user = req.user
    const { slug } = req.params
    axios.get(`/product/${slug}`)
        .then(async response => {
            const dataProduct = response.data.response;
            const getImgs = await axios.get(`/product/imgs/${dataProduct.id_pd}`)
            const imgs = getImgs.data.response
            console.log('Data pdd:', dataProduct);
            res.render('client/product-details', { layout: 'client/product-details', title: 'Sản phẩm', user, dataProduct, imgs })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            // res.render('client/product', { title: 'Sản phẩm', user, error })
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const addToCart = (req, res) => {
    const { slug } = req.params
    axios.get(`/product/${slug}`)
        .then(async response => {
            const dataProduct = response.data.response
            res.json({
                message:'Đã thêm vào giỏ hàng',
                data: dataProduct
            })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}