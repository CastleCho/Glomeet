import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Animated } from 'react-native';

const MatchingLoading = ({navigation}) => {
    // 페이드인 애니메이션 값 초기화
    const fadeAnim = useRef(new Animated.Value(0.1)).current; // 시작값을 0.3으로 설정
    const [dots, setDots] = useState('');
    useEffect(() => {
        const timeout = setTimeout(() => {
          navigation.navigate('MatchingComplete'); // 여기에 이동하고 싶은 화면의 이름을 넣습니다.
        }, 5000); // 5초 후에 실행
    
        return () => clearTimeout(timeout); // 컴포넌트가 언마운트될 때 타이머를 제거합니다.
      }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => {
              if (prevDots.length < 2) {
                return prevDots + '.';
              } else {
                return '';
              }
            });
          }, 500);
        // 이미지가 서서히 나타나게 하는 페이드인 애니메이션
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,  // 2초 동안
          useNativeDriver: true  // 네이티브 드라이버 사용
        }).start();
      }, []);
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
            <Text style={styles.loadingtext}>매칭중{dots}.</Text>
            
                <Animated.Image 
                    source={require('../images/MatchingLoadingChar.png')}
                    style={{ ...styles.loadingChar, opacity: fadeAnim }}
                />
            
        </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    
    alignItems: 'center',
  },
  gradient: {
    borderTopLeftRadius: 140,
    borderTopRightRadius: 140,
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '53%',
  },
  loadingtext: {
    fontFamily: 'GmarketSansBold',
    color: '#5782F1',
    fontSize: 50,
    marginTop: 95,
  },
  loadingChar: {
    width: 243,
    height: 308,
    marginTop: 55,
  }
});

export default MatchingLoading;
