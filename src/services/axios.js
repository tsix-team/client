require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
export const getAll = async () =>{
    try {
        console.log('api url',process.env.API);
        await axios.get('/cate').then(()=>{
            console.log('res ãios: ',response);
            return response
        })
    } catch (error) {
        return error
    }
}