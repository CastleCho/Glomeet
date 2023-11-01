import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { Alert, Image, StyleSheet } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import styles from '../Styles/Styles.js';

const HomeScreen = ({ navigation }) =>{
    return(
        <SafeAreaView>

            <View>
                <Text>
                    메인스크린
                </Text>
            </View>
            
            <TouchableOpacity
                onPress={() => {navigation.navigate('LoginScreen')}}
            >
                <Text>
                    로그인
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

export default HomeScreen;