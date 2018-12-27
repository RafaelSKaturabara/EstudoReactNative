
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Router, Stack, Scene} from "react-native-router-flux";
import Login from "./login";
import Lista from "./lista";
import CameraTest from "./cameraTest";
import WebViewSumemo from "./webview";

export default class Routes extends Component {
    render(){
        return(
            <Router style={styles.router}>
                <Stack key="root">
                    <Scene key="login" hideNavBar={true} component={Login} title="Login" initial={true}/>
                    <Scene key="lista" component={Lista} title="Lista"/>
                    <Scene key="cameraTest" component={CameraTest} title="Teste de Câmera"/>
                    <Scene key="webViewSumemo" component={WebViewSumemo} title="Teste webView"/>
                    {/* <Scene key="home" component={Home}/> */}
                </Stack>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    router: {        
        backgroundColor: '#FFFFFF',
    }
});