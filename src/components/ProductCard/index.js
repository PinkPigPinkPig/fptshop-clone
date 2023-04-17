import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Grid, Stack } from "@mui/material"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { PRODUCT_IMAGES } from "Themes/Image"
import { PriceBar } from "./PriceBar"
import styles from "./ProductCard.module.scss"

const ProductCard = ({
  name,
  image,
  price,
  discount,
  configuration,
  specification,
  saleOff,
  id,
  cate,
  routeKey,
}) => {
  const navigate = useNavigate()
  const { cpu, screenSize, ram, rom, cpuClock } = specification
  const handleClickBuyNow = () => {
    navigate(`/product-detail/${cate}/${routeKey}`, {
      state: {
        id: id,
      },
    })
  }
  return (
    <div className={`${styles.productCard} bg-light p-3`}>
      <div className="w-100 d-flex justify-content-center p-3">
        <Link to={`/product-detail/${cate}/${routeKey}`} state={{ id: id }}>
          <img
            src={PRODUCT_IMAGES.iphone13}
            className={`img-fluid ${styles.img}`}
            alt=""
          />
        </Link>
      </div>
      <div>
        <p className="fs-5 fw-bold">{name}</p>
        <div className="mb-3">
          <PriceBar price={price} saleOff={saleOff} />
        </div>
        <div className="d-flex flex-wrap fs-6 text-black-50 mb-3">
          <div className="me-2">
            <FontAwesomeIcon icon="microchip" />
            <span className="ms-1">{cpu}</span>
          </div>
          <div className="me-2">
            <FontAwesomeIcon icon="mobile" />
            <span className="ms-1">{screenSize}</span>
          </div>
          <div className="me-2">
            <FontAwesomeIcon icon="gear" />
            <span className="ms-1">{cpuClock}</span>
          </div>
          <div className="me-2">
            <FontAwesomeIcon icon="floppy-disk" />
            <span className="ms-1">{ram}</span>
          </div>
        </div>

        <Stack spacing={2} direction="row" justifyContent="center">
          <Button
            fullWidth
            variant="contained"
            color="success"
            onClick={handleClickBuyNow}
          >
            MUA NGAY
          </Button>

          <Button fullWidth variant="contained">
            SO SÁNH
          </Button>
        </Stack>
      </div>
    </div>
  )
}

export default ProductCard
