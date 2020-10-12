import {getDataFetch} from '../../api/api_photos/photos.api'
import {getDataAction}  from './actions'

export const getDataThunk = (setLoading) =>{
    return async(dispatch)=>{
        try{
            setLoading(true)
            const data = await (getDataFetch())
            console.log(data)
            dispatch(getDataAction(data))
        }
        catch{
            console.log(e)
        }
        setLoading(false)
    }
}