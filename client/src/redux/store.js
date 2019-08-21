import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../redux/rootReducer'


const middlewares= [thunk]



export default createStore(rootReducer,{},compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) )