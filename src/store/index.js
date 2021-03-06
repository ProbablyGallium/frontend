import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import * as Sentry from '@sentry/react'
import rootReducer from 'reducers/index'

import history from './history'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sentryReduxEnhancer = Sentry.createReduxEnhancer()

const store = createStore(
  connectRouter(history)(
    combineReducers({ root: rootReducer, router: connectRouter(history) })
  ),
  composeEnhancer(applyMiddleware(routerMiddleware(history)))
)
export default store
