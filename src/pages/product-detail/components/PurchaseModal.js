import React, { useEffect, useState } from "react"
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
  IconButton,
} from "@mui/material"
import styles from "../productDetail.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import phoneImg from "../../../assets/images/product-detail/product_img.webp"
import ProductMini from "components/ProductMini/ProductMini"
import { localStorageHelper } from "helpers"
import { LOCAL_STORE } from "constants/system"
import PurchaseProduct from "components/PurchaseProduct/PurchaseProduct"
import EmptyModal from "./EmptyModal"
import CloseIcon from '@mui/icons-material/Close';

const PurchaseModal = ({ visible, onClose }) => {
  const [productList, setProductList] = useState([])
  const [changeList, setChangeList] = useState(false)
  useEffect(() => {
    const data = JSON.parse(localStorageHelper.getItem(LOCAL_STORE.CART))
    setProductList(data)
  }, [changeList])

  const onDelete = () => {
    setChangeList((prev) => !prev)
  }

  const handleClickOrder = () => {
    localStorage.clear()
  }
  return (
    <Modal
      open={visible}
      onClose={onClose}
      className={`d-flex h-100 justify-content-center ${styles.productModal}`}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div
        className="bg-white w-50 rounded-1 position-relative"
        style={{ height: "fit-content" }}
      >
        <IconButton className="position-absolute top-0 end-0" onClick={onClose}>
          <CloseIcon/>
        </IconButton>
        {productList?.length > 0 ? (
          <PurchaseProduct productList={productList} onDelete={onDelete} />
        ) : (
          <EmptyModal />
        )}
      </div>
    </Modal>
  )
}

export default PurchaseModal

