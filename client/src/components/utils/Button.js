import React from 'react'
import {connect} from 'react-redux'
import './Button.scss'

const Button = ({name,action,filterName,filter}) => {
    console.log(filter,filterName)
    return (
        <button 
            onClick={action} 
            className="button"
            style={{ color: `${filterName === filter ? '#03a9f4' : '#eee'}`}}
        >
        {name}
        </button>
    )
}
const mapStateToProps = state => ({
    filter:state.filter,
})
export default connect(mapStateToProps)(Button)
