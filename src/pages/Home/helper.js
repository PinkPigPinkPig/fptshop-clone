import phoneImg from '../../assets/images/list-cate/img-dienthoai-desk.webp'
import laptopImg from '../../assets/images/list-cate/icon-laptop.webp'
import pcImg from '../../assets/images/list-cate/icon-pc.webp'
import tabletImg from '../../assets/images/list-cate/icon-mtb-desk.webp'
import smartDeviceImg from '../../assets/images/list-cate/icon-smart.webp'
import houseWareImg from '../../assets/images/list-cate/icon-houseware.webp'

const CATE_DATA = [
    {
        title: 'Điện thoại',
        image: phoneImg,
        route: '/list-product',
    },
    {
        title: 'Laptop',
        image: laptopImg,
        route: '/list-product',
    },
    {
        title: 'Pc - lắp ráp',
        image: pcImg,
        route: '/list-product',
    },
    {
        title: 'Máy tính bảng',
        image: tabletImg,
        route: '/list-product',
    },
    {
        title: 'Thiết bị thông minh',
        image: smartDeviceImg,
        route: '/list-product',
    },
    {
        title: 'Gia dụng',
        image: houseWareImg,
        route: '/list-product',
    },
    {
        title: 'Apple',
        image: phoneImg,
        route: '/list-product',
    },
    {
        title: 'Samsung',
        image: laptopImg,
        route: '/list-product',
    },
    {
        title: 'Đồng hồ thông minh',
        image: pcImg,
        route: '/list-product',
    },
    {
        title: 'Phụ kiện',
        image: tabletImg,
        route: '/list-product',
    },
    {
        title: 'Màn hình',
        image: smartDeviceImg,
        route: '/list-product',
    },
    {
        title: 'Máy cũ',
        image: houseWareImg,
        route: '/list-product',
    },
    
]

const CATE_TITLE = {
    DT: "ĐIỆN THOẠI",
    LT: 'LAPTOP',
    MTB: 'MÁY TÍNH BẢNG',
    PCLK: 'PC-LINH KIỆN',
    PK: 'PHỤ KIỆN',
    TBC: 'THIẾT BỊ CŨ',
}

export {
    CATE_DATA,
    CATE_TITLE,
}