require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
const config = {
    params: {},
};
export const indexUser = (req, res) => {

    config.params = {page: 1, size: 20, ...req.query, role:0}
    axios.get('/user', config)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.render('admin/users', { layout: 'admin/index', title: 'Quản lý tài khoản', data })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });


}
export const employees = (req, res) => {
    if (req.user.role == 1) {
        return res.redirect('admin/users')
    }
    config.params = { ...req.query, role: 1, page: 1, size: 20 }
    axios.get('/user', config)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.render('admin/users', { layout: 'admin/index', title: 'Nhân viên', data })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const createUser = (req, res) => {
    const data = { ...req.body }
    axios.post('/user', data)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            if (response.data.err == 0) {
                req.flash('success', 'Đã thêm tài khoản');
            } else{
                req.flash('error', `Có lỗi xảy ra! ${response.data.msg}`);
            }
            res.redirect('/admin/users');
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            req.flash('error', `Có lỗi xảy ra! ${error.response.data.msg}`);
            res.redirect('/admin/users');
        });
}
export const banUser = (req, res) => {
    const { id } = req.params
    axios.put(`/user/ban/${id}`)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            req.flash('success', 'Thay đổi trạng thái thành công');
            res.redirect('/admin/users');
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const updateUser = (req, res) => {
    const { id } = req.params
    const data = { ...req.body }
    axios.put(`/user/${id}`, data)
        .then(response => {
            req.flash('success', 'Đã cập nhật tài khoản');
            res.redirect('/admin/users');
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            req.flash('error', 'Cập nhật thất bại, có lỗi xảy ra');
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const viewUpdateUser = (req, res) => {
    const { id } = req.params

    axios.get(`/user/${id}`)
        .then(response => {
            const dataUser = response.data.response
            res.render('admin/users/update', { layout: 'admin/index', title: 'Sửa tài khoản', dataUser })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}