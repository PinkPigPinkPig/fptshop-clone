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
        <div>
            <ListCate />
            <div className="mt-5 mb-5 row">
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