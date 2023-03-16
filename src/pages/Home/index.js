import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import ProductCard from "components/ProductCard";
import { Link } from "react-router-dom";
import { PRODUCT_IMAGES } from "Themes/Image";
import ListCate from "./components/ListCate";

const data = {
    title: '',
    image: ''
}
function Home() {
    return ( 
        <div className="">
            <div className="bg-light"><ListCate /></div>
            <div className="mt-4 bg-light row m-0">
                <div className="col-3">
                    <ProductCard />
                </div>
                <div className="col-3">
                    <ProductCard />
                </div>
                <div className="col-3">
                    <ProductCard />
                </div>
                <div className="col-3">
                    <ProductCard />
                </div>
                
            </div>
        </div>
     );
}

export default Home;