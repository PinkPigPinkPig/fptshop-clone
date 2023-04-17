import ListProduct from "pages/list-product";
import ProductDetail from "pages/product-detail";
import Home from "../pages/Home";


const routes = [
    {path: '/', component: Home, background: true},
    {path: '/list-product', component: ListProduct, background: false},
    {path: '/product-detail/:id', component: ProductDetail, background: false},
]

export {routes}