import React,{useState,useRef,useEffect} from 'react'
import {connect} from 'react-redux'

import useOutsideClick from '../../hooks/useOutsideClick'

// Import Actions
import { deleteTodo, changeTodoContent, toggleTodo} from '../../redux/todos/todo.actions'


import './TodosItem.scss'
const TodosItem = (props) => {
    const { id:_id, content, completed, deleteTodo,
            toggleTodo, changeTodoContent 
        }= props
    const [editMode,setEditMode] = useState(false) 
    const [input,setInput] = useState(content)
    const inputEl =useRef(null)
    
    useEffect(() => {
        if(editMode){
            inputEl.current.focus()
        }
    },[editMode])
    useOutsideClick(inputEl,() => setEditMode(false))
    function handleOnChange(e) {
        setInput(e.target.value)
    }
    function handleDoubleClick(e) {
        setEditMode(true)
    }
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            if(input.length<= 3){
                return
            }
            setEditMode(false)
            changeTodoContent(_id, input)
        }

    }
    function handleDelete(){
        deleteTodo(_id)
    }
    function handleCheckBox(){
        toggleTodo(_id)
    }
    return (
    <div className="todos_item">
        <input type="checkbox" className="todos_item--checkbox" checked={completed} onChange={handleCheckBox}/>
        <div className="todos_item--container">
                {editMode ? (
                    <input
                        type="text"
                        value={input}
                        onChange={handleOnChange}
                        onKeyPress={handleKeyPress}
                        className="todos_item--input"
                        ref={inputEl}
                        on
                    />
                ) :
                (
                    <>
                    <p 
                        className="todos_item--label" 
                        onDoubleClick={handleDoubleClick}
                        style={{textDecoration:`${completed?'line-through' : 'none'}`}}
                    >
                    {input}
                    </p>
                    <button 
                        className="todos_item--delete"
                        onClick={()=>handleDelete()}
                    >
                    <span role="img" aria-label="cross">&#10060;</span>
                    </button>
                    </>
                    )}
        </div>
        
    </div>
)}
export default connect(
    null,
    { deleteTodo, changeTodoContent, toggleTodo})(TodosItem)