import {combineReducers} from 'redux'
import todos from './todos/todo.reducer'
import filter from './filters/filter.reducer'
export default combineReducers({
    todos,
    filter
})