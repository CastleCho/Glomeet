import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import styles from '../Styles/Styles.js';
import BasicButton from '../Styles/BasicButton.js'
import logo from '../images/notice_1.png'
import main from '../images/imgmatching_main2.png'
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useState, useEffect } from 'react';
import BasicModal from '../Styles/BasicModal.js';
const MatchingComplete = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [time, setTime] = useState(60 * 60); // 초 단위로 1시간 설정

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
    }, []);

    // 초를 시:분:초 형태의 문자열로 변환하는 함수
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds - (hours * 3600)) / 60);
        const secs = seconds - (hours * 3600) - (minutes * 60);

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };
    return(
        <SafeAreaView style= {styles.container}>
            <BasicModal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                isVisible={modalVisible}
                onClose={() => setModalVisible(false)}
                onConfirm={() => {
                    navigation.replace('MatchingFilter');
                    setModalVisible(false);
                }}
            >
            </BasicModal>
            <View style={styles.notice}>
                <Image source={logo} style={{width: 338, height: 93}} />
            </View> 
            <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 26, color: 'black', marginTop: '4%'}}>
                
                <Text style={{color: '#5782F1'}}>
                    매칭 
                </Text>
                <Text>
                    이 완료되었어요!
                </Text>
            </Text>
            <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 14, color: '#B4B4B4', marginTop: '1%'}}>
                이제 메세지를 보내보세요 👀
            </Text>
            <View style={[styles.matchingcard, {marginTop:'7%'}]}>
                <LinearGradient
                    colors={['#BFD0FA', '#fff']}
                    style={[styles.gradient]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                <Image 
                    source={require('../images/JessicaIcon.png')}
                    style={{width:125, height:144}}
                />
                <Text style={{fontFamily: 'GmarketSansBold', fontSize: 34, color: '#001F6F',marginTop:10}}>
                    Jessica
                </Text>
                <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 14, color: '#949698'}}>
                    #경영학과  #카페{'\n'} #21   #회화공부
                </Text>
                <TouchableOpacity style={styles.chatbutton}>
                    <Text style={{fontFamily: 'Pretendard-Regular', fontSize: 15, color: '#635C5C'}}>
                        Jessica에게 메세지 보내기
                    </Text>
                    <View style={{flex:1}}></View>
                    <Image 
                        source={require('../images/entericon.png')}
                        style={{width:20, height:17}}
                    />
                </TouchableOpacity>
                </LinearGradient>
            </View>
            <Text style={{ fontFamily: 'Pretendard-Regular', fontSize: 12, color: '#8A8A8A', marginTop: 43, letterSpacing: 1.3 }}>
                🔥 다음 매칭까지 {formatTime(time)}
            </Text>
            <View style={{  borderBottomWidth: 1,
                            borderBottomColor: '#CACCCF',
                            width:'100%'
                            
                        }}
            />
            <BasicButton style={{marginTop:13}} title="500P로 추가 매칭하기" onPress={() => setModalVisible(true)} />
        </SafeAreaView>
    )
}

export default MatchingComplete;