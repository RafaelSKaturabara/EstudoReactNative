import React, {Component} from 'react';
import {
    TextInput, 
    View, 
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

export default class Login extends Component {
    render(){
        return(
            <View style={styles.componentLogin}>
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
                <TouchableOpacity  style={styles.btnLogin}>
                    <Text style={styles.txtBtnLogin}>{this.props.type}</Text>
                </TouchableOpacity>
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
    }
});