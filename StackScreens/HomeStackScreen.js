import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../MainStackScreens/HomeScreen';
const Stack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options = {{headerShown : false}} />
        </Stack.Navigator>
    )
}

export default HomeStackScreen;