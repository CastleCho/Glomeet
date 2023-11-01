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
                        alignItems: "center", alignContent: 'center', width: 200, resizeMode: 'contain', margin: '10%'
                    }}
                />
            </View>
            <View>
                <Text>아이디</Text>
                <TextInput
                    placeholder="아이디를 입력하세요"
                    value={id}
                    onChangeText={setId} // 입력된 값으로 상태 업데이트
                />
                <Text>비밀번호</Text>
                <TextInput
                    placeholder="비밀번호를 입력하세요"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword} // 입력된 값으로 상태 업데이트
                />

            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={handleOnPress}>
                    <Text>
                        로그인
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen