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
                <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 35, color: 'black', marginTop: '15%', marginLeft: '7%'}}>글로밋과 함께하는</Text>
                <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 35, color: 'black', marginTop: '5%', marginLeft: '7%'}}>글로벌 교류</Text>
                <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 35, color: 'black', marginTop: '80%', marginLeft: '7%'}}>오늘의 매칭을</Text>
                <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 35, color: 'black', marginTop: '5%', marginLeft: '7%', marginBottom: '20%'}}>만나러 가보아요!</Text>
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

