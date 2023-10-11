import { createStackNavigator } from '@react-navigation/stack';
import ReadNameScreen from '../OnboardingStackScreens/ReadNameScreen';
import ReadHobbyScreen from '../OnboardingStackScreens/ReadHobbyScreen';
import ReadContinentScreen from '../OnboardingStackScreens/ReadContinentScreen';
import ReadTendencyScreen from '../OnboardingStackScreens/ReadTendencyScreen';

const Stack = createStackNavigator();

const OnboardingStackScreen = () => {
    return (
        <Stack.Navigator initialRouteName="ReadNameScreen">
            <Stack.Screen name="ReadNameScreen" component={ReadNameScreen} options = {{headerShown : false}} />
            <Stack.Screen name="ReadHobbyScreen" component={ReadHobbyScreen} options = {{headerShown : false}} />
            <Stack.Screen name="ReadContinentScreen" component={ReadContinentScreen} options = {{headerShown : false}} />
            <Stack.Screen name="ReadTendencyScreen" component={ReadTendencyScreen} options = {{headerShown : false}} />         
        </Stack.Navigator>
    )
}

export default OnboardingStackScreen;