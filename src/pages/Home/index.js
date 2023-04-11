import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import ProductCard from "components/ProductCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ProductActions } from "ReduxSaga/Product/ProductRedux";
import { PRODUCT_IMAGES } from "Themes/Image";
import ListCate from "./components/ListCate";

const data = {
    title: '',
    image: ''
}
function Home() {
    const dispatch = useDispatch()
    const handleCallAPI = () => {
        dispatch(ProductActions.getTest({}))
    }

    useEffect(() => {
        dispatch(ProductActions.getProductHomePageRequest())
        dispatch(ProductActions.getAllCategoryRequest())
    }, [])


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
            <button onClick={handleCallAPI}>
                Click me
            </button>
        </div>
    );
}

export default Home;