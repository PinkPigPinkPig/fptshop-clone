import { Box, Button, Container, Stack, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import emptyCartImage from "../../../assets/images/empty-cart.png"

const EmptyCard = () => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate("/")
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingY: 5,
      }}
    >
      <Stack spacing={5} alignItems="center">
        <img
          src={emptyCartImage}
          alt=""
          className="img-fluid"
          style={{ width: "100px", height: "auto" }}
        />
        <Typography variant="h4" sx={{ margin: 0 }}>
          Không có sản phẩm trong giỏ hàng
        </Typography>
        <Button variant="contained" onClick={onClick}>
          Quay về trang chủ
        </Button>
      </Stack>
    </Box>
  )
}

export default EmptyCard
