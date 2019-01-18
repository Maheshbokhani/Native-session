import React, { Component } from 'react';
import { View, Text,ScrollView,TouchableOpacity, StyleSheet } from 'react-native';
import { Actions, } from 'react-native-router-flux';


export default class Page5 extends Component {
    render() {
      return (
        
        <ScrollView style={{backgroundColor:'lightyellow'}}>
           
         <View style={styles.container}>
            
           <View
              style={{    
              marginTop:30,
              justifyContent: 'space-evenly',
              flexDirection:'row',
              backgroundColor: 'lightblue',}}>
      
           <Text 
                style={{marginTop:10,fontSize:18,
                width:250,textAlign:'center',justifyContent:'center' 
                ,height: 35,backgroundColor:'lightblue', 
                borderColor: 'lightblue', borderWidth: 1}} 
                maxLength = {50}>
 
             {this.props.navigation.state.params.JSON_ListView_Clicked_Item1}
       
           </Text>
         
          </View>

           <View
              style={{
              marginTop:10,
              justifyContent: 'space-evenly',
              flexDirection:'row',
              backgroundColor: 'lightblue',}}>
      
            <Text 
              style={{marginTop:20,fontSize:16,
                width:290,textAlign:'center',justifyContent:'center',
                height: 35,backgroundColor:'lightblue', borderColor: 'lightblue',
                 borderWidth: 1}} 
                maxLength = {50}>
                
             {this.props.navigation.state.params.JSON_ListView_Clicked_Item2}
             
             </Text> 
      
            </View>

            <TouchableOpacity
                 style = {styles.reset}    
                 onPress={() => Actions.popTo('screen1')}>

               <Text style = {styles.submitButtonText}> Logout </Text>
             
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
    margin:30,
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
});            
            
    

