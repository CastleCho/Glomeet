import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from '../Styles/Styles';

const ReadContinentScreen = ({navigation}) => {

    const handleNextPagePress = () =>{
        navigation.navigate('ReadHobbyScreen')
    }

    const [selectedButton, setSelectedButton] = useState(null);  // 선택된 버튼의 상태를 null로 초기화
    
    return(
        <SafeAreaView>
            <View>
                <Text>
                    당신은 어느 대륙 사람인가요?
                </Text>
                
                <Text>
                    Choose one option for now. You can explore others later.
                </Text>

                <TouchableOpacity
                    style={[styles.button, selectedButton === 'Asia' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('Asia')}
                >
                    <Text style={styles.buttonText}>Asia</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedButton === 'Europe' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('Europe')}
                >
                    <Text style={styles.buttonText}>Europe</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedButton === 'North America' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('North America')}
                >
                    <Text style={styles.buttonText}>North America</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedButton === 'South America' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('South America')}
                >
                    <Text style={styles.buttonText}>South America</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedButton === 'Oceania' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('Oceania')}
                >
                    <Text style={styles.buttonText}>Oceania</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedButton === 'Africa' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('Africa')}
                >
                    <Text style={styles.buttonText}>Africa</Text>
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

export default ReadContinentScreen;
