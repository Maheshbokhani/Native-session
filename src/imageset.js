import React, { Component } from 'react';
import { AppRegistry,StyleSheet, View, Image, } from 'react-native';
import { Avatar } from 'react-native-elements'

export default class imageset extends Component {
  render() {
    return (
      <View style={{ 
            flex:1,
          flexDirection: 'column',
          justifyContent: 'space-around',
           
        }}>

      <View style={{
            flex:0.20,
        scrollEnabled:'true',
           flexDirection: 'row',
         // justifyContent: 'space-around',
        }}>

        <Image
           style={{width: 60,  flex:1,}}
          resizeMode="stretch"
          source={{uri: 'https://i.imgur.com/p7FgplN.jpg'}}
        />
        <Image
          style={{width: 60,  flex:1,}}
           resizeMode="stretch"
          source={{uri: 'https://cn.opendesktop.org/img/e/b/c/b/81d82b54c280cf1477ac2a3fa5c9f7817c74.jpg'}}
        />
        
        </View>
        
        <View style={{
         flex:0.3,
         alignItems:'center',
         justifyContent:'center'
          }}>      
       
       <Avatar
            size="xlarge"
            rounded
            source={{uri: "http://citizenmatters.in/wp-content/uploads/sites/2/2018/08/IMG_4703-678x381.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
        />
    
        </View>
    
       <View style={{
            flex:0.3,
            flexDirection: 'row',
            scrollEnabled:'true',
         // justifyContent: 'space-around',
        }}>

        <Image
           style={{width: 60,  flex:1,}}
          resizeMode="stretch"
          source={{uri: 'https://wallpapersite.com/images/pages/pic_w/5235.jpg'}}
        />
    
        </View>
          <View style={{
            flex:0.2,
        scrollEnabled:'true',
           flexDirection: 'row',
         // justifyContent: 'space-around',
       
        }}>

        <Image
           style={{width: 60,  flex:1,}}
          resizeMode="stretch"
          source={{uri: 'http://getwallpapers.com/wallpaper/full/b/3/f/151969.jpg'}}
        />
        <Image
          style={{width: 60,  flex:1,}}
           resizeMode="stretch"
          source={{uri: 'http://www.usclimateplan.org/wp-content/uploads/2018/11/cinematic-landscapes-22-best-free-cloud-wallpaper-sunset-and-average-original-0.jpg'}}
        />
        <Image
          style={{width: 60,  flex:1,}}
           resizeMode="stretch"
          source={{uri: 'https://wallpaper-house.com/data/out/1/wallpaper2you_12669.jpg'}}
        />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

