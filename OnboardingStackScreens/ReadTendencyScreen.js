import { SafeAreaView, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const ReadTendencyScreen = ({navigation}) => {
    const handleNextPagePress = () => {
        navigation.replace('Main');
    }
    return(
        <SafeAreaView>
            <View>
                <Text>
                    성향 받는 스크린
                </Text>
            </View>
            <TouchableOpacity onPress = {handleNextPagePress}>
                <Text>시작하기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ReadTendencyScreen;
