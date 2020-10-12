import axios from 'axios'

const url = 'https://api.unsplash.com/photos/'

export const getDataFetch = async ()=>{
 const {data} = await axios.get(url +'?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9')
 return data
}