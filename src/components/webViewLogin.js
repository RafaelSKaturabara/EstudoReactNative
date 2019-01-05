import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class WebViewLogin extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://app.myvillage.com.br/pages/default.aspx'}}
        style={{marginTop: 0}}
      />
    );
  }
}