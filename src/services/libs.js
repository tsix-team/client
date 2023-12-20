require('dotenv').config()
import axios from 'axios';
axios.defaults.baseURL = process.env.API;


export const ROOT_URL = process.env.CLIENT_URL
export const ADMIN_URL = process.env.ADMIN_URL


export const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);

    // Lấy ngày, tháng và năm từ đối tượng Date
    const day = dateObj.getUTCDate()
    const month = dateObj.getUTCMonth() + 1 // Tháng trong JavaScript bắt đầu từ 0
    const year = dateObj.getUTCFullYear()

    // Định dạng lại thành ngày tháng năm
    const formattedDate = day + '-' + (month < 10 ? '0' : '') + month + '-' + year
    return formattedDate
}
export const slugger = (title) => {
    const slug = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, '-')
    return slug
}
export const getTimeAgo = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
        return `${years} năm trước`;
    } else if (months > 0) {
        return `${months} tháng trước`;
    } else if (days > 0) {
        return `${days} ngày trước`;
    } else if (hours > 0) {
        return `${hours} giờ trước`;
    } else if (minutes > 0) {
        return `${minutes} phút trước`;
    } else {
        return `${seconds} giây trước`;
    }
}
export const formatDate2 = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    const formattedDate = `${day}h${minute}, ${day} tháng ${month}, ${year}`;

    return formattedDate;
}
export const eq = (a, b) => a == b
export const rounding = num => num.toFixed(1)

export const formatNumber = (number) => {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(/^(\d{1,3})(?=(\d{3})+(?:\.\d*)?$)/g, "$1,");
}

export const getStatus = (status) => {
    let s
    switch (status) {
        case status: '1'
            s = 'Đã xác nhận'
            break
        case status: '2'
            s = 'Đang giao'
            break
        case status: '3'
            s = 'Đã hoàn thành'
            break
        case status: '0'
            s = 'Chưa xử lý'
            break
        case status: '-1'
            s = 'Đã bị hủy'
            break
        default: s = "Không rõ"
            break
    }
    return s
}