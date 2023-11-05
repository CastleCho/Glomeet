import { React, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator, SafeAreaView } from "react-native";
import 'react-native-gesture-handler';
// import styles from "./Styles/Styles";

const SplashScreen = ({navigation}) => {
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('WelcomeScreen');
        }, 2000);
    }, []);

    return(
        <View style={styles.container}>
            <Image
                source={require('./images/splash.png')}
                style={{width:'100%', resizeMode: 'contain', marginTop: 80}}
            />
            <ActivityIndicator
                animating={animating}
                color="#FFFFFF"
                size="large"
                style={styles.activityIndicator}
            />
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#307ecc',
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
});

export default SplashScreen;