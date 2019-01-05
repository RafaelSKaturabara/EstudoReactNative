import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Actions} from "react-native-router-flux";

export default class Menu extends Component {
    goToWebviews() {
        Actions.tabWebViews();
    }
    goToNavegacao() {
        Actions.tabNavegacao();
    }
    render() {
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 2, backgroundColor: "#2c3e50", justifyContent: "center", alignItems: "center"}}>
                    <Text>Sumemão Naniwa</Text>
                </View>
                <View style={{flex:1}}>
                    <Text onPress={this.goToNavegacao}>Navegação</Text>
                </View>
                <View style={{flex:1}}>
                    <Text onPress={this.goToWebviews}>Webviews</Text>
                </View>
            </View>
        );
    }
}