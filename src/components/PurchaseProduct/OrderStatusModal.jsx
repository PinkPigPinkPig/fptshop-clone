import React from "react"
import { Box, Button, Modal, Stack, Typography } from "@mui/material"
import successImage from "../../assets/images/success.png"
import failImage from "../../assets/images/fail_buy.jpg"
import { useNavigate } from "react-router-dom"

const OrderStatusModal = ({ visible, orderStatus, onClose }) => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate("/")
  }
  return (
    <Modal
      open={visible}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack spacing={5} alignItems="center">
          <img
            src={orderStatus ? successImage : failImage}
            alt=""
            className="img-fluid"
            style={{ width: "100px", height: "auto" }}
          />
          <Typography variant="h6" sx={{ margin: 0 }}>
            {`Đặt hàng ${orderStatus ? "Thành công" : "Thất bại"}`}
          </Typography>
          <Button variant="contained" onClick={onClick}>
            Quay về trang chủ
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}

export default OrderStatusModal

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FFF",
  boxShadow: 24,
  p: 4,
}
