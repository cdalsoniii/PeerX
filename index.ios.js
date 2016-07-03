import React, { Component } from 'react';
import CodePush from "react-native-code-push";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';



import WelcomeView from './welcome-view';
import ProfileView from './profile-view';

class Auth0Sample extends Component {
///////////////////////



componentDidMount() {
CodePush.notifyApplicationReady();

      CodePush.sync({ deploymentKey: "VlOQwXQYJIeh667505A-PYkc4RoT4JVuG2y8W",
        updateDialog: true,
        //installMode: CodePush.InstallMode.ON_NEXT_RESUME
        installMode: CodePush.InstallMode.IMMEDIATE
      });
alert("I'm CodePush.notifyApplicationReady();");
  }




////////////////////////////////////////
  render() {
      return (

        <Navigator style={styles.navigator}
          initialRoute={{ name: "Welcome"}}
          renderScene= { this.renderScene }
          navigationBar={
             <Navigator.NavigationBar
               style={ styles.nav }
               routeMapper={NavigationBarRouteMapper} />
             }
        />
    );
  }
/*
componentDidMount: function () {
  codepush.sync( { updateDialog: true, installMode: codePush.InstallMode.ON_NEXT_RESUME });
}
*/

  renderScene(route, navigator) {
    if (route.name == "Welcome") {
      return <WelcomeView navigator={navigator} {...route.passProps} />
    }
    if (route.name == "Profile") {
      return <ProfileView navigator={navigator} {...route.passProps} />
    }
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>)
    }
    else { return null }
  },

  RightButton(route, navigator, index, navState) {
    return null
  },

  Title(route, navigator, index, navState) {
    return <Text style={ styles.title }>Auth0 Sample</Text>
  }
};

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  title: {
    marginTop:4,
    fontSize:16
  },
  leftNavButtonText: {
   	fontSize: 18,
    marginLeft:13,
    marginTop:2
  },
  rightNavButtonText: {
    fontSize: 18,
    marginRight:13,
    marginTop:2
  },
  nav: {
    height: 60,
    backgroundColor: '#efefef'
  }
});

AppRegistry.registerComponent('Auth0Sample', () => Auth0Sample);
