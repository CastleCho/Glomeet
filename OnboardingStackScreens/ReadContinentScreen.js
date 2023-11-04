import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from '../Styles/Styles';

const ReadContinentScreen = ({navigation}) => {

    const handleNextPagePress = () =>{
        navigation.navigate('ReadHobbyScreen')
    }

    const [selectedButton, setSelectedButton] = useState(null);  // 선택된 버튼의 상태를 null로 초기화
    
    return(
        <SafeAreaView style={{backgroundColor: '#FFFFFF', height: 900}}>
            <View>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../images/1.png')} style={{width: 337, height: 2.4, marginTop: 10, marginBottom: 30}} />
                </View>

                <View style={{alignItems: 'center', marginBottom: 20, width: 327, marginLeft: 32}}>
                    <Text style={{fontSize: 25, marginBottom: 20, textAlign: 'center'}}>
                        당신은 어느 대륙 사람인가요?
                    </Text>
                    
                    <Text style={{fontSize: 15, textAlign: 'center'}}>
                        Choose one option for now. You can explore others later.
                    </Text>
                </View>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === 'Asia' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('Asia')}
                >
                    <Text style={[styles.buttonText, {fontWeight: 'bold', color: selectedButton === 'Asia' ? 'white' : '#868686'}]}>Asia</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === 'Europe' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('Europe')}
                >
                    <Text style={[styles.buttonText, {fontWeight: 'bold', color: selectedButton === 'Europe' ? 'white' : '#868686'}]}>Europe</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === 'North America' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('North America')}
                >
                    <Text style={[styles.buttonText, {fontWeight: 'bold', color: selectedButton === 'North America' ? 'white' : '#868686'}]}>North America</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === 'South America' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('South America')}
                >
                    <Text style={[styles.buttonText, {fontWeight: 'bold', color: selectedButton === 'South America' ? 'white' : '#868686'}]}>South America</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === 'Oceania' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('Oceania')}
                >
                    <Text style={[styles.buttonText, {fontWeight: 'bold', color: selectedButton === 'Oceania' ? 'white' : '#868686'}]}>Oceania</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === 'Africa' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('Africa')}
                >
                    <Text style={[styles.buttonText, {fontWeight: 'bold', color: selectedButton === 'Africa' ? 'white' : '#868686'}]}>Africa</Text>
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

export default ReadContinentScreen;
