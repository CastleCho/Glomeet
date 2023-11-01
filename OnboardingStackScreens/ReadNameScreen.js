import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from '../Styles/Styles';

const ReadNameScreen = ({navigation}) => {

    const handleNextPagePress = () => {
        navigation.navigate('ReadContinentScreen')
    }

    const [selectedButton, setSelectedButton] = useState(null);  // 선택된 버튼의 상태를 null로 초기화
    const [nickname, setNickname] = useState(''); // 상태 변수 설정

    return(
        <SafeAreaView>
            <View>

                <Text>
                    반가워요!
                </Text>
                
                <Text>
                    프로필 선택 후 이름을 입력해주세요
                </Text>

                <TouchableOpacity
                    style={[styles.button, selectedButton === '프로필 사진1' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('프로필 사진1')}
                >
                    <Text style={styles.buttonText}>프로필 사진1</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedButton === '프로필 사진2' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('프로필 사진2')}                
                >
                    <Text style={styles.buttonText}>프로필 사진2</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedButton === '프로필 사진3' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('프로필 사진3')}                
                >
                    <Text style={styles.buttonText}>프로필 사진3</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedButton === '프로필 사진4' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('프로필 사진4')}                
                >
                    <Text style={styles.buttonText}>프로필 사진4</Text>
                </TouchableOpacity>
                
                <Text>닉네임 생성</Text>
                <TextInput
                    placeholder="닉네임을 입력하세요"
                    value={nickname}
                    onChangeText={setNickname} // 입력된 값으로 상태 업데이트
                />

            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (!selectedButton) {
                        Alert.alert('실패', '프로필을 골라주세요.'); // 경고 메시지 표시
                        return;
                    } else if (!nickname.trim()) {
                        Alert.alert('실패', '닉네임을 입력하세요'); // 경고 메시지 표시
                        return;
                    } else {
                        handleNextPagePress()
                    }
                }}
                // onPress={handleOnPress}            
            >
                <Text style={styles.buttonText}>다음으로 넘어가기</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default ReadNameScreen;
