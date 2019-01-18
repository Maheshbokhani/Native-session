import React, {Component} from 'react';
import {View,ScrollView,StyleSheet, Text} from 'react-native';

import Header from './Components/header'
import { Icon } from 'react-native-elements'
import Button from './Components/Button'
import NewExpense from './Components/NewExpense'

export default class headerset extends Component{
    constructor(props){
        super(props)
    this.state={
        detail:'4545',
    }
    }
    
    render(){
        const { detail } =this.state
     
       
      return(
   
        <ScrollView  style={{ backgroundColor: '#5EECCB',}} >


        <View style={styles.container}>

            <View style={styles.container1}>
       
                <Header  
                lefticon={
                    <Icon
                    name='apps' />
                    }   
              
                    tittle={'Home '} 
                righticon={ <Icon
                name='apps'
                color='#000'/>
            }   

          />

        </View>

     <View>
                   
                     <NewExpense
                     detail={detail}
                     onSubmit={({detail})=>this.setState({detail})} />


                 <Text style={{fontSize:16, marginHorizontal:16, marginVertical:8}}>{'Detail: '+detail}</Text>
                    
                </View>
         
  

</View>

</ScrollView>

   )
   }    
}
const styles = StyleSheet.create({
    container1:{
      
        flexDirection:'column',
        alignItems: 'center',
        backgroundColor: '#5EECCB',
    },
    container:{
      
        alignItems: 'center',
        backgroundColor: '#5EECCB',
    },

    
    headerText:{
        color:'white', 
        fontSize:35, 
        fontWeight:'bold',
        padding:30,
    },

});