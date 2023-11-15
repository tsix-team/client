require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
export const login = (req,res) => {
    const formData = {...req.body}
    console.log("formData:",formData);
    axios.post('auth/clientLogin',formData)
        .then(response => {
            const data = response.data
            console.log('Log res data:',data);
            if (data.err !== 0) {
                res.render('client/login',{layout:'client/register',title:'Login',error:data.msg,formData})
            }  else{
                res.cookie('tsixToken', data.token, { maxAge: 36000000, httpOnly: true });
                res.redirect('/');
            }
        })
        .catch(error => {
            res.render('client/login',{layout:'client/register',title:'Login',error:error.response?.data?.msg,formData})
            console.log("errrrrr:",error);
  });
}
export const register = (req,res) => {
    const formData = {...req.body}
    console.log("formData:",formData);
    axios.post('auth/register',formData)
        .then(response => {
            const data = response.data
            console.log('Log res data:',data);
            if (data.err !== 0) {
                res.render('client/register',{layout:'client/register',title:'Register',error:data.msg,formData})
            }  else{
                res.cookie('tsixToken', data.token, { maxAge: 36000000, httpOnly: true });
                res.redirect('/');
            }
        })
        .catch(error => {
            res.render('client/register',{layout:'client/register',title:'Register',error:error.response?.data?.msg,formData})
            console.log("errrrrr:",error);
  });
}