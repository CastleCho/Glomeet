import { SafeAreaView, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./Styles/Styles";

const WelcomeScreen = ({navigation}) => {

    const handleButtonPress = () => {
        navigation.replace('LoginScreen')
    }

    return (
        <SafeAreaView>
            <View>
                <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 30, color: 'black', marginTop: '15%', marginLeft: '5%'}}>글로밋과 함께하는</Text>
                <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 30, color: 'black', marginTop: '5%', marginLeft: '5%'}}>글로벌 교류</Text>
                <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 30, color: 'black', marginTop: '60%', marginLeft: '5%'}}>오늘의 매칭을</Text>
                <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 30, color: 'black', marginTop: '5%', marginBottom: '20%', marginLeft: '5%'}}>만나러 가보아요!</Text>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleButtonPress}
                >
                    <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 20, color: 'black'}}>
                        로그인 하러가기
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen;

