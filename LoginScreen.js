import { SafeAreaView, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

const LoginScreen = ({navigation}) => {

    const handleLoginButtonPress = () => {
        navigation.replace('OnboardingStackScreen')
    }

    return (
        <SafeAreaView>
            <View>
                <Text>
                    로그인스크린
                </Text>
            </View>
            <View>
                <TouchableOpacity onPress={handleLoginButtonPress}>
                    <Text>
                        로그인하기
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen