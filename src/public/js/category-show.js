// khi người dùng click vào toggle sẽ ẩn và hiển thị menu dropdown
let myFunction = () => {
  document.getElementById("myDropdown").classList.toggle("show");
};

// đóng danh mục khi người dùng kích ra bên ngoài menu danh mục
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;

    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

let category_responsive = () => {
  document.getElementById("myDropdown-responsive").classList.toggle("show");
};

// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn-responsive")) {
//     let dropdownsResponsive = document.getElementsByClassName(
//       "dropdown-content-responsive"
//     );
//     let i;

//     for (i = 0; i < dropdownsResponsive.length; i++) {
//       let openDropdownResponsive = dropdownsResponsive[i];
//       if (openDropdownResponsive.classList.contains("show")) {
//         openDropdownResponsive.classList.remove("show");
//       }
//     }
//   }
// };
