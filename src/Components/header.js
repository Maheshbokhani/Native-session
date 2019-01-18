import React from 'react';
import {Text,TextInput,View,StyleSheet,TouchableOpacity } from "react-native";



export default Header=({lefticon,tittle,righticon}) => {

    const { container,container1,btnViewLeft,tittletext,right } =styles
   
    return(
        
        <View style={container}>

        <View style={container1}>
      
        <TouchableOpacity style={btnViewLeft}>
     <View>
         {lefticon}
     </View>
     </TouchableOpacity>

     <View style={tittletext}>
     <Text style={{ color:'black',
        padding:4,
        fontSize:28,
        fontWeight:'bold'}}>
         {tittle}
     </Text>
    </View>

   <TouchableOpacity style={right}>
     <View>
         {righticon}
     </View>
    </TouchableOpacity>



 </View>
   
</View>

    );
     
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'#5EECCB'

    },
    container1:{
        flexDirection:'row',
        alignItems:'center',
        borderColor:'rgba(255,255,255,0.5)',
        borderBottomWidth:3,
        height:60,
        backgroundColor:'#5E7BEC'

    },
    
    btnViewLeft:{
        paddingHorizontal:12,
        flex:1,
        alignItems:'flex-start'
    },
    right:{
        paddingHorizontal:12,
        flex:1,
        alignItems:'flex-end'
    },
    btnTxt:{
        color:'#444',
        padding:4,
        fontSize:12,
        fontWeight:'bold'
    },
    titletext:{
        color:'black',
        padding:4,
        fontSize:18,
        fontWeight:'bold'
    },

})