import { SafeAreaView, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const ReadHobbyScreen = ({navigation}) => {
    const handleNextPagePress = () =>{
        navigation.navigate('ReadTendencyScreen')
    }
    return(
        <SafeAreaView>
            <View>
                <Text>
                    취미 받는 스크린
                </Text>
            </View>
            <TouchableOpacity onPress = {handleNextPagePress}>
                <Text>다음으로 넘어가기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ReadHobbyScreen;
