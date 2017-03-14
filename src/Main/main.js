import {
  View,
  Navigator
} from 'react-native';
import React, { Component } from 'react';
import Login from '../Components/Login/';
import Home from '../Components/Home/';
import Splash from '../Containers/Splash/';
import { Provider } from 'react-redux';
import store from '../Store/';

export default class main extends Component {
  renderScene(route, navigator) {
    let name = route.name;
    if (name === 'Splash') {
      return (
        <Splash
          navigator={navigator} />
      );
    }
    if (name === 'Login') {
      return (
        <Login
          navigator={navigator} />
      );
    }
    if (name === 'Home') {
      return (
        <Home
          navigator={navigator} />
      );
    }
  } 
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{ name: 'Splash' }}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
        />
      </Provider>
    );
  }
}

