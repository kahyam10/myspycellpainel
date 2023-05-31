import { createStore, applyMiddleware} from 'redux';
import appReducer from './reducers';
import thunk from "redux-thunk"

const Store = createStore(appReducer, applyMiddleware(thunk))
    

export default Store;