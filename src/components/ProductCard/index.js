import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import { PRODUCT_IMAGES } from "Themes/Image"
import { PriceBar } from "./PriceBar"
import styles from "./ProductCard.module.scss"

const ProductCard = ({ name, image, price, discount, configuration }) => {
  return (
    <div className={`${styles.productCard} bg-light p-3`}>
      <div className='w-100 d-flex justify-content-center p-3'>
        <Link to='#'>
          <img
            src={PRODUCT_IMAGES.iphone13}
            className={`img-fluid ${styles.img}`}
            alt=''
          />
        </Link>
      </div>
      <div>
        <p className='fs-5 fw-bold'>iPhone 13 128GB</p>
        <div className="mb-3">
          <PriceBar />
        </div>
        <div className='d-flex flex-wrap fs-6 text-black-50 mb-3'>
          <div className="me-2">
            <FontAwesomeIcon icon='microchip' />
            <span className="ms-1">Apple A15 Bionic</span>
          </div>
          <div className="me-2">
            <FontAwesomeIcon icon='mobile' />
            <span className="ms-1">6.1 inch</span>
          </div>
          <div className="me-2">
            <FontAwesomeIcon icon='gear' />
            <span className="ms-1">4 GB</span>
          </div>
          <div className="me-2">
            <FontAwesomeIcon icon='floppy-disk' />
            <span className="ms-1">128 GB</span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <Button variant='contained'>MUA NGAY</Button>
          <Button variant='contained'>SO SÁNH</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
