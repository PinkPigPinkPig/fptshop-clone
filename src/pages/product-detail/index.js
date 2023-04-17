import React from "react";
import ProductPreview from "./components/ProductPreview";
import PriceAndPurchase from "./components/PriceAndPurchase";

function ProductDetail() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="d-flex flex-row col-6 my-3">
            <span className="display-6 me-3">
              <strong>Samsung Galaxy S74</strong>
            </span>
            <span className="align-self-end text-secondary">(No.00804446)</span>
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
