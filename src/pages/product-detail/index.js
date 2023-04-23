import React from "react";
import ProductPreview from "./components/ProductPreview";
import PriceAndPurchase from "./components/PriceAndPurchase";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductActions, productSelector } from "ReduxSaga/Product/ProductRedux";

function ProductDetail() {
  const { productDetail } = useSelector(productSelector)
  const { state } = useLocation()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(ProductActions.getProductDetailRequest(state))
  }, [dispatch, state])

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="d-flex flex-row col-6 my-3">
            <span className="display-6 me-3">
              <strong>{productDetail?.productName}</strong>
            </span>
            <span className="align-self-end text-secondary">{`(No.${Math.floor(productDetail?.createdTime)})`}</span>
          </div>
          <div className="d-flex flex-row-reverse col-6 my-3">
            <span>227 đánh giá | 323 Hỏi & đáp | So sánh</span>
            <span className="me-2">5 sao</span>
          </div>
        </div>

        <div className="row">
          <ProductPreview />
          <PriceAndPurchase />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
