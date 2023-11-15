require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
export const home = (req, res) => {
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
            // const dataCate = await axios.get('/cate')
            // const dataSubcate = await axios.get('/subcate')
            // const cates = dataCate.data.response
            // const subcates = dataSubcate.data.response
            res.render('client', { title: 'Tsix', user, dataProducts, dataSubcates })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('client', { title: 'Tsix', user, error })
            //res.render('admin/500',{layout:'error', title:'500'})
        });
}