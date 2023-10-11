import { createStackNavigator } from '@react-navigation/stack';
import ChattingScreen from '../ChattingStackScreens/ChattingScreen';

const Stack = createStackNavigator();

const ChattingStackScreen = () => {
    return (
        <Stack.Navigator initialRouteName="ChattingScreen">
            <Stack.Screen name="ChattingScreen" component={ChattingScreen} options = {{headerShown : false}} />
        </Stack.Navigator>
    )
}

export default ChattingStackScreen;