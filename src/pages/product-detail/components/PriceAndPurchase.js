import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import styles from "../productDetail.module.scss";

const PriceAndPurchase = () => {
    return (
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
    )
}

export default PriceAndPurchase