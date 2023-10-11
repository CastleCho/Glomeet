import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen'
import HomeStackScreen from './StackScreens/HomeStackScreen';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import Main from './NavBar/Main';
import OnboardingStackScreen from './StackScreens/OnboardingStackScreen';
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen'>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options = {{headerShown :false}}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options = {{headerShown :false}}/>
                <Stack.Screen name="Main" component = {Main} options = {{headerShown :false}}/>
                <Stack.Screen name = "OnboardingStackScreen" component={OnboardingStackScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;