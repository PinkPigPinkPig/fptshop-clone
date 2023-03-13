import React from "react";
import phoneImg from "../../assets/images/product-detail/product_img.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import styles from "./productDetail.module.scss";

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

          <div className="col">
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row my-3">
                <span className="display-6 me-3 text-danger">
                  <strong>10.990.000₫</strong>
                </span>
                <span className="align-self-end text-secondary text-decoration-line-through">
                  11.990.000₫
                </span>
              </div>
              <div className="d-flex flex-column my-3">
                <span>Trả góp chỉ từ </span>
                <span className="">
                  <strong>1.661.000₫</strong>/tháng
                </span>
              </div>
            </div>
            <div className="d-flex flex-column bg-light p-3 ">
              <p>
                <strong>Nhận ngay khuyến mại đặc biệt</strong>
              </p>
              <div className="mb-3">
                <FontAwesomeIcon
                  icon="circle-check"
                  className="me-1"
                  color="#48bb78"
                />
                <span>Giảm ngay 1.000.000đ</span>
              </div>
              <div className="mb-3">
                <FontAwesomeIcon
                  icon="circle-check"
                  className="me-1"
                  color="#48bb78"
                />
                <span>Trả góp 0%</span>
              </div>
              <div className="mb-3">
                <FontAwesomeIcon
                  icon="circle-check"
                  className="me-1"
                  color="#48bb78"
                />
                <span>
                  Thu cũ đổi mới trợ giá ngay 15% đến 2 triệu (MintPro)
                </span>
              </div>
              <div className="mb-3">
                <FontAwesomeIcon
                  icon="circle-check"
                  className="me-1"
                  color="#48bb78"
                />
                <span>
                  Giảm đến 20% gói bảo hành rơi vỡ/ Gia hạn 12 tháng khi mua kèm
                  máy
                </span>
              </div>
              <div className="mb-3">
                <FontAwesomeIcon
                  icon="circle-check"
                  className="me-1"
                  color="#48bb78"
                />
                <span>
                  Đơn hàng mua Điện thoại/Máy tính bảng/Laptop được tặng 1 PMH
                  500.000đ mua Robot hút bụi/ máy lọc nước
                </span>
              </div>
            </div>
            <Button
              variant="contained"
              color="error"
              className={`${styles.buttonHeight} w-100 mb-3`}
            >
              <span className="fs-4">MUA NGAY</span>
            </Button>
            <div className="d-flex justify-content-between">
              <Button
                variant="contained"
                className={`${styles.buttonHeight} ${styles.buttonWidth} d-flex flex-column`}
              >
                <span className="fs-4">TRẢ GÓP 0%</span>
                <span className="text-capitalize">
                  Duyệt nhanh qua điện thoại
                </span>
              </Button>
              <Button
                variant="contained"
                className={`${styles.buttonHeight} ${styles.buttonWidth} d-flex flex-column`}
              >
                <span className="fs-4">TRẢ GÓP QUA THẺ</span>
                <span className="text-capitalize">Visa/ Master Card</span>
              </Button>
            </div>
          </div>
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
