require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
const config = {
    params: {},
};
export const indexOrder = (req, res) => {
    config.params = { ...req.query } || { page: 1, size: 20 }
    axios.get('/order', config)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.render('admin/orders', { layout: 'admin/index', title: 'Quản lý đơn hàng', data })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const indexInvoice = (req, res) => {
    config.params = { ...req.query } || { page: 1, size: 20 }
    axios.get('/order?status=3', config)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.render('admin/orders', { layout: 'admin/index', title: 'Quản lý hóa đơn', data })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const createOrder = (req, res) => {
    const data = { ...req.body }
    axios.post('/order', data)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.redirect('/admin/orders');
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const updateOrder = (req, res) => {
    const { id } = req.params

    if (req.query.status) {
        const status = req.query.status
        axios.put(`/order/${id}?status=${status}`)
            .then(response => {
                res.redirect('/admin/orders');
            })
            .catch(error => {
                // Xử lý lỗi nếu có
                console.error(error);
                res.render('admin/500', { layout: 'error', title: '500' })
            });
    } else {
        const data = { ...req.body }
        axios.put(`/order/${id}`, data)
            .then(response => {
                res.redirect('/admin/orders');
            })
            .catch(error => {
                // Xử lý lỗi nếu có
                console.error(error);
                res.render('admin/500', { layout: 'error', title: '500' })
            });

    }
}
export const viewUpdateOrder = (req, res) => {
    const { id } = req.params

    axios.get(`/order/${id}`)
        .then(response => {
            const dataOrder = response.data.response
            console.log('dataOrder,',dataOrder);
            res.render('admin/orders/update', { layout: 'admin/index', title: 'Chi tiết đơn hàng', dataOrder })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}