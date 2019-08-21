import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../redux/rootReducer'


const middlewares= [thunk]



export default createStore(rootReducer, {}, applyMiddleware(...middlewares)
)