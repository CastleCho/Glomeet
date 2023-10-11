import { createStackNavigator } from '@react-navigation/stack';
import MeetingScreen from '../MeetingStackScreens/MeetingScreen';

const Stack = createStackNavigator();

const MeetingStackScreen = () => {
    return (
        <Stack.Navigator initialRouteName="MeetingScreen">
            <Stack.Screen name="MeetingScreen" component={MeetingScreen} options = {{headerShown : false}} />
        </Stack.Navigator>
    )
}

export default MeetingStackScreen;