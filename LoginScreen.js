import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, ActivityIndicator, View, Image, TextInput, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./Styles/Styles";
import AjouLogo from './images/AjouLogo.png'

const LoginScreen = ({navigation}) => {

    const handleLoginButtonPress = () => {
        navigation.replace('OnboardingStackScreen')
    }

    const [id, setId] = useState(''); // 상태 변수 설정
    const [password, setPassword] = useState(''); // 상태 변수 설정
    const [isChecked, setIsChecked] = useState(false); // 체크박스 상태

    // 체크박스 클릭 시 상태 토글
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const handleOnPress = () => {
        if (!id.trim() || !password.trim()) { // 입력값이 없는 경우
            Alert.alert('로그인 실패', '값을 입력하세요'); // 경고 메시지 표시
            return;
        }else{
            handleLoginButtonPress();
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    source={AjouLogo}
                    style={{
                        alignItems: "center", alignContent: 'center', width: 200, height:186, marginTop: 100, marginBottom: 67
                    }}
                />
            </View>

            <View style={{width: 330, height: 60}}>
                <View style={{borderWidth: 0.5, height: 55, bordercolor: '#887E7',justifyContent: 'center', marginBottom: 15, borderRadius: 5}}>
                    <TextInput
                        style={{marginLeft: 15, fontFamily: 'pretendard-Medium', fontSize: 16}}
                        placeholder="아이디를 입력하세요."
                        value={id}
                        onChangeText={setId}
                    />
                </View>

                <View style={{borderWidth: 0.5, height: 55, bordercolor: '#887E7',justifyContent: 'center', marginBottom: 15, borderRadius: 5}}>
                    <TextInput
                        style={{marginLeft: 15, fontFamily: 'pretendard-Medium', fontSize: 16}}
                        placeholder="비밀번호를 입력하세요."
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 220, marginTop: 80}}>
                <TouchableOpacity style={{    
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: '#5782F1',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 5,
                }} 
                    onPress={toggleCheckbox}>
                    {isChecked && <View style={{    
                        width: 12,
                        height: 12,
                        borderRadius: 6,
                        backgroundColor: '#5782F1',
                    }}
                    />}
                </TouchableOpacity>
                <Text style={{fontFamily: 'pretendard-Medium', fontSize: 16, color: '#635C5C'}}>자동 로그인</Text>
            </View>

            <View style={[styles.button, {top: 65, width: '80%', shadowColor: '#000', shadowOffset: {width: 0, height: 3}, shadowOpacity: 0.5, shadowRadius: 2, elevation: 5}]}>
                <TouchableOpacity onPress={handleOnPress}>

                    <Text style={{color: 'white',fontFamily: 'pretendard-Bold', fontSize: 18}}>
                        로그인
                    </Text>
                    
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default LoginScreen