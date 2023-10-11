import { SafeAreaView, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReadNameScreen = ({navigation}) => {

    const handleNextPagePress = () =>{
        navigation.navigate('ReadContinentScreen')
    }

    return(
        <SafeAreaView>
            <View>
                <Text>
                    이름 받는 스크린
                </Text>
            </View>
            <TouchableOpacity onPress={handleNextPagePress}>
                <Text>다음으로 넘어가기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ReadNameScreen;
