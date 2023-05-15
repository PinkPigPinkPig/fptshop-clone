import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@mui/material"
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
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="">
      <div className="bg-light">
        <ListCate />
      </div>

      {productHomePage &&
        Object.keys(productHomePage)
          ?.sort(
            (a, b) =>
              productHomePage?.[b]?.length - productHomePage?.[a]?.length
          )
          ?.map((key, index) => {
            return (
              <div className="mt-4 bg-light py-2">
                <span className="fs-4 fw-bold mx-4 mt-2">
                  {CATE_TITLE[key]}
                </span>
                <div className="row">
                  <Slider {...settings}>
                    {productHomePage?.[key]?.map((item, index) => {
                      return (
                        <div className="col-3" key={index}>
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
                  </Slider>
                </div>
              </div>
            )
          })}
    </div>
  )
}

export default Home
