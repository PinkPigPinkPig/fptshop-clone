import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Skeleton } from "@mui/material"
import ProductCard from "components/ProductCard"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ProductActions, productSelector } from "ReduxSaga/Product/ProductRedux"
import { PRODUCT_IMAGES } from "Themes/Image"
import ListCate from "./components/ListCate"
import { isEmpty } from "lodash"
import { CATE_TITLE } from "./helper"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./styles.css"

function Home() {
  const { productHomePage } = useSelector(productSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ProductActions.getProductHomePageRequest())
    dispatch(ProductActions.getAllCategoryRequest())
  }, [dispatch])

  useEffect(() => {
    if (!isEmpty(productHomePage)) {
    }
  }, [productHomePage])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
  }

  return (
    <div className="">
      {!isEmpty(productHomePage) ? (
        <div className="bg-light">
          <ListCate />
        </div>
      ) : (
        <Skeleton  variant="rectangular" height={60} />
      )}

      {!isEmpty(productHomePage) ?
        Object.keys(productHomePage)
          ?.sort(
            (a, b) =>
              productHomePage?.[b]?.length - productHomePage?.[a]?.length
          )
          ?.map((key, index) => {
            let total =
              productHomePage?.[key]?.length < 4
                ? productHomePage?.[key]?.length
                : 4
            return (
              <div className="mt-4 bg-light py-2">
                <span className="fs-4 fw-bold mx-4 mt-2">
                  {CATE_TITLE[key]}
                </span>
                <div className="row">
                  <Slider {...settings} slidesToShow={total}>
                    {productHomePage?.[key]?.map((item, index) => {
                      return (
                        <div className="col-3" key={index}>
                          <ProductCard
                            thumbnail={item?.thumbnail}
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
                  </Slider>
                </div>
              </div>
            )
          }) : <div className="mt-5"><Skeleton  variant="rectangular" height={300} /></div>}
    </div>
  )
}

export default Home
