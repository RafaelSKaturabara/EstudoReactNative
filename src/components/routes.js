
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Router, Stack, Scene} from "react-native-router-flux";
import Login from "./login";
import Lista from "./lista";

export default class Routes extends Component {
    render(){
        return(
            <Router style={styles.router}>
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login" initial={true}/>
                    <Scene key="lista" component={Lista} title="Lista"/>
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