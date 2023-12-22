require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
export const viewCheckout = (req, res) => {
    const user = req.user
    const id_user = user.id_user
    axios.get(`/user/${id_user}`)
        .then(async response => {
            const dataUser = response.data.response;
            res.render('client/checkout', { layout: 'client/checkout', title: 'Đặt hàng', dataUser })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const checkout = (req, res) => {
    
    const { id_user } = req.user
    const dataForm = {...req.body,id_user}
    console.log('req.body',dataForm);
    axios.post(`/order`,dataForm)
        .then(async response => {
            const dataRES = response.data.response;
            req.flash('success', 'Đặt hàng thành công!');
            res.send(dataRES)
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            req.flash('error', 'Có lỗi xảy ra!');
            // res.render('client/product', { title: 'Sản phẩm', user, error })
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}