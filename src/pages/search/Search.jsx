import { Box, Typography } from "@mui/material"
import ProductCard from "components/ProductCard"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { ProductActions } from "ReduxSaga/Product/ProductRedux"

const Search = () => {
  const [productList, setProductList] = useState([])
  const [searchText, setSearchText] = useState("")

  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    const searchText = location?.state?.searchText
    console.log(location)
    if (searchText) {
      setSearchText(searchText)
      dispatch(
        ProductActions.searchProductRequest({
          params: {
            textSearch: searchText,
          },
          callback: (res) => {
            console.log({ res })
            if (res?.content) {
              setProductList(res?.content)
            } else {
              setProductList([])
            }
          },
        })
      )
    } else {
      setProductList([])
    }
  }, [location])
  console.log(searchText)
  return (
    <Box>
      {productList?.length > 0 ? (
        <Typography variant="h5">
          Tìm thấy {productList?.length} kết quả với từ khóa "{searchText}"
        </Typography>
      ) : (
        <Typography variant="h5" sx={{ marginBottom: 30 }}>
          Không tìm thấy kết quả phù hợp
        </Typography>
      )}
      {productList?.length > 0 && (
        <div className="mt-4 bg-light py-2">
          <div className="row">
            {productList?.map((item, index) => {
              return (
                <div className="col-3" key={index}>
                  <ProductCard
                    thumbnail={item?.category?.thumbnail}
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
      )}
    </Box>
  )
}

export default Search
