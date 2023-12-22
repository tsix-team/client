require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
const config = {
    params: {},
};

export const indexProduct = async (req, res) => {
    config.params = { size: 10 }
    axios.get('/product', config)
        .then(async response => {
            const dataProducts = response.data.response;
            res.render('client/product', { layout: 'client/product', title: 'Sản phẩm', dataProducts })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            // res.render('client/product', { title: 'Sản phẩm', error })
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const cateProduct = async (req, res) => {
    config.params = { size: 10 }
    const { slug } = req.params
    axios.get(`/product/cate/${slug}`,config)
        .then(async response => {
            const dataProducts = response.data.response;
            res.render('client/product', { layout: 'client/product', title: 'Sản phẩm', dataProducts })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            // res.render('client/product', { title: 'Sản phẩm', error })
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const subcateProduct = async (req, res) => {
    config.params = { size: 10 }
    const { slug } = req.params
    axios.get(`/product/subcate/${slug}`,config)
        .then(async response => {
            const dataProducts = response.data.response;
            res.render('client/product', { layout: 'client/product', title: 'Sản phẩm', dataProducts })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            // res.render('client/product', { title: 'Sản phẩm', error })
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const productDetail = (req, res) => {

    const { slug } = req.params
    axios.get(`/product/${slug}`)
        .then(async response => {
            const dataProduct = response.data.response;
            const getImgs = await axios.get(`/product/imgs/${dataProduct.id_pd}`)
            const getCmts = await axios.get(`/comment/${dataProduct.id_pd}`)
            const getPds2 = await axios.get(`/product/search/keyword`,{params: { size: 6,brand:dataProduct.brand }})
            const imgs = getImgs.data.response
            const cmts = getCmts.data
            const pds2 = getPds2.data
            console.log('Data pddddddddddddddddddddddddddddddddd:', pds2, dataProduct.brand);
            res.render('client/product-details', { layout: 'client/product-details', title: 'Sản phẩm', dataProduct, imgs,cmts,pds2 })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            // res.render('client/product', { title: 'Sản phẩm', error })
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const addToCart = (req, res) => {
    const { slug } = req.params
    axios.get(`/product/${slug}`)
        .then(async response => {
            const dataProduct = response.data.response
            res.json({
                message: 'Đã thêm vào giỏ hàng',
                data: dataProduct
            })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const searchPd = (req, res) => {
    const { k } = req.body
    config.params.k = k
    axios.get(`/product/search/keyword`, config)
        .then(async response => {
            const dataProducts = response.data;
            res.render('client/product', { layout: 'client/product', title: 'Sản phẩm', dataProducts, k })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            // res.render('client/product', { title: 'Sản phẩm', error })
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const liveSearch = (req, res) => {
    config.params = {size:5}
    axios.get(`/product/search/keyword?k=${req.query.k}`,config)
        .then(async response => {
            const dataProducts = response.data;
            res.json(dataProducts)
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            // res.render('client/product', { title: 'Sản phẩm', error })
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const comment = async (req, res) => {
    const id_user = req.user?.id_user
    const slug = req.params.slug
    const content = req.body.content
    console.log('slugslugslug',req.params,id_user,req.body.content);
    const formData = {id_user,slug,content}
    axios.post('/comment', formData)
        .then(async response => {
            res.redirect(`/product-details/${slug}`);
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            // res.render('client/product', { title: 'Sản phẩm', error })
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}