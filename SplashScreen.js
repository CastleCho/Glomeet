import { React, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image} from "react-native";
// import styles from "./Styles/Styles";
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('WelcomeScreen')
        },2000)
    })
    

    return(
        <View style={styles.container}>
            <LinearGradient
            colors={['rgba(65, 114, 241, 0.1)', 'rgba(255, 255, 255, 0.1)']}
            style={[styles.gradient, { left: '-5%', marginTop:'16%' }]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            />
            <LinearGradient
            colors={['rgba(65, 114, 241, 0.1)', 'rgba(255, 255, 255, 0.1)']}
            style={[styles.gradient, { left: '26%', marginTop:'3%' }]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            />
            <LinearGradient
            colors={['rgba(65, 114, 241, 0.1)', 'rgba(255, 255, 255, 0.1)']}
            style={[styles.gradient, { left: '63%',  marginTop:'41%' }]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            />     
            <LinearGradient
            colors={['rgba(65, 114, 241, 0.1)', 'rgba(255, 255, 255, 0.1)']}
            style={[styles.gradient, { left: '63%',  marginTop:'41%' }]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            />         
        </View>
        
    );
};

const styles = StyleSheet.create({
    gradient: {
        borderTopLeftRadius: 140,
        borderTopRightRadius: 140,
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 271,
      },
    container: {
        flex: 1,
    },
});

export default SplashScreen;