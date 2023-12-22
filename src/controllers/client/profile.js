require("dotenv").config();
import axios from "axios";
axios.defaults.baseURL = process.env.API;

export const getProfile = async (req, res) => {
  const id_user = req.user?.id_user
  console.log('id_user',id_user);
  axios.get(`/user/${id_user}`)
  .then((response) => {
    const dataUser = response.data.response
    console.log('dataUser',dataUser);
    res.render("client/profile", { layout: "client/profile", title: "Profile",dataUser });
  })
  .catch((error) => {
    // Xử lý lỗi nếu có
    console.error(error);
    res.render("admin/500", { layout: "error", title: "500" });
  });
};

export const updateProfile = (req, res) => {
  const id = req.params.id;
  const data = { ...req.body };

  axios
    .put(`/user/${id}`, data)
    .then((response) => {
      req.flash('success', 'Đã cập nhật thông tin!');
      res.redirect("/profile");
    })
    .catch((error) => {
      // Xử lý lỗi nếu có
      req.flash('error', 'Có lỗi xảy ra!');
      console.error(error);
      res.render("admin/500", { layout: "error", title: "500" });
    });
};
