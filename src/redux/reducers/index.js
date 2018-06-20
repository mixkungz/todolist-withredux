import { combineReducers } from 'redux'
import todoReducers from './todoReducer'

export const reducers = combineReducers({
    todos: todoReducers
})