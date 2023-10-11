import { SafeAreaView, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const WelcomeScreen = ({navigation}) => {

    const handleButtonPress = () => {
        navigation.replace('LoginScreen')
    }

    return (
        <SafeAreaView>
            <View>
                <Text>웰컴 스크린</Text>
            </View>
            <View>
                <TouchableOpacity onPress={handleButtonPress}>
                    <Text>
                        로그인 하러가기
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen;