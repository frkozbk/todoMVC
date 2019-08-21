import React from 'react'
import Button from '../utils/Button';
import {connect} from 'react-redux'

// Import actions
import {showActive,showCompleted,showAll} from '../../redux/filters/filter.actions'

import './TodosFooter.scss'

const TodosFooter = ({ showActive, showCompleted, showAll, numberOfUnCompleted }) => {

    return(
        <div className="todos_footer">
            <p>{numberOfUnCompleted} item left</p>
            <div className="todos_filter">
                <Button name="All" action={showAll}/>
                <Button name="Active" action={showActive}/>
                <Button name="Completed" action={showCompleted}/>
            </div>
        </div>
    )

}
const mapStateToProps = state => ({
    numberOfUnCompleted: state.todos ? state.todos.filter((todo)=>!todo.completed).length : 0
})
export default connect(
    mapStateToProps,
    {showActive,showCompleted,showAll}
    )(TodosFooter)