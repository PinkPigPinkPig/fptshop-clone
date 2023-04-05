import { watchRootSaga } from "./Root/RootSaga";

export default function* reduxSaga() {
  yield all([fork(watchRootSaga)])
}
