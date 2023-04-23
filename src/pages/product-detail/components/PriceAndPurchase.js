import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Modal } from "@mui/material"
import styles from "../productDetail.module.scss"
import PurchaseModal from "./PurchaseModal"
import { useSelector } from "react-redux"
import { productSelector } from "ReduxSaga/Product/ProductRedux"
import { moneyConvert } from "util/Ultilities"
import { localStorageHelper } from "helpers"
import { LOCAL_STORE } from "constants/system"

const PriceAndPurchase = ({ product }) => {
  const { productDetail } = useSelector(productSelector)
  const [open, setOpen] = useState(false)
  const specification = productDetail?.specification
  const handleClose = () => {
    setOpen(false)
  }

  const handleClickBuyNow = async () => {
    setOpen(true)
    let data = JSON.parse(localStorageHelper.getItem(LOCAL_STORE.CART))
    if (!data) {
      data = []
    }
    if (data?.every((item) => item?.id != product?.id)) {
      data.push(product)
    }
    await localStorageHelper.setItem(LOCAL_STORE.CART, JSON.stringify(data))
    setOpen(true)
  }

  const createData = (field, value) => {
    return { field, value }
  }

  const row = [
    createData('Màn hình', `${specification?.screenSize}, ${specification?.screenTech}, ${specification?.resolution}`),
    createData('Camera sau', specification?.cameras?.[1]?.cameraResolution),
    createData('Camera Selfie', specification?.cameras?.[0]?.cameraResolution),
    createData('Bộ nhớ trong', '128gb'),
    createData('CPU', specification?.cpu),
    createData('Dung lượng pin', specification?.battery),
    createData('Thẻ sim'),
    createData('Hệ điều hành', specification?.osName),
    createData('Xuất xứ', specification?.origin),
    createData('Thời gian ra mắt',new Date(specification?.timeRelease)),
  ]
console.log('row: ', row);
  return (
    <div className="col">
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row my-3">
          <span className="display-6 me-3 text-danger">
            <strong>
              {moneyConvert(
                productDetail?.price -
                  (productDetail?.price * productDetail?.saleOff) / 100
              )}
            </strong>
          </span>
          <span className="align-self-end text-secondary text-decoration-line-through">
            {moneyConvert(productDetail?.price)}
          </span>
        </div>
        <div className="d-flex flex-column my-3">
          <span>Trả góp chỉ từ </span>
          <span className="">
            <strong>{moneyConvert(productDetail?.price * 0.09)}</strong>/tháng
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
          <span>Thu cũ đổi mới trợ giá ngay 15% đến 2 triệu (MintPro)</span>
        </div>
        <div className="mb-3">
          <FontAwesomeIcon
            icon="circle-check"
            className="me-1"
            color="#48bb78"
          />
          <span>
            Giảm đến 20% gói bảo hành rơi vỡ/ Gia hạn 12 tháng khi mua kèm máy
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
        onClick={handleClickBuyNow}
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
          <span className="text-capitalize">Duyệt nhanh qua điện thoại</span>
        </Button>
        <Button
          variant="contained"
          className={`${styles.buttonHeight} ${styles.buttonWidth} d-flex flex-column`}
        >
          <span className="fs-4">TRẢ GÓP QUA THẺ</span>
          <span className="text-capitalize">Visa/ Master Card</span>
        </Button>
        {open && <PurchaseModal visible={open} onClose={handleClose} />}
      </div>
      <div className="d-flex flex-column bg-light p-3 my-3">
        <div>
          <p>Thông số kỹ thuật</p>
        </div>
      </div>
    </div>
  )
}

export default PriceAndPurchase
