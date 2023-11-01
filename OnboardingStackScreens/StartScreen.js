import { React } from "react";
import { SafeAreaView, View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
// import 'react-native-gesture-handler';
// import styles from '../Styles/Styles';

const StartScreen = ({navigation}) => {
    const handleNextPagePress = () => {
        navigation.replace('Main');
    }

    return(
        <SafeAreaView style={styles.container}>

            <View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        source={require('../images/friend.png')}
                        style={{width:'70%', height: 320, resizeMode: 'cover', margin: 0}}
                    />
                </View>
                <View style={{height: 130, alignItems: 'center'}}>
                    <Text style={{fontWeight:'bold', fontSize: 20}}>
                        이제 친구를 만나러 갈 수 있어요!
                    </Text>
                    <Text></Text>
                    <Text>
                        글로밋 앱은 건전하고 건강한 외국인 교류 문화를 만들어갑니다.
                    </Text>
                </View>
                <View style={{marginBottom: '10%'}}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress = {handleNextPagePress}
                    >
                        <Text style={styles.buttonText}>시작하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    button: {
        marginHorizontal: '5%',
        width: '90%',
        backgroundColor: '#5782F1',
        borderRadius: 25,
        justifyContent: 'center', // 텍스트를 세로로 중앙에 위치시키기 위해 추가
        alignItems: 'center',
        height: 52,
        marginVertical:'3%',
    },
    buttonText: {
        fontFamily: 'Pretendard-Bold',
        color: '#ffffff',
        fontSize: 18,
    },
});

export default StartScreen;