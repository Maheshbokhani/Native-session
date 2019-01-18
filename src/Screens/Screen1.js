import React, {Component} from 'react';
import {StyleSheet,TouchableOpacity,Text,ScrollView, TextInput, View} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      Password:''
    };
  }
   render() {
      //const { navigate } = this.props.navigation;
        return (
           
          <ScrollView style={{backgroundColor:'lightyellow'}}>         
          
            <View style={styles.container}>
              
            
            <Text style={{marginTop:70,fontSize:25,width:250,
                  textAlign:'center',height: 45,
                  fontWeight:'bold', 
                  borderColor: 'yellow', borderWidth: 1}} 
                  maxLength = {20}>
                  Sign In
            </Text>
 
            
             <TextInput            
                 value={this.state.username}
                 onChangeText={username => this.setState({ username })}
                 placeholder="Username"
                 style={{marginTop:20,fontSize:15,width:250,textAlign:'left',height: 45, borderColor: 'blue', borderWidth: 1}} 
                 maxLength = {20}
               />

             <TextInput 
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                 placeholder="Password"
                 secureTextEntry={true}
                 style={{marginTop:20,fontSize:15,width:250,textAlign:'left',height: 45, borderColor: 'blue', borderWidth: 1}} 
                  maxLength = {50}
                />

             <TouchableOpacity
                 style = {styles.reset}  
                >
              <Text style = {styles.submitButtonText}> Log In </Text>
    
              </TouchableOpacity>
     
               <TouchableOpacity
                  style = {styles.reset} 
                  onPress={() => Actions.screen3()}>
     
                 <Text type="submit" data-test="submit" style = {styles.submitButtonText}> Register </Text>
      
               </TouchableOpacity>    
           
           </View>
     
     </ScrollView>
     )
   }
}





const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow',
      borderRadius:6,
      margin:30,
      borderColor: 'blue', borderWidth: 1
    },       
    reset: {
      borderRadius:6,
      backgroundColor:'#fff000',
      fontFamily: 'Cochin',
      margin:5,
      fontWeight: 'bold',
      justifyContent: 'center',
      height: 50,
      width:180,
      marginTop:20,
      marginBottom:60,
      borderWidth: 1,
      alignItems: 'center',
      fontSize:15,
      borderColor:'green', 
      textAlign:'center'   
      },        
   }
);