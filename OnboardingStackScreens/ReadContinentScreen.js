import { SafeAreaView, View, Text } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from '../Styles/Styles';

const ReadContinentScreen = ({navigation}) => {

    const handleNextPagePress = () =>{
        navigation.navigate('ReadHobbyScreen')
    }

    const [selectedButton, setSelectedButton] = useState(null);  // 선택된 버튼의 상태를 null로 초기화
    
    return(
        <SafeAreaView>
            <View>
                <Text>
                    대륙 받는 스크린
                </Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (selectedButton) {
                        handleNextPagePress();
                    } else {
                        alert('버튼을 하나 선택해주세요.');
                    }
                }}
            >
                <Text style={styles.buttonText}>다음으로 넘어가기</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default ReadContinentScreen;
