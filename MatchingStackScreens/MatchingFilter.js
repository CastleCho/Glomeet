import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import BasicButton from '../Styles/BasicButton.js';
import { HeaderBackButton } from '@react-navigation/elements';
import BasicModal from '../Styles/BasicModal.js';
import music from '../images/music.png';
import noodles from '../images/noodles.png';
import trip from '../images/outdoor.png';
import extreme from '../images/parachute.png';
import platte from '../images/platte.png';
import swimming from '../images/ripple.png';
import shopping from '../images/shopping.png';
import tennis from '../images/tennis.png';
import yoga from '../images/viencharts.png';
import voice from '../images/voice.png';
import cameraicon from '../images/cameraicon.png';
import gamehandle from '../images/game-handle.png';
import drink from '../images/goblet-full.png';
import running from '../images/sport.png';

const MatchingFilter = ({ navigation }) => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [selectedTendency, setSelectedTendency] = useState('');
    const [step, setStep] = useState('interests'); // 'interests' 또는 'tendency'
    const [modalVisible, setModalVisible] = useState(false);
    const interests = ['사진', '쇼핑', '노래방', '요가', '요리', '테니스', '러닝', '수영', '예술', '여행', '익스트림', '음악', '술', '게임'];
    const icon = [cameraicon, shopping, voice, yoga, noodles, tennis ,running, swimming, platte, trip, extreme, music, drink, gamehandle]
    const tendency = ['외향적', '내향적', '상관없음'];
    const onNextPress = () => {
        if (step === 'interests') {
            setStep('tendency');
        } else if (selectedTendency) {
            setModalVisible(true); // 다음으로 넘어가기를 누를 때 모달 표시
        }
    };
    const toggleInterest = interest => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter(item => item !== interest));
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    const toggleTendency = (tendency) => {
        if (selectedTendency === tendency) {
            setSelectedTendency(''); // 이미 선택된 성향을 다시 클릭하면 해제
        } else {
            setSelectedTendency(tendency); // 아니라면 선택
        }
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <BasicModal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                isVisible={modalVisible}
                onClose={() => setModalVisible(false)}
                onConfirm={() => {
                    navigation.navigate('MatchingLoading');
                    setModalVisible(false);
                }}
            >
            </BasicModal>

            <View style={{ backgroundColor: 'white' }}>
                <Text style={styles.AdviceText}>
                    {step === 'interests' ? "원하는 관심분야를\n선택해주세요" : "원하는 성향을\n선택해주세요"}
                </Text>
                {step === 'interests' ? (<View style={styles.pagebar}/>
                ) : (
                <View style={{flexDirection: 'row'}} >
                    <View style={{flex:1}}/>
                    <View style={styles.pagebar}/>
                </View>
                )}
            </View>

            {step === 'interests' ? (
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#E5E5E5' }}>
                    <FlatList
                    key="interests"
                    style={{marginTop:30}}
                    data={interests}
                    numColumns={2}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={[
                                styles.button,
                                selectedInterests.includes(item) ? styles.selected : {}
                            ]}
                            onPress={() => toggleInterest(item)}
                        >
                            <Image  
                                source={icon[index]} 
                                style={[
                                    styles.icon,
                                    selectedInterests.includes(item) ? styles.selectedicon : {}
                                ]}
                            />
                            <Text
                                style={[
                                    styles.selecttext,
                                    selectedInterests.includes(item) ? styles.selectedtext : {}
                                ]}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                />
                </View>
            ) : (
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#E5E5E5' }}>
                    <FlatList
                    key="tendency"
                    style={{marginTop:140, }}
                    data={tendency}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.buttonTendency,
                                selectedTendency === item ? styles.selected : {}
                            ]}
                            onPress={() => toggleTendency(item)}
                        >
                            <Text
                                style={[
                                    styles.tendencytext,
                                    selectedTendency === item ? styles.selectedtext : {}
                                ]}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                />
                </View>
            )}

            <View style={{ marginBottom: 40, alignItems: 'center' }}>
                <BasicButton
                    style={(step === 'interests' && selectedInterests.length > 0) || (step === 'tendency' && selectedTendency) ? {} : { backgroundColor: '#9FA4B1' }}
                    title="다음으로 넘어가기"
                    onPress={onNextPress}
                    disabled={(step === 'interests' && selectedInterests.length === 0) || (step === 'tendency' && !selectedTendency)}
                />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    AdviceText: {
        fontFamily: 'Pretendard-Medium',
        fontSize: 30,
        color: '#000',
        margin: 22,
        marginTop: 75                                                
    },
    pagebar: {
        width: '50%',
        height: 7,
        backgroundColor: '#5782F1'

    },
    button: {
        flexDirection:'row',
        width: 140,
        height: 45,
        marginBottom: 10,
        marginHorizontal: 7.5,
        backgroundColor: 'white',
        borderColor: '#E8E6EA',
        borderWidth:1,
        borderRadius: 15,
        alignItems: 'center',
    },
    icon: {
        marginLeft:10,
        width:19,
        height:19,
        tintColor: '#5782F1'
    },
    selectedicon: {
        tintColor: '#ffffff'
    },
    buttonTendency: {
        width: 327,
        height: 56,
        marginBottom: 12,
        marginHorizontal:10,
        backgroundColor: 'white',
        borderColor: '#E8E6EA',
        borderWidth:1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selected: {
        backgroundColor: '#5782F1',
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 0.5,
        },
        borderColor: '#5782F1',
        borderWidth:1,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4, // Android에서도 동작하게 하기 위한 속성
        justifyContent: 'center', // 텍스트를 세로로 중앙에 위치시키기 위해 추가
        alignItems: 'center',
    },
    selecttext:{
        flex:1,
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 14,
        textAlign: 'center',
        right: 12
    },
    tendencytext:{
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 16,
        
    },
    selectedtext: {
        color: 'white',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalTextView:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        height: '22%',
        width: '76%',
        backgroundColor: "white",
        borderRadius: 5,
        alignItems: "center",
    },
    modalText: {
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 16,
        color: '#000',
    },
    buttonContainer: {
        flexDirection: 'row',  
    },
    modalbutton: {
        height: 46,
        width: '37%',
        justifyContent: "center",
        backgroundColor: "#F0F0F0",
        borderRadius: 5,
        alignItems: "center",
        marginHorizontal:'4%',
        marginBottom:'8%'
    },
    modalbuttonText: {
        fontFamily: 'Pretendard-Medium',
        fontSize: 15,
        color: '#8E8E8E',
    }
});

export default MatchingFilter;
