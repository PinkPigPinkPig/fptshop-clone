import ProductCard from "components/ProductCard"
import ProductsFilter from "./components/ProductsFilter"
import styles from "./components/components.module.scss"
import ListOption from "./components/ListOption"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ProductActions, productSelector } from "ReduxSaga/Product/ProductRedux"
import { Pagination, Skeleton, Stack } from "@mui/material"
import { isEmpty } from "lodash"

const productList = [
  {
    label: "Hãng sản xuất",
    option: [
      "Samsung",
      "Xiaomi",
      "Asus",
      "Masstel",
      "Tecno",
      "Nokia",
      "Vivo",
      "Samsung",
    ],
  },
  {
    label: "Mức giá",
    option: [
      "Dưới 10 triệu",
      "Từ 10 - 15 triệu",
      "Từ 15 - 20 triệu",
      "Từ 20 - 20 triệu",
      "Trên 25 triệu",
    ],
  },
  {
    label: "Màn hình",
    option: ["Khoảng 13 inch", "Khoảng 14 inch", "Trên 15 inch"],
  },
  {
    label: "CPU",
    option: [
      "Intel celeron",
      "Intel pentium",
      "Intel core i3",
      "Intel core i5",
      "Intel core i7",
      "Intel core i9",
    ],
  },
]

function ListProduct(props) {
  const { productByCate } = useSelector(productSelector)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [tableData, setTableData] = useState({
    content: [],
    totalElements: 0,
    totalPages: 0,
  })
  const handleChange = (event, value) => {
    setPage(value)
    fetchProductList(value - 1)
  }

  const id = useMemo(() => {
    return location?.state?.id
  }, [location])

  useEffect(() => {
    if (!id) {
      navigate("/404")
    } else {
      fetchProductList(page - 1)
    }
  }, [id, navigate])

  const fetchProductList = (page) => {
    dispatch(
      ProductActions.getProductByCateRequest({
        params: {
          categoryId: id,
          page: page,
          size: 15,
        },
        callback: (res) => {
          if (res) {
            setTableData(res)
          }
        },
      })
    )
  }

  return (
    <div
      className={`container text-center p-5 my-5 bg-light rounded-3`}
      style={{ minWidth: "800px" }}
    >
      <div className="d-flex" style={{ minWidth: "800px" }}>
        <div className="col-3 ">
          {productList.map((item, index) => {
            return (
              <div className="py-2" key={index}>
                <ProductsFilter
                  key={index}
                  label={item.label}
                  option={item.option}
                  row={index !== 0 ? "2" : "3"}
                />
              </div>
            )
          })}
        </div>
        <div className={`row ${styles.productSection}`}>
          {/* <ListOption />
                    <div className={`row three-cols bg-white rounded-3`}>
                        {listProduct.map((item, index) => (
                            <div key={index} className={`col-4 my-2`}>
                                <ProductCard />
                            </div>
                        ))}
                    </div> */}

          {!isEmpty(tableData?.content)
            ? tableData?.content?.map((item, index) => {
                return (
                  <div className="col-4" key={index}>
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
              })
            : [1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="col-4">
                  <Skeleton variant="rectangular" height={300} />
                </div>
              ))}
          <Stack direction="row" justifyContent="center">
            <Pagination
              count={tableData?.totalPages}
              page={page}
              onChange={handleChange}
            />
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default ListProduct
