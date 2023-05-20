import React, { useEffect, useState } from "react"
import phoneImg from "../../../assets/images/product-detail/product_img.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"
import { productSelector } from "ReduxSaga/Product/ProductRedux"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { isEmpty } from "lodash"

const ProductPreview = () => {
  const { productDetail } = useSelector(productSelector)
  const specification = productDetail?.specification
  const [imageList, setImageList] = useState([phoneImg, phoneImg, phoneImg])

  useEffect(() => {
    if (!isEmpty(productDetail)) {
      const { images } = productDetail
      if (images) {
        const data = images?.map((item) => item?.imageLink)
        setImageList(data)
      }
    }
  }, [productDetail])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  }

  return (
    <div className="col-6">
      <div className="w-100 mb-5">
        <Slider {...settings}>
          {imageList?.map((img, index) => {
            return (
              <img
                key={index}
                src={img}
                alt=""
                className="object-fit-contain"
                height={424}
              />
            )
          })}
        </Slider>
      </div>
      {/* <img src={phoneImg} alt="" className="mb-3 w-100" /> */}
      <div className="d-flex flex-column bg-light p-3 ">
        <div className="mb-3">
          <FontAwesomeIcon icon="mobile" className="me-1" />
          <span>
            {`${specification?.screenSize}, ${specification?.screenTech}, ${specification?.resolution}`}
          </span>
        </div>
        {/* <div className="mb-3">
          <FontAwesomeIcon icon="camera" className="me-1" />
          {specification?.cameras
            ?.filter((res) => res.cameraType === "FRONT")
            ?.map((cam, i) => {
              return (
                <span key={i}>{`${i === 0 ? "" : " + "} ${
                  cam?.cameraResolution
                }`}</span>
              )
            })}
        </div>
        <div className="mb-3">
          <FontAwesomeIcon icon="camera-rotate" className="me-1" />
          {specification?.cameras
            ?.filter((res) => res.cameraType === "BACK")
            ?.map((cam, i) => {
              return (
                <span key={i}>{`${i === 0 ? "" : " + "} ${
                  cam?.cameraResolution
                }`}</span>
              )
            })}
        </div> */}
        <div className="mb-3">
          <FontAwesomeIcon icon="microchip" className="me-1" />
          <span>{specification?.cpu}</span>
        </div>
        <div>
          <FontAwesomeIcon icon="floppy-disk" className="me-1" />
          <span>{specification?.rom}</span>
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
      {/* <div className="d-flex flex-column bg-light p-3 "></div> */}
    </div>
  )
}

export default ProductPreview
