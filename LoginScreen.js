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
                        alignItems: "center", alignContent: 'center', width: 200, resizeMode: 'contain', margin: '5%'
                    }}
                />
            </View>

            <View style={{width: '80%'}}>

                <View style={{borderWidth: 1, height: 55, justifyContent: 'center', marginBottom: 15, borderRadius: 5}}>
                    <TextInput
                        style={{marginLeft: 15}}
                        placeholder="아이디를 입력하세요."
                        value={id}
                        onChangeText={setId} // 입력된 값으로 상태 업데이트
                    />
                </View>

                <View style={{borderWidth: 1, height: 55, justifyContent: 'center', marginBottom: 15, borderRadius: 5}}>
                    <TextInput
                        style={{marginLeft: 15}}
                        placeholder="비밀번호를 입력하세요."
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword} // 입력된 값으로 상태 업데이트
                    />
                </View>

            </View>

            {/* <View style={{marginLeft: 250, flexDirection: 'row'}}>
                <Text>자동로그인</Text>
            </View> */}

            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 220, marginBottom: 20}}>
                <TouchableOpacity style={{    
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: '#000',
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
                <Text style={styles.label}>자동 로그인</Text>
            </View>

            <View style={[styles.button, {top: 65, width: '80%', shadowColor: '#000', shadowOffset: {width: 0, height: 6}, shadowOpacity: 0.5, shadowRadius: 2, elevation: 5}]}>
                <TouchableOpacity onPress={handleOnPress}>

                    <Text style={{color: 'white'}}>
                        로그인
                    </Text>
                    
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default LoginScreen