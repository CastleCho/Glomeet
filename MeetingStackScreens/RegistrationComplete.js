import React from 'react';
import { View, StyleSheet,TouchableOpacity, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import complete from '../images/complete.png'
import BasicButton from '../Styles/BasicButton.js';

const MatchingLoading = ({navigation}) => {

    const goToHomeScreen = () => {
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles.container}>
            <LinearGradient
            colors={['rgba(65, 114, 241, 0.1)', 'rgba(255, 255, 255, 0.1)']}
            style={[styles.gradient, { left: '-5%', marginTop:'16%' }]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            />
            <LinearGradient
            colors={['rgba(65, 114, 241, 0.1)', 'rgba(255, 255, 255, 0.1)']}
            style={[styles.gradient, { left: '26%', marginTop:'3%' }]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            />
            <LinearGradient
            colors={['rgba(65, 114, 241, 0.1)', 'rgba(255, 255, 255, 0.1)']}
            style={[styles.gradient, { left: '63%',  marginTop:'41%' }]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            />

            <View style={styles.shapeContainer}>
                <Image source={complete} style={styles.imageStyle}/>
                <Text style={styles.textInsideShape}>등록 완료</Text>
                <View style={[styles.dashedLine, {marginBottom: 15}]} />

                <View style={styles.rowContainer}>
                    <Text style={styles.rowTitle}>글 제목</Text>
                    <Text style={styles.rowContent}>테니스 치실 분</Text>
                </View>
                
                <View style={styles.rowContainer}>
                    <Text style={styles.rowTitle}>키워드</Text>
                    <View style={styles.rowcontain}>
                        <Text style={styles.rowContentToggle}>운동</Text>
                    </View>
                    
                </View>
                
                <View style={styles.rowContainer}>
                    <Text style={styles.rowTitle}>모임 날짜</Text>
                    <Text style={styles.rowContent}>2023년 10월 8일 토요일</Text>
                </View>
                <View style={styles.dashedLine} />
                <Text style={styles.footerText}>
                모임 일정이 가까워지면 PUSH 알림을 보내드립니다.{"\n"}
                모임 내역은 
                <TouchableOpacity onPress={goToHomeScreen}>
                    <Text style={styles.linkText}>홈 화면</Text>
                </TouchableOpacity>
                에서 확인 가능합니다.'
                </Text>
                
            </View>
        </View>
            
    
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradient: {
        borderTopLeftRadius: 140,
        borderTopRightRadius: 140,
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '53%',
    },
    confirmButton: {
        backgroundColor: '#5782F1', // 버튼 배경색
        padding: 15,
        borderRadius: 25,
        marginTop: 50,
        alignItems: 'center',
        },
    confirmButtonText: {
        color: 'white', // 버튼 텍스트 색상
        fontSize: 18,
        fontFamily: 'GmarketSansBold', // 텍스트 폰트
    },
        gradientContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shapeContainer: {
        width: 307,
        height: 334,  
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    textInsideShape: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'Pretendard-Bold',
        textAlign: 'center',
        color: '#25282B'
    },
    confirmButton: {
        backgroundColor: '#5782F1',
        padding: 10,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    imageStyle: {
        width: 207,
        height: 40,
    },
    dashedLine: {
        width: 249, 
        borderWidth: 1, 
        borderColor: '#F0F0F0', 
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 249,
        marginBottom: 15,
      
    },
    rowTitle: {
        fontSize: 15,
        fontFamily: 'Pretendard-Bold',
        color: '#25282B',
        width: 77
    },
    rowContent: {
        fontSize: 15,
        fontFamily: 'Pretendard-Regular',
        color: '#949698',

    },
    rowContentToggle: {
        fontSize: 12,
        fontFamily: 'Pretendard-Regular',
        color:'#949698',
    },
    footerText: {
        fontSize: 13,
        color: '#767676',
        marginTop: 20,
        fontFamily:'Pretendard-Regular',
        textAlign: 'center',
        lineHeight: 20,
    },
    rowcontain: {
        width:53,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#F1F1F1',
        borderWidth: 1,
        borderRadius: 10
    },
    linkText: {
        color: '#5782F1',
        fontFamily: 'Pretendard-Regular',
        fontSize:13,
        textDecorationLine: 'underline'
    },
});

export default MatchingLoading;
