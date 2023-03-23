import React, { useState } from "react";
import {
  Modal,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import styles from "../productDetail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import phoneImg from "../../../assets/images/product-detail/product_img.webp";

const PurchaseModal = ({ visible, onClose }) => {
  const [color, setColor] = useState(10);
  const [count, setCount] = useState(0);
  return (
    <Modal
      open={visible}
      onClose={onClose}
      className={"d-flex justify-content-center align-items-center"}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="bg-white h-50 w-50 rounded-1 p-3">
        <span className="fs-3">Có 1 sản phẩm trong giỏ hàng</span>
        <div className="border-bottom border-dark my-2" />
        <div className="d-flex flex-row">
          <div className={`w-25 text-wrap me-2`}>
            <img src={phoneImg} alt="" className={`${styles.miniImage}`} />
          </div>
          <div className={`w-50 text-wrap d-flex flex-column`}>
            <span className="fs-5 text-break mb-4">
              <strong>Samsung Galaxy S74</strong>
            </span>
            <FormControl className={"w-25"}>
              <InputLabel id="demo-simple-select-label">Màu sắc</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={color}
                label="Màu sắc"
                onChange={(event) => setColor(event.target.value)}
              >
                <MenuItem value={10}>Xanh</MenuItem>
                <MenuItem value={20}>Đỏ</MenuItem>
                <MenuItem value={30}>Vàng</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={`w-25  d-flex flex-row`}>
            <button
              type="button"
              className={`${styles.counterButton} btn btn-primary`}
            >
              -
            </button>
            <input type="text" readonly="" className={`${styles.countInput}`} value="3"/>
            <button
              type="button"
              className={`${styles.counterButton} btn btn-primary`}
            >
              +
            </button>
          </div>
          <div className={`w-25 text-wrap`}>
            <span className="text-break">
              egeuiaeiuwgiuegsdjflksdjflksjdiquwgeiuqgweiu
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PurchaseModal;
