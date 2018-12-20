/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from '../EstudoReactNative/src/components/login';
import Logo from '../EstudoReactNative/src/components/logo';

const instructions = Platform.select({
  ios: 'Está usando ios',
  android:
    'Está usando android',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <Login type="Login"/> 
        <Text style={styles.instructions}>{instructions}</Text>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Não tem conta ainda? </Text>
          <Text style={styles.signupButton}>Criar conta </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  instructions: {
    //flex: 1,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  signupTextCont:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',    
    justifyContent: "center",
    marginBottom: 10,
    flexDirection: "row"
  },
  signupText:{
    color:"rgba(0,0,0,0.8)"
  },
  signupButton:{    
    color:"rgba(0,0,0,0.9)",
    fontSize: 11,
    fontWeight: "500"
  }
});