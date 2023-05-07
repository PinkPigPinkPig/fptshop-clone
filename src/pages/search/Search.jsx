import { Box, Typography } from "@mui/material"
import ProductCard from "components/ProductCard"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { ProductActions } from "ReduxSaga/Product/ProductRedux"

const Search = () => {
  const [productList, setProductList] = useState([])

  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(
      ProductActions.searchProductRequest({
        params: {
          textSearch: "iphone",
        },
        callback: (res) => {
          console.log({ res })
          if (res?.content) {
            setProductList(res?.content)
          }
        },
      })
    )
  }, [])
  return (
    <Box>
      <Typography variant='h5'>
        Tìm thấy 13 kết quả với từ khóa "iphone 14"
      </Typography>
      <div className='mt-4 bg-light py-2'>
        <div className='row'>
          {productList &&
            productList?.map((item, index) => {
              return (
                <div className='col-3' key={index}>
                  <ProductCard
                    cate={item?.category?.routeKey}
                    routeKey={item?.productCode?.toLowerCase()}
                    id={item?.id}
                    price={item?.price}
                    name={item?.productName}
                    specification={item?.specification}
                    saleOff={item?.saleOff}
                  />
                </div>
              )
            })}
        </div>
      </div>
    </Box>
  )
}

export default Search
