import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from '../Styles/Styles';

const ReadContinentScreen = ({navigation}) => {

    const handleNextPagePress = () =>{
        navigation.navigate('ReadHobbyScreen')
    }

    const [selectedButton, setSelectedButton] = useState(null);  // 선택된 버튼의 상태를 null로 초기화
    
    return(
        <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
            <View>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../images/1.png')} style={{width: 337, height: 2.4, marginTop: 10, marginBottom: 70}} />
                </View>

                <View style={{alignItems: 'center', marginBottom: 20, width: 327, marginLeft: 32}}>
                    <Text style={{fontSize: 24, fontFamily:'pretendard-semiBold', marginBottom: 20, textAlign: 'center'}}>
                        당신은 {'\n'}어느 대륙 사람인가요?
                    </Text>
                    
                    <Text style={{fontSize: 16,fontFamily:'pretendard-Regular', textAlign: 'center'}}>
                        Choose one option for now. You can explore others later.
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '아시아' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('아시아')}
                >
                    <Text style={[ {fontFamily: 'pretendard-SemiBold',fontSize: 16, color: selectedButton === '아시아' ? 'white' : '#868686'}]}>아시아</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '유럽' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('유럽')}
                >
                    <Text style={[ {fontFamily: 'pretendard-SemiBold',fontSize: 16,  color: selectedButton === '유럽' ? 'white' : '#868686'}]}>유럽</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '북아메리카' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('북아메리카')}
                >
                    <Text style={[{fontFamily: 'pretendard-SemiBold',fontSize: 16, color: selectedButton === '북아메리카' ? 'white' : '#868686'}]}>북아메리카</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '남아메리카' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('남아메리카')}
                >
                    <Text style={[{fontFamily: 'pretendard-SemiBold',fontSize: 16,  color: selectedButton === '남아메리카' ? 'white' : '#868686'}]}>남아메리카</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '오세아니아' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('오세아니아')}
                >
                    <Text style={[{fontFamily: 'pretendard-SemiBold',fontSize: 16, color: selectedButton === '오세아니아' ? 'white' : '#868686'}]}>오세아니아</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '아프리카' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('아프리카')}
                >
                    <Text style={[ {fontFamily: 'pretendard-SemiBold',fontSize: 16, color: selectedButton === '아프리카' ? 'white' : '#868686'}]}>아프리카</Text>
                </TouchableOpacity>
                </View>

            </View>
            <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                style={[styles.button, {marginTop: 50}]}
                onPress={() => {
                    if (selectedButton) {
                        handleNextPagePress();
                    } else {
                        alert('버튼을 하나 선택해주세요.');
                    }
                }}
            >
                <Text style={{fontFamily: 'pretendard-Bold', fontSize: 18, color: '#FFFFFF'}}>다음으로 넘어가기</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ReadContinentScreen;
