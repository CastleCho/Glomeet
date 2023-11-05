import { React } from "react";
import { SafeAreaView, View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import BasicButton from "../Styles/BasicButton";

const StartScreen = ({navigation}) => {
    const handleNextPagePress = () => {
        navigation.replace('Main');
    }

    return(
        <SafeAreaView style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../images/3.png')} style={{width: 337, height: 2.4, marginTop: 20}} />
                    <Image
                        source={require('../images/friend.png')}
                        style={{width:286, height: 375,  marginTop: 24}}
                    />
                </View>
                <View style={{alignItems: 'center', marginTop: 73}}>
                    <Text style={{fontFamily: 'Pretendard-SemiBold', fontSize: 24, marginBottom: 10, color:'#000'}}>
                        이제 친구를 만나러 갈 수 있어요!
                    </Text>
                    <Text style={{fontFamily: 'Pretendard-Regular', color: '#898989', fontSize: 12, marginVertical:27}}>
                        글로밋 앱은 건전하고 건강한 외국인 교류 문화를 만들어갑니다.
                    </Text>
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                    <BasicButton
                    title='시작하기'
                    onPress = {handleNextPagePress}
                    />
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});

export default StartScreen;