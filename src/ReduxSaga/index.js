import { all, fork } from "redux-saga/effects";
import { watchProductSaga } from "./Product/ProductSaga";
import { watchRootSaga } from "./Root/RootSaga";

export * from './Root'
export * from './Product'

export default function* reduxSaga() {
  console.log('vao day roi reduxSaga')
  yield all([
    fork(watchRootSaga),
    fork(watchProductSaga),
  ])
}
