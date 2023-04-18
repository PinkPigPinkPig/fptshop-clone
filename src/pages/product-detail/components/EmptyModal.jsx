import { Button, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

const EmptyModal = () => {
  const navigate = useNavigate()
  const handleClickContinue = () => {
    navigate("/")
  }
  return (
    <div className="d-flex flex-column align-items-center py-5">
      <Typography variant="h5" className="fw-bold" mb={3}>
        Chưa có sản phẩm nào trong giỏ hàng
      </Typography>
      <Button
        size="large"
        color="error"
        variant="contained"
        onClick={handleClickContinue}
      >
        Tiếp tục mua săm
      </Button>
    </div>
  )
}

export default EmptyModal
