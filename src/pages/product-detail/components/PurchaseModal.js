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

const fake = [
  {
    id: 9,
    status: true,
    createdTime: 1681735720.971841,
    updatedTime: 1681735720.971841,
    createdBy: null,
    updatedBy: null,
    modelSeries: "IP14_MINI",
    productCode: "IP14",
    productName: "Điện thoại Iphone 14 mini",
    totalProduct: 100,
    price: 23000000,
    thumbnail: null,
    description:
      "Đây là điện thoại Iphone 14 mini. Thực hiện edit thêm thông tin phần description này",
    specification: {
      brand: "Iphone",
      timeRelease: [2013, 4, 17],
      origin: "Mỹ",
      warranty: "12 tháng",
      userManual: "Xem trong sách hướng dẫn sử dụng",
      storageInstruction: "Để nơi khô ráo, nhẹ tay, dễ vỡ",
      phoneWeight: "206g",
      cpu: "Apple A16 bionic",
      core: "6",
      cpuClock: "2.4Ghz*4",
      rom: "256GB",
      ram: "8GB",
      screenSize: "6.1 inch",
      screenTech: "Super Retina XDR",
      resolution: "2556 x 1179 Pixels",
      standardScreen: "QHD+",
      frequencyScreen: "120HZ",
      surfaceGlass: "Gorilla Glass Victus",
      touchType: "Điện dung đa điểm",
      maxBrightness: "2500 nits",
      gpu: "GPU-1 Iphone 14 mini",
      cameras: [
        {
          cameraType: "FRONT",
          cameraLabel: "Single camera",
          cameraResolution: "12MP",
          cameraAperture: "Khẩu độ f/1.6",
          cameraFeatures: [
            {
              featureContent:
                "Đây là thông tin giới thiệu tính năng camera thứ nhất",
            },
            {
              featureContent:
                "Đây là thông tin giới thiệu tính năng camera thứ hai",
            },
          ],
          videos: [
            {
              videoResolution: "4K",
              videoFps: "60fps",
            },
            {
              videoResolution: "FullHD",
              videoFps: "240fps",
            },
          ],
        },
        {
          cameraType: "BACK",
          cameraLabel: "Ultrawide",
          cameraResolution: "50MP",
          cameraAperture: "Khẩu độ f/1.8",
          cameraFeatures: [
            {
              featureContent:
                "Đây là thông tin giới thiệu tính năng camera thứ nhất",
            },
            {
              featureContent:
                "Đây là thông tin giới thiệu tính năng camera thứ hai",
            },
          ],
          videos: [
            {
              videoResolution: "4K",
              videoFps: "60fps",
            },
            {
              videoResolution: "FullHD",
              videoFps: "240fps",
            },
          ],
        },
      ],
      features: [
        {
          featureContent:
            "Đây là thông tin giơi thiệu tính năng sản phẩm thứ nhất",
        },
        {
          featureContent:
            "Đây là thông tin giơi thiệu tính năng sản phẩm thứ hai",
        },
      ],
      sensors: [
        {
          sensorContent: "Cảm biến ánh sáng",
        },
        {
          sensorContent: "Cảm biến vân tay",
        },
      ],
      communicationConnectingList: [
        {
          communicationLabel: "Số khe sim",
          communicationContent: "1",
        },
        {
          communicationLabel: "Loại sim",
          communicationContent: "2 Nano SIM hoặc 1 eSIM, 1 Nano SIM",
        },
        {
          communicationLabel: "Bluetooth",
          communicationContent: "V5.3",
        },
        {
          communicationLabel: "Hỗ trợ mạng",
          communicationContent: "4G, 5G",
        },
      ],
      batteryType: "Lion",
      battery: "3800mAh",
      isFastCharging: false,
      osName: "IOS",
      osVersion: "IOS 14.0",
    },
    rating: 8.5,
    saleOff: 20,
    timeStartSaleOff: [2023, 4, 17, 12, 48, 40, 952848000],
    timeEndSaleOff: [2023, 4, 27, 12, 48, 40, 952848000],
    stopSelling: false,
    category: {
      id: 1,
      status: true,
      createdTime: 1681735720.782096,
      updatedTime: 1681735720.872848,
      createdBy: null,
      updatedBy: null,
      categoryCode: "DT",
      categoryName: "Điện thoại",
      parentId: null,
      thumbnail:
        "https://locng.blob.core.windows.net/selling/img-dienthoai-desk.webp",
      routeKey: "dt",
    },
    brand: {
      id: 1,
      status: true,
      createdTime: 1681732980.476527,
      updatedTime: 1681735359.737999,
      createdBy: null,
      updatedBy: null,
      brandCode: "APPLE",
      brandName: "Apple",
      phoneNumber: "0123456789",
      email: "Apple@support.com",
      logo: "https://locng.blob.core.windows.net/selling/img-dienthoai-desk.webp",
    },
    promotions: [],
    images: null,
  },
]
