import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux';
import TodosItem from '../TodosItem/TodosItem'
const TodosList = ({todos,filter}) => {
    const [_todos,setTodos] = useState(todos)
    useEffect(() => {
        setTodos(todos)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todos])
    function renderTodosItem() {
        console.log('renderTodos')
        switch (filter) {
            case 'SHOW_COMPLETED':
                return mapTodos(_todos.filter((todo)=>todo.completed))
            case 'SHOW_ALL':
                return mapTodos(_todos)
            case 'SHOW_ACTIVE':
                return mapTodos(_todos.filter(todo => !todo.completed))
            default:
                return mapTodos(_todos)
        }
        
    }
    function mapTodos(todos) {
        return todos.map((todo) => {
            return <TodosItem id={todo._id} content={todo.content} completed={todo.completed} key={todo._id} />
        })
    }
    return (
        renderTodosItem()
    )
}
const mapStateToProps= state =>({
    todos:state.todos,
    filter:state.filter
})
export default connect(mapStateToProps)(TodosList)