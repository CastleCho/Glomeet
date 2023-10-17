import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import styles from '../Styles/Styles.js';
import BasicButton from '../Styles/BasicButton.js'
import logo from '../images/notice_1.png'
import main from '../images/imgmatching_main2.png'
const MatchingScreen = ({navigation}) => {
    return(
        <SafeAreaView style= {styles.container}>
            <View style={styles.notice}>
                <Image source={logo} style={{width: 338, height: 93}} />
            </View> 
            <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 26, color: 'black', marginTop: '16%'}}>
                <Text>
                    오늘의
                </Text>
                <Text style={{color: '#5782F1'}}>
                {'\u00A0'}매칭 
                </Text>
                <Text>
                    을 시작해보세요!
                </Text>
            </Text>
            <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 14, color: '#B4B4B4', marginTop: '1%'}}>
            오늘은 또 어떤 새로운 친구를 만날까?👀
            </Text>
            <Image source={main} style={{width: 302, height: 214, marginTop: '11%'}}/>
            <View style={styles.shadowBox}>
                <Text style={{fontFamily: 'Pretendard-SemiBold', fontSize: 20, color: '#6E87E5'}}>
                    1,400P
                </Text>
                <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 11, color: '#949698'}}>
                    보유 포인트
                </Text>
            </View>
        
            <BasicButton title="매칭하러 가기" onPress={() => navigation.navigate('MatchingFilter')} />
        </SafeAreaView>
    )
}

export default MatchingScreen;