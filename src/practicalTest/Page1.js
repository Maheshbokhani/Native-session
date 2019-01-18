import React, {Component} from 'react';
import {} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Page2 from '/home/mahesh/workspace/Demo1/src/practicalTest/Page2'
import Page3 from '/home/mahesh/workspace/Demo1/src/practicalTest/Page3'


export default class page extends Component {
    render() {
        return (
         <Router>
            <Scene key="root">
              <Scene key="page1"
                component={Page2}
                hideNavBar
                initial
              />
              <Scene
                key="page2"
                component={Page3}
                hideNavBar
              />
         </Scene>
         </Router>
        )
    }
}