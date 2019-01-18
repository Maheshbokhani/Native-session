import React, { Component } from 'react';
import { Image,View,Text,FlatList,StyleSheet,styles } from "react-native";
import { ListItem,Avatar } from 'react-native-elements'





export default class flatlist extends Component {
  render() {
    return (
    
    
      <FlatList      
      data={[{key1: 'Mahesh Bokhani'+ '\n'+ 'maheshbokhani155@gmail.com'},
      {key1: 'Akshay Bokhani'+ '\n'+ 'akshaybokhani155@gmail.com'},
      {key1: 'Mahesh Bokhani'+ '\n'+ 'maheshbokhani155@gmail.com'},
      {key1: 'Akshay Bokhani'+ '\n'+ 'akshaybokhani155@gmail.com'},
      {key1: 'Mahesh Bokhani'+ '\n'+ 'maheshbokhani155@gmail.com'},
      {key1: 'Akshay Bokhani'+ '\n'+ 'akshaybokhani155@gmail.com'},
      {key1: 'Mahesh Bokhani'+ '\n'+ 'maheshbokhani155@gmail.com'},
      {key1: 'Akshay Bokhani'+ '\n'+ 'akshaybokhani155@gmail.com'},
      {key1: 'Mahesh Bokhani'+ '\n'+ 'maheshbokhani155@gmail.com'},
      {key1: 'Akshay Bokhani'+ '\n'+ 'akshaybokhani155@gmail.com'},
      {key1: 'Mahesh Bokhani'+ '\n'+ 'maheshbokhani155@gmail.com'},
      {key1: 'Akshay Bokhani'+ '\n'+ 'akshaybokhani155@gmail.com'},
      {key1: 'Mahesh Bokhani'+ '\n'+ 'maheshbokhani155@gmail.com'},
      {key1: 'Akshay Bokhani'+ '\n'+ 'akshaybokhani155@gmail.com'},
      {key1: 'Mahesh Bokhani'+ '\n'+ 'maheshbokhani155@gmail.com'},
      {key1: 'Akshay Bokhani'+ '\n'+ 'akshaybokhani155@gmail.com'},
      {key1: 'Mahesh Bokhani'+ '\n'+ 'maheshbokhani155@gmail.com'},
      {key1: 'Akshay Bokhani'+ '\n'+ 'akshaybokhani155@gmail.com'},
      {key1: 'Mahesh Bokhani'+ '\n'+ 'maheshbokhani155@gmail.com'},
      {key1: 'Akshay Bokhani'+ '\n'+ 'akshaybokhani155@gmail.com'},
      {key1: 'Mahesh Bokhani'+ '\n'+ 'maheshbokhani155@gmail.com'},
      {key1: 'Akshay Bokhani'+ '\n'+ 'akshaybokhani155@gmail.com'},
      {key1: 'Mahesh Bokhani'+ '\n'+ 'maheshbokhani155@gmail.com'},
      {key1: 'Akshay Bokhani'+ '\n'+ 'akshaybokhani155@gmail.com'},
      {key1: 'Mahesh Bokhani'+ '\n'+ 'maheshbokhani155@gmail.com'},
      {key1: 'Akshay Bokhani'+ '\n'+ 'akshaybokhani155@gmail.com'},
      {key1: 'Mahesh Bokhani'+ '\n'+ 'maheshbokhani155@gmail.com'},
      {key1: 'Akshay Bokhani'+ '\n'+ 'akshaybokhani155@gmail.com'},
    ]
    }
    renderItem={({item}) => 
    
     <ListItem 

     leftAvatar={{
      source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' },
     
    }}

    title={item.key1}
  />       
    }

    />

    );
  }
}
