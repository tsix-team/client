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
export const getCate = async ()=>{
    const cate = await axios.get('/cate')
    const dataCates = cate.data.response
    const subcate = await axios.get('/subcate')
    const dataSubcates = subcate.data.response
    const bigCate = dataCates.map(category => {
        // Tìm các subCate tương ứng với id_cate trong mảng subCate
        const subCategories = dataSubcates.filter(sub => sub.id_cate === category.id_cate);
        // Trả về đối tượng mới chứa thông tin của bigCate và subCate tìm được
        return {
          ...category,
          subCate: subCategories
        };
      });
    console.log("Biggg:",bigCate);
    return bigCate
}