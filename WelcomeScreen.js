import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Styles/Styles";

const WelcomeScreen = ({navigation}) => {

    const handleButtonPress = () => {
        navigation.replace('LoginScreen')
    }

    return (
        <SafeAreaView style={{backgroundColor: '#5782F1', flex: 1}}>
            <View style={{flex:1, alignItems: 'center'}}>
                <Text style={{fontFamily: "pretendard-ExtraBold", fontSize: 40, color: '#FFFFFF',zIndex: 1, marginTop: 60}}> 글로밋과 함께하는 {"\n"} 글로벌 교류</Text>
                <Image source={require('./images/wel_background.png')} style={{width: 393, height: 780, position: 'absolute', marginTop: 50}}/>
                <Text style={{fontFamily: "pretendard-ExtraBold", fontSize: 40, color: '#FFFFFF',zIndex: 1, marginTop: 381, marginLeft: -30}}> 오늘의 매칭을 {"\n"} 만나러가보아요!</Text>
                <TouchableOpacity
                    style={[styles.button, {position: 'absolute', borderWidth: 0, top: 680, zIndex: 1, backgroundColor: 'white', shadowColor: '#000000', shadowOffset: {width: 0, height: 3}, shadowOpacity: 0.5, shadowRadius: 2, elevation: 5}]}
                    onPress={handleButtonPress}
                >
                    <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 18, color: '#5782F1', fontWeight: 'bold'}}>
                        로그인 하러가기
                    </Text>
                </TouchableOpacity>
            </View>        
        </SafeAreaView>
    )
}

export default WelcomeScreen;