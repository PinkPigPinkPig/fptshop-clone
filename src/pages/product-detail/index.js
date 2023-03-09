import React from "react";
import phoneImg from "../../assets/images/product-detail/product_img.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductDetail() {
  return (
    <div>
      Product Detail
      <div className="container">
        <div className="row">
          <div className="d-flex flex-row col-6 my-3">
            <span className="display-6">
              <strong>Samsung Galaxy S74</strong>
            </span>
            <span className="align-bottom bg-red">(No.00804446)</span>
          </div>
          <div className="d-flex flex-row-reverse col-6 my-3">
            <span>227 đánh giá | 323 Hỏi & đáp | So sánh</span>
            <span className="me-2">5 sao</span>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img src={phoneImg} alt="" className="mb-3 w-100" />
            <div className="d-flex flex-column bg-light p-3 ">
              <div className="mb-3">
                <FontAwesomeIcon icon="mobile" className="me-1" />
                <span>6.7 inch, Super AMOLED, FHD+, 1080 x 2400 Pixels</span>
              </div>
              <div className="mb-3">
                <FontAwesomeIcon icon="camera" className="me-1" />
                <span>108.0 MP + 12.0 MP + 5.0 MP + 5.0 MP</span>
              </div>
              <div className="mb-3">
                <FontAwesomeIcon icon="camera-rotate" className="me-1" />
                <span>32.0 MP</span>
              </div>
              <div className="mb-3">
                <FontAwesomeIcon icon="microchip" className="me-1" />
                <span>Snapdragon 778G</span>
              </div>
              <div>
                <FontAwesomeIcon icon="floppy-disk" className="me-1" />
                <span>128 GB</span>
              </div>
            </div>
            <div className="my-3">
              <FontAwesomeIcon icon="medal" className="me-1" color="#cb1c22" />
              <span>Hàng chính hãng - Bảo hành 12 Tháng</span>
              <FontAwesomeIcon
                icon="truck-moving"
                className="ms-4 me-1"
                color="#cb1c22"
              />
              <span>Giao hàng toàn quốc</span>
            </div>
          </div>
          <div className="col">Product price and payment</div>
        </div>
        <div className="row">
          <div className="col">Product detail</div>
          <div className="col">Product specification</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
