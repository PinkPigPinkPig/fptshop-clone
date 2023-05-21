import React, { useEffect } from "react"
import styles from "./ProductMini.module.scss"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import phoneImg from "../../assets/images/product-detail/product_img.webp"
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material"
import { calculatePayMoney, moneyConvert } from "util/Ultilities"
import { localStorageHelper } from "helpers"
import { LOCAL_STORE } from "constants/system"

const ProductMini = ({ product, onDelete, onCountChange }) => {
  const [color, setColor] = useState(10)
  const [count, setCount] = useState(1)
  const handleAdd = () => {
    setCount((prev) => prev + 1)
  }
  const handleMinus = () => {
    if (count > 1) {
      setCount((prev) => prev - 1)
    }
  }
  const handleChangePrice = (price, count, saleOff = 100) => {
    return price * count * saleOff / 100
  }
  useEffect(() => {
    const price = handleChangePrice(product?.price, count)
    const discount = handleChangePrice(product?.price, count, product?.saleOff)
    onCountChange && onCountChange(product?.id, count)
  }, [count]);
  const handleDeleteFromCart = async () => {
    const data = JSON.parse(localStorageHelper.getItem(LOCAL_STORE.CART))
    const deletedData = data?.filter(item => item?.id != product?.id)
    await localStorageHelper.setItem(LOCAL_STORE.CART, deletedData)
    onDelete && onDelete(product?.id)
  }
  return (
    <>
      <div className="d-flex flex-row mb-3">
        <div className={`w-25 text-wrap me-2`}>
          <img
            src={product?.thumbnail?.imageLink || phoneImg}
            alt=""
            className={`img-fluid ${styles.miniImage}`}
          />
        </div>
        <div className={`w-50 text-wrap d-flex flex-column`}>
          <span className="fs-5 text-break mb-4">
            <strong>{product?.productName}</strong>
          </span>
          <FormControl className={"w-50"}>
            <InputLabel id="demo-simple-select-label">Màu sắc</InputLabel>
            <Select
              size="small"
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
        <div className="w-25 flex-column d-flex align-items-center">
          <div
            className={`d-flex justify-content-center mb-2 ${styles.counterButton}`}
          >
            <button
              type="button"
              className={`btn btn-outline-dark ${styles.counterButton}`}
              onClick={handleMinus}
            >
              -
            </button>
            <input
              type="text"
              readOnly
              className={`w-25 rounded border-secondary ${styles.countInput}`}
              value={count}
            />
            <button
              type="button"
              className={`btn btn-outline-dark ${styles.counterButton}`}
              onClick={handleAdd}
            >
              +
            </button>
          </div>
          <Button
            color="inherit"
            variant="text"
            startIcon={<FontAwesomeIcon icon="trash" />}
            onClick={handleDeleteFromCart}
          >
            Xóa
          </Button>
        </div>

        <div className={`w-25 text-wrap`}>
          {product?.saleOff > 0 ? (
            <>
              <p className="text-break text-danger fw-bold text-end">
                {calculatePayMoney(product?.price, product?.saleOff, count)}
              </p>
              <p className="text-break text-muted text-end">
                <s>{moneyConvert(product?.price, count)}</s>
              </p>
            </>
          ) : (
            <p className="text-break text-danger fw-bold text-end">
              {moneyConvert(product?.price, count)}
            </p>
          )}
        </div>
      </div>
      <Divider color="black" sx={{ marginY: 3 }} />
    </>
  )
}

export default ProductMini
