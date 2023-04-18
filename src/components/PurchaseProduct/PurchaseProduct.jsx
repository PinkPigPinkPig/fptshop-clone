import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import ProductMini from "components/ProductMini/ProductMini"
import React, { useState } from "react"

const PurchaseProduct = ({ productList, onDelete }) => {
  const [totalMoney, setTotalMoney] = useState(0)
  const [discount, setDisount] = useState(0)
  const [payment, setPayment] = useState(0)
  return (
    <div className="py-3 px-4">
      <div>
        <Typography variant="h5" className="fw-bold">
          Có {productList?.length} sản phẩm trong giỏ hàng
        </Typography>
        <div className="border-bottom border-dark my-4" />
      </div>
      <div>
        {productList?.map((item) => {
          return (
            <ProductMini key={item?.id} product={item} onDelete={onDelete} />
          )
        })}
      </div>
      <Stack justifyContent="space-between" direction="row">
        <Box>
          <Typography variant="h6" className="fw-bold mb-3">
            Mã giảm giá
          </Typography>
          <Stack spacing={1} direction="row">
            <TextField size="small" placeholder="Nhập mã giảm giá" />
            <Button size="small" color="error" variant="contained">
              Áp dụng
            </Button>
          </Stack>
        </Box>
        <Box>
          <Stack spacing={10} justifyContent='space-between' direction="row">
            <Stack spacing={2} direction="column">
              <Typography>Tổng tiền:</Typography>
              <Typography>Giảm:</Typography>
              <Typography className="fw-bold">Cần thanh toán:</Typography>
            </Stack>
            <Stack spacing={2} alignItems='flex-end' direction="column">
              <Typography>30.990.000đ</Typography>
              <Typography>-6.040.000đ</Typography>
              <Typography className="fw-bold" color='error'>24.950.000đ</Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <div className="border-bottom border-dark my-4" />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          size="large"
          color="error"
          variant="contained"
          sx={{ padding: 2, fontSize: 18 }}
          onClick={() => {}}
        >
          Hoàn tất đặt hàng
        </Button>
      </Box>
    </div>
  )
}

export default PurchaseProduct
