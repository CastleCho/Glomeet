import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native"
import MatchingScreen from '../MatchingStackScreens/MatchingScreen';
import MatchingFilter from '../MatchingStackScreens/MatchingFilter';
import MatchingLoading from '../MatchingStackScreens/MatchingLoading';
import MatchingComplete from '../MatchingStackScreens/MatchingComplete';
import React from "react"
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import backicon from '../images/backicon.png';
const Stack = createStackNavigator();

const MatchingStackScreen = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        const routeName =
            getFocusedRouteNameFromRoute(route) ?? 'MatchingScreen';
        if (routeName !== 'MatchingScreen' && routeName !== 'MatchingComplete') {
            navigation.setOptions({tabBarStyle: {display: 'none'}});
        } 
        else {
            navigation.setOptions({tabBarStyle: {display: 'flex'}});
        }
    }, [navigation, route]);
    return (
        <Stack.Navigator 
            initialRouteName="MatchingScreen"
            screenOptions={{
                headerBackImage: () => (
                    <Image source={backicon} style={{width:9, height:18, margin:10}}/>
                  ),
                  headerBackTitleVisible: false,
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
            <Stack.Screen name="MatchingLoading" component={MatchingLoading} options = {{headerShown : true, headerLeft: () => null}} />
            <Stack.Screen name="MatchingComplete" component={MatchingComplete} options = {{headerShown : true, headerLeft: () => null}} />
        </Stack.Navigator>
    )
}

export default MatchingStackScreen;