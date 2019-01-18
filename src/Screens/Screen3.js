import React, { Component } from 'react';
import { View, Text,TextInput,ScrollView,TouchableOpacity, StyleSheet,AsyncStorage } from 'react-native';



export default class Screen3 extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password:'',
    };
  }

  render() {
 
    return (
        
      <ScrollView style={{backgroundColor:'lightyellow'}}>
        
         <View style={styles.container}>
            
          <View
             style={{
             marginTop:50,
             justifyContent: 'space-evenly',
             flexDirection:'row',
             backgroundColor: 'lightblue', }}>
        
             <Text  style={styles.label} >Name</Text>

             <TextInput 
               value={this.state.username}
               onChangeText={username => this.setState({ username })}
                style={{marginLeft:20,fontSize:15,width:230,textAlign:'left',height: 45,backgroundColor:'lightblue', borderColor: 'blue', borderWidth: 1}} 
                maxLength = {50}
                />
           </View>

           <View
              style={{
              marginTop:20,
              justifyContent: 'space-evenly',
              flexDirection:'row',
              backgroundColor: 'lightblue',}}>

             <Text  style={styles.label} >Email</Text>

             <TextInput 
               value={this.state.email}
               onChangeText={email => this.setState({ email })}
               style={{marginLeft:20,fontSize:15,width:230,textAlign:'left',height: 45,backgroundColor:'lightblue', borderColor: 'blue', borderWidth: 1}} 
               maxLength = {50}
              />
            </View>
          
             <View
                style={{
                marginTop:20,
                justifyContent: 'space-evenly',
                flexDirection:'row',
                backgroundColor: 'lightblue',}}>

            <Text  style={styles.label} >Password</Text>

            <TextInput  
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                secureTextEntry={true}
                style={{marginLeft:20,fontSize:15,width:200,textAlign:'left',height: 45,backgroundColor:'lightblue', borderColor: 'blue', borderWidth: 1}} 
                maxLength = {50}
            />

             </View>


             <TouchableOpacity
                style = {styles.reset}    
                onPress={this.saveData}>
                
               <Text style = {styles.submitButtonText}> Register </Text>
             
             </TouchableOpacity>



       </View>

 </ScrollView>    
   )
  }

 saveData = async() =>  {

  const{username,email,password}=this.state;   
 
         let obj={    
                    name:this.state.username,            
                    email:this.state.email,          
                    pass:this.state.password          
          }

  await AsyncStorage.setItem('user',JSON.stringify(obj));     
        let user = await AsyncStorage.getItem('user');       
        let parsed = JSON.parse(user);            
        alert(parsed.name + '\n' + parsed.email + '\n' + parsed.pass);           

      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
      borderColor: 'blue', borderWidth: 1,
      borderRadius:8,
      margin:20,
    },
    label: {
        fontFamily: 'Cochin',
        textAlignVertical:'center',
        fontSize:17,
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
})