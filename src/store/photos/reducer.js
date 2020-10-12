import actionTypes from './actionTypes'

const InitialState =()=>{
    return{
        data:[]
    }
}

const photosReducer = (state=InitialState(), action)=>{
    switch(action.type){
        case actionTypes.GET_DATA:
            return{
                ...state,
                data:action.payload
            }
    default: 
            return state;
    }
}


export default photosReducer