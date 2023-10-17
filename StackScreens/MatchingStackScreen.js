import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native"
import MatchingScreen from '../MatchingStackScreens/MatchingScreen';
import MatchingFilter from '../MatchingStackScreens/MatchingFilter';
import React from "react"
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
const Stack = createStackNavigator();


const MatchingStackScreen = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
    const routeName =
        getFocusedRouteNameFromRoute(route) ?? 'MatchingScreen';
    if (routeName != 'MatchingScreen') {
        navigation.setOptions({tabBarStyle: {display: 'none'}});
    } 
    else {
        navigation.setOptions({tabBarStyle: {display: 'flex', height: 70}});
    }
    }, [navigation, route]);
    return (
        <Stack.Navigator 
            initialRouteName="MatchingScreen"
            screenOptions={{
            headerTitle: () => (
                <Image
                source={require('../images/logo_glomeet.png')}
                style={{ width: 105, height: 39 }}
                />
            ),
            headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen name="MatchingScreen" component={MatchingScreen} options = {{headerShown : true}} />
            <Stack.Screen name="MatchingFilter" component={MatchingFilter} options = {{headerShown : true}} />
        </Stack.Navigator>
    )
}

export default MatchingStackScreen;