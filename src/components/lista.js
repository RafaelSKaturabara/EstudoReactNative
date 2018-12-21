import React, {Component} from 'react';
import {
    TextInput, 
    View, 
    StyleSheet,
    TouchableOpacity,
    Text,
    Platform
} from 'react-native';
import Logo from './logo';
import { Actions } from "react-native-router-flux";

const instructions = Platform.select({
    ios: 'Está usando ios na lista',
    android: 'Está usando android na lista'
});
  
export default class Lista extends Component {
    goBack(){
        Actions.pop()
    }
    render(){
        return(
            <View>
                <Logo/>
                <View style={styles.componentLogin}>
                    <TextInput 
                        style={[styles.loginInput, styles.loginEmail]}
                        placeholder="Lista teste"
                        // placeholderTextColor="#000000"    
                    />
                    <TextInput
                        style={[styles.loginInput, styles.loginSenha]}
                        placeholder="Vai listando"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={this.goBack} style={styles.btnLogin}>
                        <Text style={styles.txtBtnLogin}>Voltar</Text>
                    </TouchableOpacity>
                </View>
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
    componentLogin:{
        //flex:1
    },
    loginInput:{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 12,
        marginVertical: 10,
        fontSize: 16,
        paddingHorizontal: 16,        
        paddingVertical: 10
    },
    loginEmail:{
        width: 300,     
    },
    loginSenha:{
        width: 300,     
    },
    txtBtnLogin:{
        fontSize: 16,
        fontWeight: '500', 
        textAlign: "center"
        //color:""
    },
    btnLogin:{
        borderRadius: 12,
        backgroundColor: "rgba(0,0,0,0.6)",
        fontSize: 16,
        paddingVertical: 11,
        marginVertical: 8
        //color:""
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