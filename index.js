/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Client } from 'bugsnag-react-native';
const bugsnag = new Client("5a044f4686812736444cc7c758cd34f2");

AppRegistry.registerComponent(appName, () => App);
