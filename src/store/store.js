import { combineReducers, createStore, applyMiddleware } from "redux";
import photosReducer from './photos/reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    photos:photosReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store