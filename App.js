/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,TextInput,ScrollView,TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      fullname: '',
      address: '',
      web: '',
      about: '',
      username: '',
      email: '',
      password:'',
      isEdit:true
    };
  
 
}

handleEmail = (text) => {
  this.setState({ email: text })
}

reset1  = () => { 
  this.setState({
    fullname: '',
    address: '',
    web: '',
    about: '',
    username: '',
    email: '',
    password:'',
  })
}


 
  render() {
    return (
      <ScrollView style={{backgroundColor: 'grey'}}>
      <View style={{
        scrollEnabled:'true',
           flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: 'grey'   
        }}>
      <View style={{
           marginTop:20,
            borderRadius:10,
            marginLeft:7,
            marginEnd:7,
            flexDirection:'row',
            backgroundColor: 'white',
        }}>
     <View
    
       style={{
              justifyContent: 'space-evenly',
            paddingTop:6,
          
            margin:6,
            backgroundColor: 'white',
          }}>
        <Text  style={styles.label} >FullName</Text>
        <Text  style={styles.label} >Address</Text>
        <Text  style={styles.label} >Web</Text>
        <Text  style={styles.label} >About</Text>
        </View>  
        <View
       style={{
        marginTop:10,
            marginLeft:3,
            flexDirection:'column',
            justifyContent: 'space-evenly',
            backgroundColor: 'white',
          }}>

      

        <TextInput  
        id="fullname"
        onChangeText={fullname => this.setState({fullname})}
        value={this.state.fullname} 
        ref={fullname => { this.textInput = fullname }}
        style={{marginTop:10,fontSize:15,width:250,textAlign:'left',height: 45, borderColor: 'grey', borderWidth: 0.5}} 
        maxLength = {20}
        editable={this.state.isEdit}
      />
    <TextInput 
    id="address"
    onChangeText={address => this.setState({address})} 
    value={this.state.address}
    style={{marginTop:10,fontSize:15,width:250,textAlign:'left',height: 45, borderColor: 'grey', borderWidth: 0.5}} 
        maxLength = {50}
        editable={this.state.isEdit}
      />
       <TextInput 
       id="web"
       onChangeText={web => this.setState({web})} 
       value={this.state.web}
       style={{marginTop:10,fontSize:15,width:250,textAlign:'left',height: 45, borderColor: 'grey', borderWidth: 0.5}} 
        maxLength = {20}
        editable={this.state.isEdit}
      
      />
    <TextInput 
    id="about"
    onChangeText={about => this.setState({about})} 
    value={this.state.about}
    style={{marginTop:10,marginBottom:10,keyboardType:'numeric',fontSize:15,width:250,textAlign:'left',height: 45, borderColor: 'grey', borderWidth: 0.5}} 
        maxLength = {50}
        editable={this.state.isEdit}
      />
     
      </View>
        </View>
        <View style={{
         
          borderRadius:10,
          marginLeft:7,
          marginEnd:7,
          marginTop:20,
            flexDirection:'row',
            backgroundColor: 'white',
        }}>
     <View
       style={{
              justifyContent: 'space-evenly',
            paddingTop:6,
          
            margin:6,
            backgroundColor: 'white',
          }}>
        <Text  style={styles.label} >UserName</Text>
        <Text  style={styles.label} >Email</Text>
        <Text  style={styles.label} >Password</Text>
        </View>  
        <View
       style={{
       
            marginLeft:3,
            flexDirection:'column',
            justifyContent: 'space-evenly',
            backgroundColor: 'white',
          }}>
        <TextInput 
        id="username"
        onChangeText={username => this.setState({username})} 
         value={this.state.username}
        style={{marginTop:10,fontSize:15,width:240,textAlign:'left',height: 40, borderColor: 'grey', borderWidth: 0.5}} 
         maxLength = {20}
         editable={this.state.isEdit}
      />
    <TextInput
    id="email"
    onChangeText={email => this.setState({email})} 
    value={this.state.email}
    style={{marginTop:10,fontSize:15,width:240,textAlign:'left',height: 40, borderColor: 'grey', borderWidth: 0.5}} 
        maxLength = {50}
        onChangeText = {this.handleEmail}
        editable={this.state.isEdit}
      />
       <TextInput 
       id="password"
       onChangeText={password => this.setState({password})} 
       value={this.state.password}
       secureTextEntry={true} style={{secureTextEntry:'true',marginTop:10,marginBottom:10,fontSize:15,width:240,textAlign:'left',height: 40, borderColor: 'grey', borderWidth: 0.5}} 
        maxLength = {20}
        editable={this.state.isEdit}
      />
          </View>
        </View>
      

      

        <View style={{
         
          marginTop:20,
          marginBottom:40,
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'grey'   
        }}>
        
        <TouchableOpacity
               style = {styles.reset}    
               onPress = {this.reset1}
      >
               <Text style = {styles.submitButtonText}> Reset </Text>
             </TouchableOpacity>
             <TouchableOpacity
               style = {styles.reset}  
               onPress = {
                  () => this.setState({isEdit:false})               }>
               <Text type="submit" data-test="submit" style = {styles.submitButtonText}>{this.state.isEdit?' Done':' Edit'}</Text>
            </TouchableOpacity>
      </View>
      </View>
     </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  label: {
    fontFamily: 'Cochin',
    textAlignVertical:'center',
    fontSize:17,
    paddingLeft:4,
    fontWeight:'bold',
    textAlign:'left'
  },
    reset: {
      backgroundColor:'#fff',
      fontFamily: 'Cochin',
      textAlignVertical:'center',
      margin:5,
      fontWeight: 'bold',
      padding:7,
      paddingLeft:25,
      height: 40,
      width:100,
      borderWidth: 1,
      borderColor:'#fff', 
      textAlign:'center'   
      },
});
