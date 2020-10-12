import actionTypes from './actionTypes'

export const getDataAction = data=>{
    return{
        type:actionTypes.GET_DATA,
        payload: data
    }
}

