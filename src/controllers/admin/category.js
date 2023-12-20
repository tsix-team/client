require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;
let config = {
    params: {},
};
export const indexCate = (req, res) => {
    //res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm'})
    config.params = { ...req.query }
    axios.get('/cate', config)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.render('admin/categories', { layout: 'admin/index', title: 'Quản lý danh mục', data, query: config.params })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const getCate = (req, res) => {

    //res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm'})
    axios.get('/cate')
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.render('admin/categories', { layout: 'admin/index', title: 'Quản lý danh mục', data })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const getCateById = (req, res) => {

    //res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm'})
    axios.get('/cate')
        .then(response => {
            const data = response.data.response;
            console.log(data);
            res.render('admin/categories', { layout: 'admin/index', title: 'Quản lý danh mục', data })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const createCate = (req, res) => {
    const data = { ...req.body }
    //res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm'})
    axios.post('/cate', data)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            req.flash('success', 'Thêm danh mục thành công');
            res.redirect('/admin/categories');
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            req.flash('error', 'Danh mục đã tồn tại');
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const deleteCate = (req, res) => {
    const id = req.params.id
    //res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm'})
    axios.delete(`/cate/${id}`)
        .then(response => {
            const data = response.data?.response;
            console.log(data);
            req.flash('success', 'Đã xóa danh mục');
            res.redirect('/admin/categories');
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            req.flash('error', 'Không thể xóa danh mục đang chứa danh mục con');
            console.error(error);
            res.redirect('/admin/categories');
        });
}
export const updateCate = (req,res) => {
    const {id} = req.params
    const formData = {...req.body}
    axios.put(`/cate/${id}`, formData)
        .then(response => {
            const data = response.data.response;
            console.log('res data update:',data);
            req.flash('success', 'Đã cập nhật danh mục');
            res.redirect('/admin/categories');
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            req.flash('error', 'Không thể sửa danh mục trùng tên');
            res.render('admin/500',{layout:'error', title:'500'})
  });
  }
  export const viewUpdateCate = (req,res) => {
    
    const {id} = req.params
    axios.get(`/cate/${id}`)
        .then(async response => {
            const data = response.data.response;
            console.log('res data update:',data);
            const cate = await axios.get('/cate')
            res.render('admin/categories/update', { layout: 'admin/index', title: 'Sửa danh mục', data })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500',{layout:'error', title:'500'})
  });
  }



////////////////////subcate///////////////////////
export const indexSubcate = (req, res) => {
    
    //res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm'})
    config.params = { ...req.query }
    axios.get('/subcate', config)
        .then(async response => {
            const data = response.data.response;
            const cate = await axios.get('/cate')
            const dataCates = cate.data.response
            data.forEach((cateItem) => {
                const correspondingCate = dataCates.find((subcateItem) => subcateItem.id_cate == cateItem.id_cate);
                if (correspondingCate) {
                    cateItem.name_cate = correspondingCate.name_cate;
                } else{
                    cateItem.name_cate = 'none'
                }
              });
            res.render('admin/subcategories', { layout: 'admin/index', title: 'Quản lý danh mục con', data, query: config.params, dataCates })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const getSubcate = (req, res) => {

    //res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm'})
    axios.get('/subcate')
        .then(async response => {
            const data = response.data.response;
            const cate = await axios.get('/cate')
            const dataCates = cate.data.response
           
            res.render('admin/subcategories', { layout: 'admin/index', title: 'Quản lý danh mục con', data })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const getSubcateById = (req, res) => {

    //res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm'})
    axios.get('/subcate')
        .then(response => {
            const data = response.data.response;
            res.render('admin/subcategories', { layout: 'admin/index', title: 'Quản lý danh mục con', data })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const createSubcate = (req, res) => {
    const data = { ...req.body }
    //res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm'})
    axios.post('/subcate', data)
        .then(response => {
            const data = response.data.response;
            console.log(data);
            req.flash('success', 'Thêm danh mục con thành công');
            res.redirect('/admin/subcategories');
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            req.flash('error', 'Danh mục con đã tồn tại');
            res.render('admin/500', { layout: 'error', title: '500' })
        });
}
export const deleteSubcate = (req, res) => {
    const id = req.params.id
    //res.render('admin/products',{layout:'admin/index', title:'Quản lý sản phẩm'})
    axios.delete(`/subcate/${id}`)
        .then(response => {
            const data = response.data?.response;
            console.log(data);
            req.flash('success', 'Đã xóa danh mục con');
            res.redirect('/admin/subcategories');
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            req.flash('error', 'Danh mục con này đang tồn tại sản phẩm');
            res.redirect('/admin/subcategories');
        });
}
export const updateSubcate = (req,res) => {
    const {id} = req.params
    const formData = { ...req.body}
    axios.put(`/subcate/${id}`, formData)
        .then(response => {
            const data = response.data.response;
            console.log('res data update:',data);
            res.redirect('/admin/subcategories');
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500',{layout:'error', title:'500'})
  });
  }
  export const viewUpdateSubcate = (req,res) => {
    
    const {id} = req.params
    axios.get(`/subcate/${id}`)
        .then(async response => {
            const data = response.data.response;
            console.log('res data update:',data);
            const cate = await axios.get('/cate')
            const dataCates = cate.data.response
            res.render('admin/subcategories/update', { layout: 'admin/index', title: 'Sửa danh mục con', data, dataCates })
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
            res.render('admin/500',{layout:'error', title:'500'})
  });
  }