import React, {Component} from 'react';
import {StyleSheet,ScrollView,TouchableOpacity, Text,TextInput, View} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Page2 extends Component {
    render() {
        return (
          
          <ScrollView style={{backgroundColor:'lightyellow'}}>
            
            <View style={styles.container}>
              
              <View
               style={{
                 justifyContent: 'space-evenly',
                 flexDirection:'row',
                 backgroundColor: 'lightblue',}}>
       
                  <Text style={styles.label} >Login :</Text>

                  <Text 
                     style={{marginTop:20,marginLeft:20,
                      fontSize:18,width:250,textAlign:'left',
                      justifyContent:'center' ,height: 35,
                      backgroundColor:'lightblue', borderColor: 'lightblue', 
                      borderWidth: 1}} 
                     maxLength = {50}>
                    {this.props.navigation.state.params.JSON_ListView_Clicked_Item}
                   </Text>
               </View>
           
            <TouchableOpacity
                 style = {styles.reset}    
                 onPress={() => Actions.screen4()}>
               <Text style = {styles.submitButtonText}> Change </Text>
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
    margin:10,
    borderColor: 'blue', borderWidth: 1,
    borderRadius:6,
  },

  label: {
      fontFamily: 'Cochin',
      textAlignVertical:'center',
      fontSize:17,
      marginTop:10,
      backgroundColor:'lightblue',
      fontWeight:'bold',
      textAlign:'left'
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

