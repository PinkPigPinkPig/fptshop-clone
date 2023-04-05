import reduxSaga from "ReduxSaga"
import { rootReducer } from "ReduxSaga/Root"
import createSagaMiddleware from 'redux-saga'
import { AnyAction, combineReducers, configureStore, MiddlewareArray } from '@reduxjs/toolkit'

const sagaMiddleware = createSagaMiddleware()

const reducers = {
    root: rootReducer,
}

const rootsReducer = combineReducers(reducers)

export const store = configureStore({
  reducer: rootsReducer,
  middleware: new MiddlewareArray().concat(sagaMiddleware, logger),
})

sagaMiddleware.run(reduxSaga)


