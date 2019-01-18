import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class demo extends Component {
  render() {
    return (
      <View style={{
          flex:1,
          lexDirection: 'column',
          justifyContent: 'space-around',
         backgroundColor: '#CACFFA'
          
        }}>
      <View style={{
          flex:1,
            paddingTop:10,
            borderRadius:6,
            margin:5,
          backgroundColor: 'white',
        }}>
        <Text style={styles.ab} >Log File</Text>
        <View style={{backgroundColor:'#999',height:1}} />
         <Text style={styles.abc3}>payment_dumps</Text>
       </View>
       <View style={{
          flex:1,
             paddingTop:10,
             borderRadius:6,
             flexDirection: 'row',
         margin:5,

            align:'center',
           backgroundColor: 'white',
         
        }}> 
           <Text style={styles.ab}>LogID</Text>
          <Text style={styles.abc2}>100</Text>
       </View>
         <View style={{
            flex:1,
             paddingTop:10,
            backgroundColor: 'white',
            height: '50%',
            margin:5,
            borderRadius:6,
             paddingTop:10,
        }}> 
           <Text style={styles.ab}>Message</Text>
           <View style={{backgroundColor:'#999',height:1}} />
           <Text style={styles.abc4}>just some ramdome #454545454548 log entry here</Text>

       </View>
         <View style={{
          flex:1,
             borderRadius:6,
             flexDirection: 'row',
          backgroundColor: 'white',
            height: '50%',
            margin:5,
             paddingTop:10,
            padding:3,
         }}> 
           <Text style={styles.ab}>Priority</Text>
           <Text style={styles.abc2}>7</Text>
       </View>
         <View style={{
          flex:1,
             borderRadius:6,
          backgroundColor: 'white',
            margin:5,
             paddingTop:10,
             flexDirection: 'row',
        }}> 
           <Text style={styles.ab}>PriorityName</Text>
           <Text style={styles.abc2}>DEBUG</Text>
       </View>
         <View style={{
          flex:1,
             borderRadius:6,
          backgroundColor: 'white',
           height: '50%',
            margin:5,
            
             borderRadius:6,
           
             paddingTop:5,
        }}> 
           <Text style={styles.ab}>Timestamp</Text>
           <View style={{backgroundColor:'#999',height:1}} />
           <Text style={styles.abc4}>Jan 1 2019, 17:24</Text>
           
       </View>
     </View>  
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    borderColor:'red'
  },
  ab: {
    fontFamily: 'Cochin',
    fontSize: 13.7,
     paddingLeft:5,
    fontWeight:'bold',
    padding:2,
  },

  abc:{
   textAlign:'right',
    color:'darkblue'
  },
   abc1:{
    fontSize: 12,
    color:'#505050',
    
  },
   abc2:{
     fontFamily: 'Cochin',
      fontSize: 13.5,
   textAlign:'right',
    color:'#3E669B',
     width:'100%'
  },
   abc3:{
    fontFamily: 'Cochin',
    fontSize: 13.7,
     paddingLeft:5,
   textAlign:'right',
    padding:6,
     color:'#3E669B',
  },

 
  abc4:{
     fontFamily: 'Cochin',
      fontSize: 13.5,
   textAlign:'left',
    color:'#505050',
     width:'100%',
   paddingLeft:5,
    padding:6,
  },
});
