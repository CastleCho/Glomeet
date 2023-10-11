import { useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
const SplashScreen = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('WelcomeScreen')
        },2000)
    })

    return (
        <SafeAreaView>
            <View>
                <Text>SplashScreen</Text>
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen;