import React, {useEffect, useState} from 'react';
import {Text, View ,Image, ActivityIndicator,ScrollView ,SafeAreaView } from 'react-native';
import {getDataThunk} from '../store/photos/thunks'
import { dataStateSelector} from '../store/photos/selector'
import {useDispatch, useSelector} from 'react-redux'
import {  Link } from "react-router-native";


const ImageOfMain=({item})=>{
    return(
        <View>
             <Link to={'/post/'+item.id}>
        <Image
                    style={{alignSelf: 'stretch',  height: 250}}
        source={{uri: item.urls.regular}}
      />
        </Link>
      <View  style={{bottom:0,position:"absolute",alignSelf: 'stretch', backgroundColor:'rgba(0,0,0,0.3)'}}>
        <Text style={{color:'white'}}>Author: {item.user.first_name} {item.user.last_name}</Text>
        </View>
        </View>
    )
}


const MainPage=()=>{
    const [isLoding, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDataThunk(setLoading))
    }, []);
    const data = useSelector(dataStateSelector)
    const click=()=>{
        console.log(data[0]?.urls.small)
    }
    return(
        <SafeAreaView >
        <ScrollView  >
            {isLoding?
            <ActivityIndicator size="large" color="#00ff00" />
            :
            <>
                    {data?.map(item=>{
                        return <ImageOfMain item={item} key={item.id}/>
                    })}
      </>
      }
        </ScrollView >
        </SafeAreaView>
    )
}



export default MainPage