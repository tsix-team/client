require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
export const login = (req,res) => {
    const formData = {...req.body}
    console.log("formData:",formData);
    axios.post('auth/login',formData)
        .then(response => {
            const data = response.data
            console.log('Log res data:',data);
            if (data.err !== 0) {
                res.render('admin/login',{layout:'admin/login',error:data.msg,formData})
            }  else{
                res.cookie('tsixToken', data.token, { maxAge: 3600000, httpOnly: true });
                res.redirect('/admin');
            }
        })
        .catch(error => {
            res.render('admin/login',{layout:'admin/login',error:error.response?.data?.msg,formData})
            console.log("errrrrr:",error);
  });
}