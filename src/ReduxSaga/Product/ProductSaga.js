import ApiConfig from "config/ApiConfig"
import { all, call, put, takeLatest } from "redux-saga/effects"
import ApiUtil from "../../util/ApiUtil"
import { ProductActions } from "./ProductRedux"

export function* watchProductSaga() {
  console.log('watchProductSaga')
  yield all([
    takeLatest(ProductActions.getSearchProductFailed.type, handleSearchProduct),
    takeLatest(ProductActions.getAllCategoryRequest.type, handleGetCategory),
    takeLatest(ProductActions.getProductHomePageRequest.type, handleProductHomePage),
    takeLatest(ProductActions.getProductWithOptionRequest.type, handleProductWithOption),
    takeLatest(ProductActions.getProductDetailRequest.type, handleDetailRequest),
    takeLatest(ProductActions.getProductCompareRequest.type, handleCompareRequest),
    takeLatest(ProductActions.buyProductRequest.type, handleBuyProductRequest),
  ])
}

function* handleSearchProduct(action) {
  try {
    console.log('vao test roi')
    const api = () => ApiUtil.fetch(ApiConfig.SEACRCH_PRODUCT + action.payload, { method: "GET" })
    const response = yield call(api)

  } catch (error) {
    console.log("error", error)
  }
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
    console.log({action})
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



