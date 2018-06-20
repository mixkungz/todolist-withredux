import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { reducers } from './reducers'

const middleware = [reduxThunk]

export const store = createStore(reducers,middleware)