import React,{Component} from 'react';
import {View,Text,Image,ImageBackground} from 'react-native';

export default class App extends Component{
 render(){
  return(
    <View>
      
      <ImageBackground source={require('./images/zaitinlogo2.jpg')} style={{height:'100%',width:'100%'}}>
     </ImageBackground>
    </View>
  );
}

}