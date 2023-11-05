import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Alert, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from '../Styles/Styles';

const ReadNameScreen = ({navigation}) => {

    const handleNextPagePress = () => {
        navigation.navigate('ReadContinentScreen')
    }

    const [selectedButton, setSelectedButton] = useState(null);  // 선택된 버튼의 상태를 null로 초기화
    const [inputValue, setInputValue] = useState('');
    const [showCheck, setShowCheck] = useState(false);

    const handleChangeText = (text) => {
        setInputValue(text);
        if (text.length > 5) {
            setTimeout(() => setShowCheck(true), 1000);
        } else {
            setShowCheck(false);
        }
    };

    const renderCheckmark = (imageName) => {
        if (selectedButton == imageName) {
            return (
                <View style={{position: 'absolute', bottom: 0, alignSelf: 'center',}}>
                    <Image source={require('../images/check.png')} style={{width: 30, height: 30}} />
                </View>
            );
        }
        return null;
    };

    return(
        <SafeAreaView style={{backgroundColor: 'white', height: 900}}>
            <View style={{alignItems: 'center'}}>

                <View style={{marginTop: 20, marginBottom: 30, alignItems: 'center'}}>
                    <Text style={{fontSize: 22, marginBottom: 5, marginTop: 10, fontFamily: 'pretendard-Medium'}}>
                        반가워요!
                    </Text>
                    
                    <Text style={{fontSize: 22, fontFamily: 'pretendard-Medium'}}>
                        프로필 선택 후 이름을 입력해주세요
                    </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={[selectedButton === '프로필 사진1' ? styles.onboardingButton : null]}
                        onPress={() => setSelectedButton('프로필 사진1')}
                    >
                        <Image source={require('../images/profile1.png')} style={{width: 150, height: 150, borderRadius: 40}} />
                        {renderCheckmark('프로필 사진1')}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[selectedButton === '프로필 사진2' ? styles.onboardingButton : null]}
                        onPress={() => setSelectedButton('프로필 사진2')}                
                    >
                        <Image source={require('../images/profile2.png')} style={{width: 150, height: 150, borderRadius: 40}} />
                        {renderCheckmark('프로필 사진2')}
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginBottom: 50}}>
                    <TouchableOpacity
                        style={[selectedButton === '프로필 사진3' ? styles.onboardingButton : null]}
                        onPress={() => setSelectedButton('프로필 사진3')}                
                    >
                        <Image source={require('../images/profile3.png')} style={{width: 150, height: 150, borderRadius: 40}} />
                        {renderCheckmark('프로필 사진3')}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[selectedButton === '프로필 사진4' ? styles.onboardingButton : null]}
                        onPress={() => setSelectedButton('프로필 사진4')}                
                    >
                        <Image source={require('../images/profile4.png')} style={{width: 150, height: 150, borderRadius: 40}} />
                        {renderCheckmark('프로필 사진4')}
                    </TouchableOpacity>
                </View>
            
                <View style={{marginTop: 30, alignItems: 'center', marginBottom: 40, height: 150}}>

                    <TextInput
                        placeholder="닉네임을 입력하세요"
                        value={inputValue}
                        onChangeText={handleChangeText} // 입력된 값으로 상태 업데이트
                        style={{width: 132, height: 50, borderBottomWidth: 1,textAlign: 'center'}}
                    />
                    {showCheck && (
                        <View style={{alignItems: 'center', marginTop: 10}}>
                            <Image source={require('../images/check.png')} style={{width: 20, height: 20, marginBottom: 10}} />
                            <Text style={{color: '#B9B9B9'}}>사용하실 수 있는 이름이에요.</Text>
                        </View>
                    )}
                    
                </View>

            </View>
            <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                style={[styles.button]}
                onPress={() => {
                    if (!selectedButton) {
                        Alert.alert('실패', '프로필을 골라주세요.'); // 경고 메시지 표시
                        return;
                    } else if (!inputValue.trim()) {
                        Alert.alert('실패', '닉네임을 입력하세요.'); // 경고 메시지 표시
                        return;
                    } else {
                        handleNextPagePress()
                    }
                }}  
            >
                <Text style={{fontFamily: 'pretendard-Bold', fontSize: 18, color: '#FFFFFF'}}>다음으로 넘어가기</Text>
            </TouchableOpacity>
            </View>
        
        </SafeAreaView>
    )
}

export default ReadNameScreen;
