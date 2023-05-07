import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import ProductMini from "components/ProductMini/ProductMini"
import React, { useEffect, useMemo, useState } from "react"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { moneyConvert } from "util/Ultilities"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { schema } from "./validate"
import { isEmpty } from "lodash"
import { ProductActions } from "ReduxSaga/Product/ProductRedux"
import { useDispatch } from "react-redux"
import OrderStatusModal from "./OrderStatusModal"
import { useNavigate } from "react-router-dom"
import { localStorageHelper } from "helpers"
import { LOCAL_STORE } from "constants/system"

const PurchaseProduct = ({ productList, onDelete }) => {
  const [totalMoney, setTotalMoney] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [productCartList, setProductCartList] = useState([])
  const [isDoneOrder, setIsDoneOrder] = useState(false)
  const [isOrderSuccess, setIsOrderSuccess] = useState(false)
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    control,
    getValues,
    formState: { errors },
    handleSubmit,
  } = methods
  const handleCalculateTotal = () => {}

  useEffect(() => {
    const result = productList.map((product) => {
      return {
        productId: product?.id,
        price: product?.price,
        saleOff: product?.saleOff,
        totalPurchase: 1,
      }
    })
    setProductCartList(result)
  }, [])

  useEffect(() => {
    if (!isEmpty(productCartList)) {
      let price = 0
      let sale = 0
      productCartList?.map((item) => {
        price += item?.price * item?.totalPurchase
        sale += ((item?.price * item?.saleOff) / 100) * item?.totalPurchase
      })
      setTotalMoney(price)
      setDiscount(sale)
    }
  }, [productCartList])

  const handleCloseOrderModal = () => {
    setIsDoneOrder(false)
    if(isOrderSuccess) {
      navigate('/')
      localStorageHelper.removeItem(LOCAL_STORE.CART)
    }
    setIsOrderSuccess(false)
  }

  const handleBuyProduct = () => {
    const formValue = getValues()
    const newArr = productCartList?.map((item) => {
      return {
        productId: item?.productId,
        totalPurchase: item?.totalPurchase,
      }
    })
    const data = {
      productIds: newArr,
      ...formValue,
      paymentMethod: "cash",
      customerId: 1,
    }
    console.log({ data })
    dispatch(
      ProductActions.buyProductRequest({
        data,
        callback: (isValid) => {
          setIsDoneOrder(true)
          setIsOrderSuccess(isValid)
          if(isValid) {
            localStorageHelper.removeItem(LOCAL_STORE.CART)
          }
        },
      })
    )
  }

  return (
    <>
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
              <ProductMini
                key={item?.id}
                product={item}
                onDelete={(id) => {
                  const newArr = productCartList?.filter(
                    (element) => element?.productId != id
                  )
                  setProductCartList([...newArr])
                  onDelete && onDelete()
                }}
                onCountChange={(id, count) => {
                  let product = {}
                  const newArr = productCartList?.filter((element) => {
                    if (element?.productId == id) {
                      product = element
                    }

                    return element?.productId != id
                  })
                  product.totalPurchase = count
                  setProductCartList([...newArr, product])
                }}
              />
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
            <Stack spacing={10} justifyContent="space-between" direction="row">
              <Stack spacing={2} direction="column">
                <Typography>Tổng tiền:</Typography>
                <Typography>Giảm:</Typography>
                <Typography className="fw-bold">Cần thanh toán:</Typography>
              </Stack>
              <Stack spacing={2} alignItems="flex-end" direction="column">
                <Typography>{moneyConvert(totalMoney)}</Typography>
                <Typography>{`- ${moneyConvert(discount)}`}</Typography>
                <Typography className="fw-bold" color="error">
                  {moneyConvert(totalMoney - discount)}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <div className="border-bottom border-dark my-4" />
        <Box>
          <FormProvider methods={methods}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="0" control={<Radio />} label="Anh" />
                <FormControlLabel value="1" control={<Radio />} label="Chị" />
              </RadioGroup>
              <Stack spacing={3}>
                <Stack direction="row" spacing={2}>
                  <Controller
                    control={control}
                    name="recipientName"
                    rules={{ required: true }}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                    }) => (
                      <TextField
                        // name={name}
                        placeholder="Nhập họ và tên"
                        size="small"
                        onBlur={onBlur} // notify when input is touched
                        onChange={onChange} // send value to hook form
                        error={!isEmpty(errors?.["recipientName"])}
                        helperText={errors?.["recipientName"]?.message}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="recipientPhone"
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      formState,
                    }) => (
                      <TextField
                        placeholder="Nhập số điện thoại"
                        size="small"
                        onBlur={onBlur} // notify when input is touched
                        onChange={onChange} // send value to hook form
                        error={!isEmpty(errors?.["recipientPhone"])}
                        helperText={errors?.["recipientPhone"]?.message}
                      />
                    )}
                  />
                </Stack>
                <Controller
                  control={control}
                  name="recipientAddress"
                  rules={{ required: true }}
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                  }) => (
                    <TextField
                      placeholder="Nhập địa chỉ"
                      size="small"
                      onBlur={onBlur} // notify when input is touched
                      onChange={onChange} // send value to hook form
                      error={!isEmpty(errors?.["recipientAddress"])}
                      helperText={errors?.["recipientAddress"]?.message}
                    />
                  )}
                />
              </Stack>
            </FormControl>
          </FormProvider>
        </Box>
        <div className="border-bottom border-dark my-4" />
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button
            size="large"
            color="error"
            variant="contained"
            sx={{ padding: 2, fontSize: 18 }}
            onClick={handleSubmit(handleBuyProduct, () => {
              console.log({ errors })
            })}
          >
            Hoàn tất đặt hàng
          </Button>
        </Box>
      </div>
      <OrderStatusModal visible={isDoneOrder} orderStatus={isOrderSuccess} onClose={handleCloseOrderModal}/>
    </>
  )
}

export default PurchaseProduct
