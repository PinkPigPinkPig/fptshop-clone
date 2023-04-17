import React from "react"
import styles from "./ProductMini.module.scss"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import phoneImg from "../../assets/images/product-detail/product_img.webp"
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material"

const ProductMini = () => {
  const [color, setColor] = useState(10)
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='d-flex flex-row mb-3'>
        <div className={`w-25 text-wrap me-2`}>
          <img
            src={phoneImg}
            alt=''
            className={`img-fluid ${styles.miniImage}`}
          />
        </div>
        <div className={`w-50 text-wrap d-flex flex-column`}>
          <span className='fs-5 text-break mb-4'>
            <strong>Samsung Galaxy S74</strong>
          </span>
          <FormControl className={"w-50"}>
            <InputLabel id='demo-simple-select-label'>Màu sắc</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={color}
              label='Màu sắc'
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
            type='button'
            className={`${styles.counterButton} btn btn-primary`}
          >
            -
          </button>
          <input
            type='text'
            readonly=''
            className={`${styles.countInput}`}
            value='3'
          />
          <button
            type='button'
            className={`${styles.counterButton} btn btn-primary`}
          >
            +
          </button>
        </div>
        <div className={`w-25 text-wrap`}>
          <span className='text-break'>
            egeuiaeiuwgiuegsdjflksdjflksjdiquwgeiuqgweiu
          </span>
        </div>
      </div>
      <Divider color='black' sx={{marginY: 3}} />
    </>
  )
}

export default ProductMini
