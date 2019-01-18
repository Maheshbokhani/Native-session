 import React from 'react'
 import {
     TouchableOpacity,
     TextInput,Text,
     View
 } from 'react-native'

 export default Button=({inputChange,inputtext}) => {
   
    return (
       
        <View>


            <TextInput 
                
                style={{
                marginTop:30,   
                width:250,  
                margin:10, fontSize:15, 
                padding:5, backgroundColor:'lightyellow' }}>{inputChange}
                </TextInput>
               


                 
          <TouchableOpacity
            style = {{ borderRadius:6,
            backgroundColor:'#8F97FD',
            fontFamily: 'Cochin',
            margin:5,
            fontWeight: 'bold',
            height: 40,
            width:160,
            marginTop:20,
            marginBottom:60,
            borderWidth: 1,
            alignItems: 'center',
            fontSize:14,
            borderColor:'green', 
            textAlign:'center'}}
            >
            <Text style = {{fontSize:17,padding:10,paddingLeft:10 }}  
                > {inputtext} </Text>
          
           </TouchableOpacity> 

      </View>

     )
 }
