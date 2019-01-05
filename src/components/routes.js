import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Router, Stack, Scene} from "react-native-router-flux";
import Login from "./login";
import Lista from "./lista";
import CameraTest from "./cameraTest";
import WebViewSumemo from "./webview";
import WebViewLogin from "./webViewLogin";
import Icon from 'react-native-vector-icons/Entypo';
import Menu from "./menu"

const TabIcon = ({focused, iconName}) => {    
    var color = focused ? "#3498db" : "black";
    return(
        <Icon size={30} name={iconName} color={color}/>
    );
}

const menuIcon = () => {    
    return(
        <Icon size={30} name="menu" color="black"/>
    );
}

export default class Routes extends Component {
    render(){
        return(
            <Router style={styles.router}>
                <Stack key="root">
                    <Scene key="login" hideNavBar hideTabBar component={Login} title="Login" initial/>                                      
                    <Scene                         
                        key="drawer"
                        drawer
                        contentComponent={Menu}
                        drawerIcon={menuIcon}
                        drawerWidth={300}
                        hideNavBar>           
                        <Scene key="tabNavegacao"
                            tabs
                            tabBarStyle={{backgroundColor:"#FFFFFF"}}
                            hideNavBar>
                            <Scene key="dashboard" title="Dashboard" icon={TabIcon} iconName="aircraft-take-off" initial>                                
                                <Scene key="lista" component={Lista} title="Lista" initial/>
                            </Scene>
                            <Scene key="camera" title="Câmera" icon={TabIcon} iconName="clapperboard">
                                <Scene key="cameraTest" component={CameraTest} title="Teste de Câmera"/>
                            </Scene>
                        </Scene>
                        <Scene key="tabWebViews"
                            tabs
                            tabBarStyle={{backgroundColor:"#FFFFFF"}}
                            hideNavBar>
                            <Scene key="webView" title="Myvillage" icon={TabIcon} iconName="github">
                                <Scene key="webViewLogin" component={WebViewLogin} title="Myvillage"/>
                            </Scene>
                            <Scene key="webViewMyvillage" title="WebView" icon={TabIcon} iconName="graduation-cap">
                                <Scene key="webViewSumemo" component={WebViewSumemo} title="WebView"/>
                            </Scene>
                        </Scene>       
                    </Scene>
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