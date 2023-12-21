require("dotenv").config();
import axios from "axios";
axios.defaults.baseURL = process.env.API;

export const getProfile = async (req, res) => {
  res.render("client/profile", { layout: "client/profile", title: "Profile" });
};

export const updateProfile = (req, res) => {
  const id = req.params.id;
  const data = { ...req.body };

  axios
    .put(`/user/${id}`, data)
    .then((response) => {
      res.redirect("/profile");
      res.json({ message: "thanh cong" });
    })
    .catch((error) => {
      // Xử lý lỗi nếu có
      console.error(error);
      res.render("admin/500", { layout: "error", title: "500" });
    });
};
