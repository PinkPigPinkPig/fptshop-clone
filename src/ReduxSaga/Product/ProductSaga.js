import ApiConfig from "config/ApiConfig"
import { all, call, put, takeLatest } from "redux-saga/effects"
import ApiUtil from "../../util/ApiUtil"
import { ProductActions } from "./ProductRedux"

export function* watchProductSaga() {
  yield all[takeLatest(ProductActions.getTest.type, handleGetTest)]
}

function* handleGetTest(action) {
  try {
    const api = () => ApiUtil.fetch(ApiConfig.GET_ALL_CATE, { method: "GET" })
    const response = yield call(api)
    console.log("test response", response)
  } catch (error) {
    console.log("error", error)
  }
}
