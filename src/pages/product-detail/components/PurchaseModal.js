import React, { useState } from "react"
import {
  Modal,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Box,
  Divider,
  Stack,
} from "@mui/material"
import styles from "../productDetail.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import phoneImg from "../../../assets/images/product-detail/product_img.webp"
import ProductMini from "components/ProductMini/ProductMini"

const PurchaseModal = ({ visible, onClose }) => {
  const [color, setColor] = useState(10)
  const [count, setCount] = useState(0)
  return (
    <Modal
      open={visible}
      onClose={onClose}
      className={`d-flex h-100 justify-content-center ${styles.productModal}`}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <div
        className='bg-white w-50 rounded-1 p-3'
        style={{ height: "fit-content" }}
      >
        <span className='fs-3'>Có 1 sản phẩm trong giỏ hàng</span>
        <div className='border-bottom border-dark my-2' />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button size="large" color='error' variant='contained' sx={{padding: 2, fontSize: 18}}>
            Hoàn tất đặt hàng
          </Button>
        </Box>
      </div>
    </Modal>
  )
}

export default PurchaseModal
