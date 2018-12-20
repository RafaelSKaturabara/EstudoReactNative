import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Logo extends Component{
    render(){
        return (
            <View style={styles.componentLogo}>
                <Image  style={styles.logoImage} source={require("../images/logo.png")} />
                <Text style={styles.logoTitulo}>Up! Sussumu</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoImage:{
        // width: 70, 
        // height: 70,
        
    },
    componentLogo:{
        //flex: 1
    },
    logoTitulo:{
        textAlign: "center",
        fontSize: 35
    }
});