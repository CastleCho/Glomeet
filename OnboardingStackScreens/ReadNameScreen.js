import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Alert, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import styles from '../Styles/Styles';
import BasicButton from '../Styles/BasicButton';
const ReadNameScreen = ({navigation}) => {

    const handleNextPagePress = () => {
        navigation.navigate('ReadContinentScreen')
    }

    const [selectedButton, setSelectedButton] = useState(null);  // 선택된 버튼의 상태를 null로 초기화
    const [inputValue, setInputValue] = useState('');
    const [showCheck, setShowCheck] = useState(false);

    const handleChangeText = (text) => {
        setInputValue(text);
        if (text.length > 3) {
            setTimeout(() => setShowCheck(true), 1000);
        } else {
            setShowCheck(false);
        }
    };

    const renderCheckmark = (imageName) => {
        if (selectedButton == imageName) {
            return (
                <View style={{width:18, height: 18, alignSelf: 'center', backgroundColor: '#4577FA', borderRadius:30, alignItems: 'center' ,justifyContent: 'center'}}>
                    <Image source={require('../images/check.png')} style={{width: 12, height: 12}} />
                </View>
            );
        }
        return null;
    };

    return(
        <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
            <View style={{alignItems: 'center'}}>

                <View style={{marginTop: 20, marginBottom: 30, alignItems: 'center'}}>
                    <Text style={{fontSize: 22, marginBottom: 5, marginTop: 10, fontFamily: 'Pretendard-Medium', color: '#000'}}>
                        반가워요!
                    </Text>
                    
                    <Text style={{fontSize: 22, fontFamily: 'Pretendard-Medium', color: '#000'}}>
                        프로필 선택 후 이름을 입력해주세요
                    </Text>
                </View>

                <View style={{flexDirection: 'row', marginTop: 60}}>
                    <TouchableOpacity
                        style={{margin: 15}}
                        onPress={() => setSelectedButton('프로필 사진1')}
                    >
                        <View style={{width:112, height:112, backgroundColor:'#DBFFF2', borderRadius: 20, alignItems: 'center', justifyContent: 'center', paddingBottom: 15}}>
                            <Image source={require('../images/profile1.png')} style={{width: 150, height: 150, borderRadius: 40}} />
                            {renderCheckmark('프로필 사진1')}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{margin: 15}}
                        onPress={() => setSelectedButton('프로필 사진2')}                
                    >
                        <View style={{width:112, height:112, backgroundColor:'#EBEBEB', borderRadius: 20, alignItems: 'center', justifyContent: 'center', paddingBottom: 15}}>
                            <Image source={require('../images/profile2.png')} style={{width: 150, height: 150, borderRadius: 40}} />
                            {renderCheckmark('프로필 사진2')}
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginBottom: 50}}>
                    <TouchableOpacity
                        style={{margin: 15, marginTop:30}}
                        onPress={() => setSelectedButton('프로필 사진3')}                
                    >
                        <View style={{width:112, height:112, backgroundColor:'#E3F7FE', borderRadius: 20, alignItems: 'center', justifyContent: 'center', paddingBottom: 15}}>
                            <Image source={require('../images/profile3.png')} style={{width: 150, height: 150, borderRadius: 40}} />
                            {renderCheckmark('프로필 사진3')}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{margin: 15, marginTop:30}}
                        onPress={() => setSelectedButton('프로필 사진4')}                
                    >
                        <View style={{width:112, height:112, backgroundColor:'#FFF7EC', borderRadius: 20, alignItems: 'center', justifyContent: 'center', paddingBottom: 15}}>
                            <Image source={require('../images/profile4.png')} style={{width: 150, height: 150, borderRadius: 40}} />
                            {renderCheckmark('프로필 사진4')}
                        </View>
                    </TouchableOpacity>
                </View>
            


                <TextInput
                    placeholder="닉네임을 입력하세요"
                    placeholderTextColor={'#B9B9B9'}
                    value={inputValue}
                    onChangeText={handleChangeText} // 입력된 값으로 상태 업데이트
                    style={{width: 200, height: 50, borderBottomWidth: 1, textAlign:'center', fontFamily:'Pretendard-Medium', fontSize:18, color:'#000'}}
                />
                {inputValue.length === 0 ? (
                    // 입력값이 없을 때
                    <View style={{height:52}}/>
                ) : showCheck ? (
                    // 입력값이 4글자 이상일 때a
                    <View style={{height:52, justifyContent:'center'}}>
                        <View style={{width:18, height: 18, alignSelf: 'center', backgroundColor: '#4577FA', borderRadius:30, alignItems: 'center' ,justifyContent: 'center', marginVertical:7.5}}>
                            <Image source={require('../images/check.png')} style={{width: 12, height: 12}} />
                        </View>
                        <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 14, color: '#B9B9B9'}}>사용하실 수 있는 이름이에요.</Text>
                    </View>
                ) : (
                    // 입력값이 있지만 4글자 미만일 때
                    <View style={{height:52, justifyContent:'center'}}>
                        <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 14, color: '#FF7474'}}>닉네임은 4글자 이상으로 해주세요.</Text>
                    </View>
                )}


            </View>
            <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
            <BasicButton
            style={{}}
            title='다음으로 넘어가기'
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
            />
            </View>
        </SafeAreaView>
    )
}

export default ReadNameScreen;
