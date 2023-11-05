import { React, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image} from "react-native";
// import styles from "./Styles/Styles";
import LinearGradient from 'react-native-linear-gradient';
import splogo from './images/splogo.png'

const SplashScreen = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('WelcomeScreen')
        },2000)
    })
    

    return(
        <View style={styles.container}>
            <LinearGradient
            colors={['#4172F1', '#E0E9FF']}
            style={[styles.gradient, {width:309, left:156 ,top:-133}]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            />
            <LinearGradient
            colors={['#4172F1', '#F0F4FE']}
            style={[styles.gradient, {width:309, left:-32}]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            />
            <LinearGradient
            colors={['#4172F1', '#F0F4FE']}
            style={[styles.gradient, {width:309, left: 184, top: 74}]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            />
            <LinearGradient
            colors={['#4172F1', '#E0E9FF']}
            style={[styles.gradient, { left: -5,  top:379 }]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            />     
            <LinearGradient
            colors={['#4172F1', '#E0E9FF']}
            style={[styles.gradient, {width:208, left: 207, top: 567}]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            />
            <Image source={splogo}
            style={{width:150, height:150, alignSelf:'center'}}/>         
        </View>
        
    );
};

const styles = StyleSheet.create({
    gradient: {
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200,
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 271,
      },
    container: {
        flex: 1,
        backgroundColor: '#5782F1',
        justifyContent: 'center'
    },
});

export default SplashScreen;