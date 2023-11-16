require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
export const indexProduct = (req, res) => {
    const user = req.user
    axios.get('/product')
        .then(async response => {
            const dataProducts = response.data.response;
            const subcate = await axios.get('/subcate')
            const dataSubcates = subcate.data.response
            dataProducts.forEach((productItem) => {
                const correspondingCate = dataSubcates.find((subcateItem) => subcateItem.id_subcate == productItem.id_subcate);
                if (correspondingCate) {
                    productItem.name_subcate = correspondingCate.name_subcate;
                } else {
                    productItem.name_subcate = 'none'
                }
            });
            res.render('client/product', {layout:'client/product', title: 'Sản phẩm', user, dataProducts, dataSubcates })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            // res.render('client/product', { title: 'Sản phẩm', user, error })
            res.render('admin/500',{layout:'error', title:'500'})
        });
}
export const productDetail = (req, res) => {
    const user = req.user
    const {slug} = req.params
    axios.get(`/product/${slug}`)
        .then(async response => {
            const dataProduct = response.data.response;
            const getImgs = await axios.get(`/product/imgs/${dataProduct.id_pd}`)
            const imgs = getImgs.data.response
            console.log('Data pdd:',dataProduct);
            res.render('client/product-details', {layout:'client/product-details', title: 'Sản phẩm', user, dataProduct,imgs })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            // res.render('client/product', { title: 'Sản phẩm', user, error })
            res.render('admin/500',{layout:'error', title:'500'})
        });
}