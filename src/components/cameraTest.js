import React, {Component} from 'react';
import {
    View, 
    StyleSheet,
    Text,
} from 'react-native';
import Camera from "react-native-camera";
import Icon from 'react-native-vector-icons/Entypo';

export default class CameraTest extends Component {
    render(){
        return(
            <View  style={styles.container}>
                <Camera
                    ref={(cam) =>{
                        this.camera = cam
                    }}
                    style={styles.view}
                    aspect={Camera.constants.Aspect.fill}>
                    <Icon size={40} color="white" onPress={this.takePicture.bind(this)} name="camera"/>      
                </Camera>
            </View>    
        );
    }
    takePicture(){
        const options = {}

        this.camera.capture({metadata: options}).then((data) => {
            console.log(data)
        }).catch((error)=> {
            console.log(error)
        })
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row"
    },
    view:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    capture:{
        flex:0,
        backgroundColor: "steelblue",
        borderRadius: 10,
        color: 'red',
        padding: 15,
        margin: 45
    }
});