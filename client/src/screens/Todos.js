import React from 'react'
import TodosInput from '../components/TodosInput.js/TodosInput'
import TodosList from '../components/TodosList/TodosList'
import './Todos.scss'
import TodosFooter from '../components/TodosFooter/TodosFooter';
const Todos = (props) => (
    <>
        <h1 className="todos_header">Todos</h1>
        <div className="todos_container">
            <TodosInput/>
            <TodosList/>
            <TodosFooter/>
        </div>
        <p className="instructions">Double click to edit todo then press 'Enter' to save your todo.</p>
        <p className="instructions">Remember your task must have at least 3 characters.</p>
    </>
)
export default Todos