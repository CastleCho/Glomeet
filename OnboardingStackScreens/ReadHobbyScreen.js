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
        <SafeAreaView style={{backgroundColor: '#FFFFFF', height: 900}}>
            <View>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../images/2.png')} style={{width: 337, height:2.4, marginTop: 10, marginBottom: 30}} />
                </View>

                <View style={{alignItems: 'center', marginBottom: 20, width: 327, marginLeft: 32}}>
                    <Text style={{fontSize: 25, marginBottom: 20, textAlign: 'center'}}>
                        당신의 관심사는 무엇인가요?
                    </Text>
                    <Text style={{fontSize: 15, textAlign: 'center'}}>
                        Choose one option for now. You can explore others later.
                    </Text>
                </View>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '운동' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('운동')}
                >
                    <Text style={[styles.buttonText, {fontWeight: 'bold', color: selectedButton === '운동' ? 'white' : '#868686'}]}>운동</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '여행' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('여행')}
                >
                    <Text style={[styles.buttonText, {fontWeight: 'bold', color: selectedButton === '여행' ? 'white' : '#868686'}]}>여행</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '게임' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('게임')}
                >
                    <Text style={[styles.buttonText, {fontWeight: 'bold', color: selectedButton === '게임' ? 'white' : '#868686'}]}>게임</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '문화' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('문화')}
                >
                    <Text style={[styles.buttonText, {fontWeight: 'bold', color: selectedButton === '문화' ? 'white' : '#868686'}]}>문화</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '음식' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('음식')}
                >
                    <Text style={[styles.buttonText, {fontWeight: 'bold', color: selectedButton === '음식' ? 'white' : '#868686'}]}>음식</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '언어' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('언어')}
                >
                    <Text style={[styles.buttonText, {fontWeight: 'bold', color: selectedButton === '언어' ? 'white' : '#868686'}]}>언어</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity
                style={[styles.button, {marginTop: 80}]}
                onPress={() => {
                    if (selectedButton) {
                        handleNextPagePress();
                    } else {
                        alert('버튼을 하나 선택해주세요.');
                    }
                }}
            >
                <Text style={[styles.buttonText, {fontWeight: 'bold'}]}>다음으로 넘어가기</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default ReadHobbyScreen;