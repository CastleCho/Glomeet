import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native"
import MeetingScreen from '../MeetingStackScreens/MeetingScreen';
import MeetingDetailScreen from '../MeetingStackScreens/MeetingDetailScreen'
import goToRegistration from '../MeetingStackScreens/goToRegistration';
import RegistrationComplete from '../MeetingStackScreens/RegistrationComplete';
import {Image} from "react-native";
import React, {useState } from 'react';
import backicon from '../images/backicon.png';

const Stack = createStackNavigator();

const MeetingStackScreen = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        const routeName =
            getFocusedRouteNameFromRoute(route) ?? 'MeetingScreen';
        if (routeName !== 'MeetingScreen') {
            navigation.setOptions({tabBarStyle: {display: 'flex'}});
        } 
        else {
            navigation.setOptions({tabBarStyle: {display: 'none'}});
        }
    }, [navigation, route]);
    return (
        <Stack.Navigator 
            initialRouteName="Meetingscreen"
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
            }}
        >
            <Stack.Screen name="Meetingscreen" component={MeetingScreen} options = {{headerShown : true}} />
            <Stack.Screen name="MeetingDetailScreen" component={MeetingDetailScreen} options = {{headerShown : true}} />
            <Stack.Screen name="goToRegistration" component={goToRegistration} options = {{headerShown : true}} />
            <Stack.Screen name="RegistrationComplete" component={RegistrationComplete} options = {{headerShown : true}} />
            <Stack.Screen name="MeetingScreen" component={MeetingScreen} />
        </Stack.Navigator>
    );
}
export default MeetingStackScreen;
