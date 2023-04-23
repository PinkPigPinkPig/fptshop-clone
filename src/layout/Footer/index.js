import React from "react"
import styles from "./Footer.module.scss"
import { Box, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import certificateImg from "../../assets/images/icon_bocongthuong.png"
import cer1Img from "../../assets/images/cer1.png"
import cer2Img from "../../assets/images/cer2.png"
import cer3Img from "../../assets/images/cer3.png"
const cerImg = [cer1Img, cer2Img, cer3Img]
const consultList = [
  {
    title: "Tư vấn mua hàng (Miễn phí)",
    phone: "1800 6601",
  },
  {
    title: "Hỗ trợ kỹ thuật",
    phone: "1800 6601",
  },
  {
    title: "Góp ý, khiếu nại (8h00 - 22h00)",
    phone: "1800 6616",
  },
]
export const Footer = () => {
  return (
    <div className={`container-fluid px-0 bottom-0 ${styles.appFooter}`}>
      <div className="container bg-light py-5">
        <Stack direction="row" justifyContent="space-between">
          <Stack spacing={2}>
            <Link to="#">Giới thiệu về công ty</Link>
            <Link to="#">Chính sách bảo mật</Link>
            <Link to="#">Quy chế hoạt động</Link>
            <Link to="#">Kiểm tra hóa đơn điện tử</Link>
            <Link to="#">Tra cứu thông tin bảo hành</Link>
            <Link to="#">Câu hỏi thường gặp mua hàng</Link>
            <img src={certificateImg} alt="" />
          </Stack>
          <Stack spacing={2}>
            <Link to="#">Tin tuyển dụng</Link>
            <Link to="#">Tin khuyến mãi</Link>
            <Link to="#">Hướng dẫn mua online</Link>
            <Link to="#">Hướng dẫn mua trả góp</Link>
            <Link to="#">Chính sách trả góp</Link>
            <Typography className="fw-bold mt-5">Chứng nhận:</Typography>
            <Stack direction="row">
              {cerImg.map((item, index) => (
                <img key={index} src={item} alt="" style={{ maxWidth: "56px" }} />
              ))}
            </Stack>
          </Stack>
          <Stack spacing={2}>
            <Link to="#">Hệ thống cửa hàng</Link>
            <Link to="#">Chính sách đổi trả</Link>
            <Link to="#">Hệ thống bảo hành</Link>
            <Link to="#">Giới thiệu máy đổi trả</Link>
          </Stack>
          <Stack spacing={2}>
            {consultList.map((item, index) => {
              return (
                <Box key={index}>
                  <Typography className="fw-bold">{item?.title}</Typography>
                  <Typography variant="h5" className="fw-bold text-danger">{item?.phone}</Typography>
                </Box>
              )
            })}
          </Stack>
        </Stack>
      </div>
    </div>
  )
}
