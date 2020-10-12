import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider} from 'react-redux'
import store from './src/store/store'
import MainPage from './src/mainPage'
import PostPage from './src/postPage'
import { NativeRouter, Route, Redirect} from "react-router-native";






export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NativeRouter>
        <Route exact path='/' component={MainPage} />
        <Route path='/post/:id' component={PostPage}/>
        <Redirect  to='/' />
    </NativeRouter>
    </Provider>
  );
}


