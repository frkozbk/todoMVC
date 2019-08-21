import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import Todos from './screens/Todos'

//  Import actions
import {fetchTodos} from './redux/todos/todo.actions'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss'


const options ={
  position:"bottom-right",
  autoClose:4000,
  hideProgressBar:false,
  newestOnTop:true,
  closeOnClick:true,
  rtl: false,
  pauseOnVisibilityChange:true,
  draggable:true,
  pauseOnHover:false,
}
const App =({fetchTodos}) => {
  
  useEffect( () =>{
    fetchTodos()
  },[fetchTodos])

  return (
    <>
    <Todos/>
    <ToastContainer {...options} />
    </>
    );
}


export default connect(
  null,
  {fetchTodos}
)(App);
