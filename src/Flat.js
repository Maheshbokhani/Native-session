import React, { Component } from 'react';
import { WebView ,Navigator} from 'react-native';

export default class flat extends Component {
  render() {
    return (
        <WebView
        source={{uri: 'https://www.facebook.com'}}
        style={{marginTop: 20}}
      />
     );
  }
}