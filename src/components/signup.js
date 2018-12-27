import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Actions } from "react-native-router-flux";

export default class Signup extends Component{
    goBack() {
        Alert.alert('Error', 'Error message');
        Actions.cameraTest()
    }
    render(){
        return(
            <View style={styles.signupTextCont}>
                <Text style={styles.signupText}>Não tem conta ainda? </Text>
                <TouchableOpacity onPress={this.goBack}>
                    <Text style={styles.signupButton}>Teste de Câmera</Text>
                </TouchableOpacity>
            </View>
        );        
    }
}
                
const styles = StyleSheet.create({
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