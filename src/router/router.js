import React, {Component} from 'react';
import {} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Screen1 from '/home/mahesh/workspace/Demo1/src/Screens/Screen1.js';
import Screen2 from '/home/mahesh/workspace/Demo1/src/Screens/Screen2.js';
import Screen3 from '/home/mahesh/workspace/Demo1/src/Screens/Screen3';
import Screen4 from '/home/mahesh/workspace/Demo1/src/Screens/Screen4.js';
import Screen5 from '/home/mahesh/workspace/Demo1/src/Screens/Screen5.js';

export default class router extends Component {
    render() {
        return (
         <Router>
            <Scene key="root">
              <Scene key="screen1"
                component={Screen1}
                title="Screen1"
                hideNavBar
                initial
              />
              <Scene
                key="screen2"
                component={Screen2}
                title="Screen2"
                hideNavBar
              />
              <Scene
                key="screen3"
                component={Screen3}
                title="Screen3"
                hideNavBar
              />
              <Scene
                key="screen4"
                component={Screen4}
                title="Screen4"
                hideNavBar
              />

              <Scene
                key="screen5"
                component={Screen5}
                title="Screen5"
                hideNavBar
              />

            </Scene>
          </Router>
          ) 
     }
}  
