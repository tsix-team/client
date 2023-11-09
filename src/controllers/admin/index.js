require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
export const home = (req,res) => {
    const user = req.user
    console.log("Home user:",user);
    res.render('admin',{layout:'admin/index', title:'Tsix Admin'})
}