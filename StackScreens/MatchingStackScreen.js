import { createStackNavigator } from '@react-navigation/stack';
import MatchingScreen from '../MatchingStackScreens/MatchingScreen';

const Stack = createStackNavigator();

const MatchingStackScreen = () => {
    return (
        <Stack.Navigator initialRouteName="MatchingScreen">
            <Stack.Screen name="MatchingScreen" component={MatchingScreen} options = {{headerShown : false}} />
        </Stack.Navigator>
    )
}

export default MatchingStackScreen;