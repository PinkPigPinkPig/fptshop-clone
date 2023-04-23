import ListProduct from "pages/list-product";
import ProductDetail from "pages/product-detail";
import Home from "../pages/Home";
import Cart from "pages/cart/Cart";
import Search from "pages/search/Search";
import NotFound from "pages/Error/NotFound";


const routes = [
    {path: '/', component: Home, background: true},
    {path: '/product/:category', component: ListProduct, background: false},
    {path: '/:category/:product', component: ProductDetail, background: false},
    {path: '/cart', component: Cart, background: false},
    {path: '/search', component: Search, background: false},
    {path: '*', component: NotFound, background: false},
    
]

export {routes}