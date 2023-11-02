import { createStackNavigator } from '@react-navigation/stack';
import MeetingScreen from '../MeetingStackScreens/MeetingScreen';
import MeetingDetailScreen from '../MeetingStackScreens/MeetingDetailScreen'
import {Image} from "react-native";

const Stack = createStackNavigator();

const MeetingStackScreen = () => {
    return (
        <Stack.Navigator initialRouteName="MeetingScreen">
            <Stack.Screen 
                name="MeetingScreen" 
                component={MeetingScreen} 
                options={{
                    headerShown: true,
                    headerTitle: () => (
                        <Image
                            source={require('../images/logo_glomeet.png')}
                            style={{ width: 105, height: 39 }}
                        />
                    )
                }}
            />
            <Stack.Screen name="MeetingDetailScreen" component={MeetingDetailScreen} 
                options={{
                    headerShown: true,
                    headerTitle: () => (
                        <Image
                            source={require('../images/logo_glomeet.png')}
                            style={{ width: 105, height: 39 }}
                        />
        )
    }}
/>
        </Stack.Navigator>
    );
}
export default MeetingStackScreen;

