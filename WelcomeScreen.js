import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Styles/Styles";
import BasicButton from "./Styles/BasicButton";

const WelcomeScreen = ({navigation}) => {

    const handleButtonPress = () => {
        navigation.replace('LoginScreen')
    }

    return (
        <SafeAreaView style={{backgroundColor: '#5782F1', flex: 1}}>
            <Image source={require('./images/wel_background.png')} style={{width: 393, height: 780, position: 'absolute', marginTop: 50}}/>
            <View style={{marginLeft:30}}>
                <Text style={{fontFamily: "GmarketSansBold", fontSize: 40, color: '#FFFFFF',marginTop: 60, lineHeight: 55}}> 글로밋과 함께하는 {"\n"} 글로벌 교류</Text>
                <Text style={{fontFamily: "GmarketSansBold", fontSize: 40, color: '#FFFFFF',marginTop: 371, lineHeight: 55}}> 오늘의 매칭을 {"\n"} 만나러가보아요!</Text>
            </View>
            <BasicButton
            style={{marginTop: 50,width: 318, backgroundColor: 'white', shadowColor: '#000000', shadowOffset: {width: 0, height: 3}, shadowOpacity: 0.5, shadowRadius: 2, elevation: 5}}
            title="로그인 하러가기"
            textStyle={{color: '#5782F1'}}
            onPress={handleButtonPress}
            />
                    
        </SafeAreaView>
    )
}

export default WelcomeScreen;