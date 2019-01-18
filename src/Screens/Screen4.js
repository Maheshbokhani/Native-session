import React, {Component} from 'react';
import {StyleSheet,ScrollView,TouchableOpacity,Text,TextInput, View} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Page4 extends Component {
    render() {
        return (
        
        <ScrollView style={{backgroundColor:'lightyellow'}}>
      
          <View style={styles.container}>

            <View
              style={{
              marginTop:20,
              justifyContent: 'space-evenly',
              flexDirection:'row',
              backgroundColor: 'lightblue', }}>
       
             <TextInput  
               id="fullname"
               placeholder="Password"
               secureTextEntry={true}
               style={{fontSize:15,width:250,textAlign:'left',height: 45,backgroundColor:'lightblue', borderColor: 'blue', borderWidth: 1}} 
               maxLength = {50}
             />
            </View>


            <View
              style={{
              justifyContent: 'space-evenly',
              flexDirection:'row',
              backgroundColor: 'lightblue',}}>
       
            <TextInput  
              placeholder="Confirm Password"
              secureTextEntry={true}
              style={{marginTop:20,fontSize:15,width:250,textAlign:'left',height: 45,backgroundColor:'lightblue', borderColor: 'blue', borderWidth: 1}} 
              maxLength = {50}
            />
           </View>


           <TouchableOpacity
               style = {styles.reset}    
                onPress={() => Actions.popTo('screen2')}>

               <Text style = {styles.submitButtonText}> Done </Text>
             
            </TouchableOpacity>
      </View>
   </ScrollView>     
  )
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:100,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderColor: 'blue', borderWidth: 1,
    borderRadius:8,
    margin:20,

  },
  reset: {
      backgroundColor:'lightgreen',
      fontFamily: 'Cochin',
      margin:5,
      fontWeight: 'bold',
      justifyContent: 'center',
      height: 50,
      width:180,
      marginTop:60,
      borderWidth: 1,
      alignItems: 'center',
      fontSize:18,
      marginBottom:30,
      
      borderColor:'#000', 
      textAlign:'center'   
      },        
  })