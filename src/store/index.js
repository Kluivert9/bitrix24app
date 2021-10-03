import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as rootReducer from './reducers'

const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk))

export default store
