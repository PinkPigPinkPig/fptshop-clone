import { all, fork } from "redux-saga/effects";
import { watchProductSaga } from "./Product/ProductSaga";
import { watchRootSaga } from "./Root/RootSaga";

export default function* reduxSaga() {
  yield all([
    fork(watchRootSaga),
    fork(watchProductSaga),
  ])
}
