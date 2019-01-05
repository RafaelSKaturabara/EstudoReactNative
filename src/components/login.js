import React, {Component} from 'react';
import {
    TextInput, 
    View, 
    StyleSheet,
    TouchableOpacity,
    Text,
    Platform,
} from 'react-native';
import {Actions} from "react-native-router-flux";
import Logo from './logo';
import Signup from './signup'

const instructions = Platform.select({
    ios: 'Está usando ios',
    android: 'Está usando android'
});
  
export default class Login extends Component {
    signup() {
        Actions.drawer();
    };
    render() {
        return(
            <View style={styles.componentLogin}>
                <Logo/>
                <View>
                    <TextInput 
                        style={[styles.loginInput, styles.loginEmail]}
                        placeholder="Email"
                        // placeholderTextColor="#000000"    
                    />
                    <TextInput
                        style={[styles.loginInput, styles.loginSenha]}
                        placeholder="Senha"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={this.signup} style={styles.btnLogin}>
                        <Text style={styles.txtBtnLogin}>Logar</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.instructions}>{instructions}</Text>
                <Signup/>
            </View>    
        );
    };
}

const styles = StyleSheet.create({
    componentLogin:{
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 30
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
    }
});