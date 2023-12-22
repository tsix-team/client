require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
const config = {
    params: {},
};
export const home = (req,res) => {
    console.log("Home user, toastr:");
    config.params = { status:3 }
    axios.get('/order/count', config)
        .then(async response => {
            const revenue = response.data;
            const countUser = await axios.get(`/user/count`)
            const countOrder0 = await axios.get(`/order/count?status=0`)
            const countOrder1 = await axios.get(`/order/count?status=1`)
            const countOrder2 = await axios.get(`/order/count?status=2`)
            res.render('admin',{layout:'admin/index', title:'Tsix Admin',revenue,total_user:countUser.data,order0:countOrder0.data,order1:countOrder1.data,order2:countOrder2.data})
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
    
}