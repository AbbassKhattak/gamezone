import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import Home from './screens/home';

import { AppLoading } from 'expo';


const getFonts =() => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });
}

export default function App() {

  const [fontsLoaded,setFontsLoaded] = useState(false);
  if(fontsLoaded){
    return (
      <Home/>
    );
  }
 else{
  return(
    <AppLoading 
       startAsync= {getFonts}
      onFinish={()=> setFontsLoaded(true)}
    />
 );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text:{
    fontFamily:'nunito-bold'
  }
});