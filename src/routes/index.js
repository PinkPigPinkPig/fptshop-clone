import ListProduct from "pages/list-product";
import Home from "../pages/Home";


const routes = [
    {path: '/', component: Home, background: true},
    {path: '/list-product', component: ListProduct, background: false},
    {path: '/product-detail', component: Home, background: false},
]

export {routes}