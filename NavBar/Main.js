import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "../StackScreens/HomeStackScreen";
import MatchingStackScreen from "../StackScreens/MatchingStackScreen";
import MeetingStackScreen from "../StackScreens/MeetingStackScreen";
import ChattingStackScreen from "../StackScreens/ChattingStackScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Main = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = '홈' component = {HomeStackScreen} options = {{headerShown :false}}/>
            <Tab.Screen name = '매칭' component = {MatchingStackScreen} options = {{headerShown :false}}/>
            <Tab.Screen name = '모임' component = {MeetingStackScreen} options = {{headerShown :false}}/>
            <Tab.Screen name = '채팅' component = {ChattingStackScreen} options = {{headerShown :false}}/>
        </Tab.Navigator>
    )
};

export default Main;