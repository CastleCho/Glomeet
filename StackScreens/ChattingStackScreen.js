import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native"
import ChattingScreen from '../ChattingStackScreens/ChattingScreen';
import React, { useEffect } from "react"
import ChatDetailScreen from '../ChattingStackScreens/ChatDetailScreen';
import ChatJessicaScreen from '../ChattingStackScreens/ChatJessicaScreen';
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import backicon from '../images/backicon.png';
const Stack = createStackNavigator();

const ChattingStackScreen = ({navigation, route}) => {
    React.useLayoutEffect(() => {
        const routeName =
            getFocusedRouteNameFromRoute(route) ?? 'ChattingScreen';
        if (routeName !== 'ChattingScreen') {
            navigation.setOptions({tabBarStyle: {display: 'none'}});
        } 
        else {
            navigation.setOptions({tabBarStyle: {display: 'flex'}});
        }
    }, [navigation, route]);
    return (
        <Stack.Navigator initialRouteName="ChattingScreen"
            screenOptions={{
                headerBackImage: () => (
                    <Image source={backicon} style={{width:9, height:18, margin:10}}/>
                ),
                headerTitle: () => (
                    <Image
                    source={require('../images/logo_glomeet.png')}
                    style={{ width: 105, height: 39 }}      
                    />
                ),
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen name="ChattingScreen" component={ChattingScreen} options = {{headerShown : true}}/>
            <Stack.Screen name="ChatDetailScreen" component={ChatDetailScreen} options = {{headerShown : true}}/>
            <Stack.Screen name="ChatJessicaScreen" component={ChatJessicaScreen} options = {{headerShown : false}}/>
        </Stack.Navigator>
    )
}

export default ChattingStackScreen;