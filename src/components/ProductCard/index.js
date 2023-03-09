import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import { PRODUCT_IMAGES } from "Themes/Image"
import styles from './ProductCard.module.scss'

const ProductCard = ({ name, image, price, discount, configuration }) => {
  return (
    <div className={`${styles.productCard} bg-light`}>
      <div className="w-100 d-flex justify-content-center p-3">
        <Link to='#'>
          <img src={PRODUCT_IMAGES.iphone13} className={`img-fluid ${styles.img}`} alt='' />
        </Link>
      </div>
      <div>
        <p>iPhone 13 128GB</p>
        <div>
          <p>10.000.000đ</p>
          <p>10.000.000đ</p>
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon='microchip' />
            Apple A15 Bionic
          </span>
          <span>
            <FontAwesomeIcon icon='mobile' />
            6.1 inch
          </span>
          <span>
            <FontAwesomeIcon icon='gear' />4 GB
          </span>
          <span>
            <FontAwesomeIcon icon='floppy-disk' />
            128 GB
          </span>
        </div>
        <div>
          <Button variant='contained'>MUA NGAY</Button>
          <Button variant='contained'>SO SÁNH</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
