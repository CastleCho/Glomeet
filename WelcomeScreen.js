import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Styles/Styles";

const WelcomeScreen = ({navigation}) => {

    const handleButtonPress = () => {
        navigation.replace('LoginScreen')
    }

    return (
        <SafeAreaView style={{backgroundColor: '#5782F1', flex: 1}}>
            <View style={{flex:1, alignItems: 'center'}}>
                <Image source={require('./images/start.png')} style={{width: 393, height: 780, position: 'absolute', marginTop: 20, shadowColor: '#000000', shadowOffset: {width: 0, height: 3}, shadowOpacity: 0.5, shadowRadius: 2}} resizeMode="cover" />
                <TouchableOpacity
                    style={[styles.button, {position: 'absolute', borderWidth: 0, top: 680, zIndex: 1, backgroundColor: 'white', shadowColor: '#000000', shadowOffset: {width: 0, height: 3}, shadowOpacity: 0.5, shadowRadius: 2, elevation: 5}]}
                    onPress={handleButtonPress}
                >
                    <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 20, color: '#5782F1', fontWeight: 'bold'}}>
                        로그인 하러가기
                    </Text>
                </TouchableOpacity>
            </View>        
        </SafeAreaView>
    )
}

export default WelcomeScreen;