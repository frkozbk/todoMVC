import instance from '../../axiosInstance'
import {  toast } from 'react-toastify';
export const fetchTodos = () => async (dispatch) => {
    try {
        const response = await instance.get('api/todo/getTodos')
        dispatch({
            type:"FETCH_TODOS",
            payload:response.data.todos
        })
    } catch (error) {
        toast.warn('😢😢😢,Something is wrong.')
    }
}
export const addTodo = (content) =>async (dispatch) => {
    try {
        const response = await instance.post('api/todo/createTodo',{content})
        
        dispatch({
            type: 'ADD_TODO',
            payload: response.data.todo
        })
        toast('🎈🎈🎈 Yeyy, Created new task.')
    } catch (error) {
        toast.warn('😢😢😢,Something is wrong.')
    }
    
}
export const deleteTodo = id =>dispatch => {
    try {
        instance.post('api/todo/deleteTodo', { id })
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        })
        toast.info('You deleted your task.')
    } catch (error) {
        toast.warn('😢😢😢,Something is wrong.')
    }
}
export const changeTodoContent = (id,content) =>async dispatch => {
    try {
        const response = await instance.post('api/todo/changeTodo', {id, content })
        dispatch({
            type: 'CHANGE_TODO_CONTENT',
            payload: response.data.todo
        })
        toast.info('You edited your task successfully.')
    } catch (error) {
        toast.warn('😢😢😢,Something is wrong.')
    }
    
}
export const toggleTodo= id => dispatch =>{
    try {
        instance.post('api/todo/toggleTodo', { id })
        dispatch({
            type: 'TOGGLE_TODO',
            payload: id
        })
    } catch (error) {
        toast.warn('😢😢😢,Something is wrong.')
    }
    
}