import ApiConfig from "config/ApiConfig"
import { all, call, put, takeLatest } from "redux-saga/effects"
import ApiUtil from "../../util/ApiUtil"
import { ProductActions } from "./ProductRedux"

export function* watchProductSaga() {
  console.log('watchProductSaga')
  yield all([
    takeLatest(ProductActions.getAllCategoryRequest.type, handleGetCategory),
    takeLatest(ProductActions.getProductHomePageRequest.type, handleProductHomePage),
    takeLatest(ProductActions.getProductWithOptionRequest.type, handleProductWithOption),
    takeLatest(ProductActions.getProductDetailRequest.type, handleDetailRequest),
    takeLatest(ProductActions.getProductCompareRequest.type, handleCompareRequest),
    takeLatest(ProductActions.buyProductRequest.type, handleBuyProductRequest),
    takeLatest(ProductActions.getProductByCateRequest.type, handleProductListByCate),
    takeLatest(ProductActions.searchProductRequest.type, handleSearchProduct),
    takeLatest(ProductActions.getSuggestSearchRequest.type, handleProductListByCate),
  ])
}

function* handleGetCategory(action) {
  try {
    const api = () => ApiUtil.fetch(ApiConfig.GET_ALL_CATE, { method: "GET" })
    const response = yield call(api)
    yield put(ProductActions.getAllCategorySuccess(response?.data))
  } catch (error) {
    console.log("error", error)
  }
}

function* handleProductHomePage(action) {
  try {
    const api = () => ApiUtil.fetch(ApiConfig.PRODUCT_HOME_PAGE, { method: "GET" })
    const response = yield call(api)
    yield put(ProductActions.getProductHomePageSuccess(response?.data))
  } catch (error) {
    console.log("error", error)
  }
}

function* handleProductWithOption(action) {
  try {
    const api = () => ApiUtil.fetch(ApiConfig.PRODUCT_WITH_OPTION + action.payload, { method: "GET" })
    const response = yield call(api)
    console.log("test response", response)
  } catch (error) {
    console.log("error", error)
  }
}

function* handleCompareRequest(action) {
  try {
    const api = () => ApiUtil.fetch(ApiConfig.PRODUCT_COMPARE, { method: "GET" })
    const response = yield call(api)
    console.log("test response", response)
  } catch (error) {
    console.log("error", error)
  }
}

function* handleDetailRequest(action) {
  try {
    const api = () => ApiUtil.fetch(ApiConfig.PRODUCT_DETAIL + action.payload, { method: "GET" })
    const response = yield call(api)
    yield put(ProductActions.getProductDetailSuccess(response?.data))
  } catch (error) {
    console.log("error", error)
  }
}

function* handleBuyProductRequest(action) {
  try {
    const { data, callback } = action.payload
    console.log({ action })
    const api = () => ApiUtil.fetch(ApiConfig.BUY_PRODUCT, { method: "POST", data })
    const response = yield call(api)
    console.log(response)
    const isValid = response?.code == 200
    callback && callback(isValid)
    // yield put(ProductActions.getProductDetailSuccess(response?.data))
  } catch (error) {
    console.log("error", error)
  }
}

function* handleProductListByCate(action) {
  const { categoryId } = action.payload
  try {
    const api = () => ApiUtil.fetch(ApiConfig.PRODUCT_BY_CATE + `?categoryId=${categoryId}&page=0&size=1&sort=string`, { method: "GET" })
    const response = yield call(api)
    yield put(ProductActions.getProductByCateSuccess(response?.data?.content))
  } catch (error) {
    console.log("error", error)
  }
}

function* handleSearchProduct(action) {
  const { params, callback } = action.payload
  try {
    const api = () =>
      ApiUtil.fetch(ApiConfig.SEARCH_PRODUCT, {
        method: "GET",
        params,
      })
    const response = yield call(api)
    const isSuccess = response?.code === 200
    callback && callback(response?.data)
  } catch (error) {
    console.log("error", error)
  }
}



