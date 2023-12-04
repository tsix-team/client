require('dotenv').config()
import axios from 'axios';
import toastr from 'toastr'
axios.defaults.baseURL = process.env.API;
export const home = (req,res) => {
    console.log("Home user, toastr:");
    res.render('admin',{layout:'admin/index', title:'Tsix Admin'})
}