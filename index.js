/** @format */

import {AppRegistry} from 'react-native';
import App from './App';

import imageset from './src/imageset'

import router from './src/router/router.js'
import Flat from './src/Flat'
import flatlist from './src/flatlist'
import Screen1 from './src/Screens/Screen1.js'
import headerset from './src/headerset'
import Page1 from './src/practicalTest/Page1'
import Page2 from './src/practicalTest/Page2'
import Page3 from './src/practicalTest/Page3'
import demo from './src/demo.js'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Page1);
