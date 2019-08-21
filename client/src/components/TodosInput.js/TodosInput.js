import React,{useState,useRef} from 'react'
import {connect} from 'react-redux'

import useOutsideClick from '../../hooks/useOutsideClick'

// Import actions
import {addTodo} from '../../redux/todos/todo.actions'

import './TodosInput.scss'

const TodosInput = ({ addTodo}) => {
    const [input,setInput] = useState('');
    const inputEl=useRef(null);
    useOutsideClick(inputEl, () => {
        inputEl.current.blur();
        setInput('');
    })
    function handleInput(e){
        setInput(e.target.value)
    }
    function handleKeyPress(e) {
        if(e.key==='Enter'){
            if(input.length<=3) return;
            addTodo(input);
            setInput('');
            inputEl.current.blur();
        }
    }
    return (
    <div className="addtodo_container">
        <div className="addtodo_icon" style={{color:`${input.length ===0 ? '#eee' : 'black' }`}} >✔</div>
        <input 
            type="text" 
            placeholder="What will you do?"
            value={input}
            onChange={handleInput}
            className="addtodo_input"
            onKeyPress={handleKeyPress}
            ref={inputEl}
            />
    </div>
)}
export default connect(null,{addTodo})(TodosInput);