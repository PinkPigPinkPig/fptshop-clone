import reduxSaga from "ReduxSaga"
import { rootReducer } from "ReduxSaga/Root"
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { AnyAction, combineReducers, configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import { productReducer } from "ReduxSaga/Product"

const sagaMiddleware = createSagaMiddleware()

const reducers = {
    root: rootReducer,
    product: productReducer,
}

const logger = createLogger({
  // ...options
})

const rootsReducer = combineReducers(reducers)

export const store = configureStore({
  reducer: rootsReducer,
  middleware: new MiddlewareArray().concat(sagaMiddleware, logger),
})

sagaMiddleware.run(reduxSaga)


