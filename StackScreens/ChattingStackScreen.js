import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native"
import ChattingScreen from '../ChattingStackScreens/ChattingScreen';
import React, { useEffect } from "react"
import { View, Text, SafeAreaView, FlatList, StyleSheet, TextInput, Image, ScrollView } from "react-native";
import ChatDetailScreen from '../ChattingStackScreens/ChatDetailScreen';

const Stack = createStackNavigator();

const ChattingStackScreen = () => {
    return (
        <Stack.Navigator initialRouteName="ChattingScreen">
            <Stack.Screen name="ChattingScreen" component={ChattingScreen} options = {{headerShown : false}}/>
            <Stack.Screen name="ChatDetailScreen" component={ChatDetailScreen} options = {{headerShown : false}}/>
        </Stack.Navigator>
    )
}

export default ChattingStackScreen;