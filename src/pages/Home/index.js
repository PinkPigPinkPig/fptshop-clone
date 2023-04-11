import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import ProductCard from "components/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductActions, productSelector } from "ReduxSaga/Product/ProductRedux";
import { PRODUCT_IMAGES } from "Themes/Image";
import ListCate from "./components/ListCate";


function Home() {
    const { productHomePage } = useSelector(productSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ProductActions.getProductHomePageRequest())
        dispatch(ProductActions.getAllCategoryRequest())
    }, [dispatch])

    return (
        <div className="">
            <div className="bg-light"><ListCate /></div>
            <div className="mt-4 bg-light py-2">
                <span className='fs-4 fw-bold mx-4 mt-2'>Điện Thoại</span>
                <div className="row">
                    {productHomePage?.DT?.map((item, index) => {
                        return (
                            <div className="col-3" key={index}>
                                <ProductCard
                                    price={item?.price}
                                    name={item?.productName}
                                    specification={item?.specification}
                                    saleOff={item?.saleOff}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="mt-4 bg-light py-2">
                <span className='fs-4 fw-bold mx-4 mt-2'>Laptop</span>
                <div className="row">
                    {productHomePage?.LT?.map((item, index) => {
                        return (
                            <div className="col-3" key={index}>
                                <ProductCard
                                    price={item?.price}
                                    name={item?.productName}
                                    specification={item?.specification}
                                    saleOff={item?.saleOff}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;