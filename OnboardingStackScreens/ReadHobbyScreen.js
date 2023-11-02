import React, { useState } from 'react';
import { SafeAreaView, View, Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from '../Styles/Styles';

const ReadHobbyScreen = ({navigation}) => {

    const handleNextPagePress = () =>{
        navigation.navigate('ReadTendencyScreen')
    }
    const [selectedButton, setSelectedButton] = useState(null);  // 선택된 버튼의 상태를 null로 초기화

    return(
        <SafeAreaView>
            <View>
                <Text>
                    Choose one option for now. You can explore others later.
                </Text>

                <TouchableOpacity
                    style={[styles.button, selectedButton === '운동' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('운동')}
                >
                    <Text style={styles.buttonText}>운동</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedButton === '여행' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('여행')}
                >
                    <Text style={styles.buttonText}>여행</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedButton === '게임' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('게임')}
                >
                    <Text style={styles.buttonText}>게임</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedButton === '문화' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('문화')}
                >
                    <Text style={styles.buttonText}>문화</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedButton === '음식' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('음식')}
                >
                    <Text style={styles.buttonText}>음식</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedButton === '언어' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('언어')}
                >
                    <Text style={styles.buttonText}>언어</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (selectedButton) {
                        handleNextPagePress();
                    } else {
                        alert('버튼을 하나 선택해주세요.');
                    }
                }}
            >
                <Text style={styles.buttonText}>다음으로 넘어가기</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default ReadHobbyScreen;