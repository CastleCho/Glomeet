import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "../StackScreens/HomeStackScreen";
import MatchingStackScreen from "../StackScreens/MatchingStackScreen";
import MeetingStackScreen from "../StackScreens/MeetingStackScreen";
import ChattingStackScreen from "../StackScreens/ChattingStackScreen";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import styles from '../Styles/Styles.js';

import homeIcon from '../images/Main.png';
import matchIcon from '../images/Matching.png';
import meetIcon from '../images/meeting.png';
import chatIcon from '../images/chatting.png';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Main = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
            
                tabBarItemStyle: {
                    justifyContent: 'center', // 아이콘과 라벨의 수직 정렬
                         // 바닥 패딩을 줄여서 라벨을 위로 올립니다.
                }
            }}
        >
            <Tab.Screen name = '홈' component = {HomeStackScreen} 
                options = {{
                    headerShown :false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                        source={homeIcon}
                        style={{ width: 27, height: 27, tintColor: focused ? '#5782F1' : '#949698'}} 
                        />
                    ),
                    tabBarLabel: ({ focused, color }) => (
                        <Text style={[styles.navtext,{ color: focused ? '#5782F1' : '#949698' }]}>홈</Text>
                    ),
                }}
            />
            <Tab.Screen name = '매칭' component = {MatchingStackScreen} 
                options = {{
                    headerShown :false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                        source={matchIcon}
                        style={{ width: 27, height: 27, tintColor: focused ? '#5782F1' : '#949698'}} 
                        />
                    ),
                    tabBarLabel: ({ focused, color }) => (
                        <Text style={[styles.navtext,{ color: focused ? '#5782F1' : '#949698' }]}>매칭</Text>
                    ),
                }}
            />
            <Tab.Screen name = '모임' component = {MeetingStackScreen} 
                options = {{
                    headerShown :false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                        source={meetIcon}
                        style={{ width: 27, height: 27, tintColor: focused ? '#5782F1' : '#949698'}} 
                        />
                    ),
                    tabBarLabel: ({ focused, color }) => (
                        <Text style={[styles.navtext,{ color: focused ? '#5782F1' : '#949698' }]}>모임</Text>
                    ),
                }}
            />
            <Tab.Screen name = '채팅' component = {ChattingStackScreen} 
                options = {{
                    headerShown :false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                        source={chatIcon}
                        style={{ width: 27, height: 27, tintColor: focused ? '#5782F1' : '#949698'}} 
                        />
                    ),
                    tabBarLabel: ({ focused, color }) => (
                        <Text style={[styles.navtext,{ color: focused ? '#5782F1' : '#949698' }]}>채팅</Text>
                    ),
                }}
            />
        </Tab.Navigator>
    )
};

export default Main;