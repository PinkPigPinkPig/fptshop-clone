import ListProduct from "pages/list-product";
import ProductDetail from "pages/product-detail";
import Home from "../pages/Home";


const routes = [
    {path: '/', component: Home, background: true},
    {path: '/:category', component: ListProduct, background: false},
    {path: '/:category/:product', component: ProductDetail, background: false},
]

export {routes}