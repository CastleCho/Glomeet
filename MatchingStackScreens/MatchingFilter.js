import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, FlatList, Animated } from 'react-native';
import BasicButton from '../Styles/BasicButton.js';

const MatchingFilter = ({ navigation }) => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [selectedTendency, setSelectedTendency] = useState('');
    const animationValue = useRef(new Animated.Value(0)).current;

    const interests = ['사진', '쇼핑', '노래방', '요가', '요리', '테니스', '러닝', '수영', '예술', '여행', '익스트림', '음악', '술', '게임'];
    const tendency = ['외향적', '내향적', '상관없음'];

    const toggleInterest = (interest) => {
        setSelectedInterests(prev => {
            if (prev.includes(interest)) {
                return prev.filter(i => i !== interest);
            } else {
                return [...prev, interest];
            }
        });
    };

    const toggleTendency = (tendency) => {
        setSelectedTendency(prev => prev === tendency ? '' : tendency);
    };

    const navigateToTendency = () => {
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const isTendencyScreen = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: 'white' }}>
                <Text style={styles.AdviceText}>
                    {isTendencyScreen === 0
                        ? "원하는 관심분야를\n선택해주세요"
                        : "원하는 성향을\n선택해주세요"}
                </Text>
                <Animated.View style={{ ...styles.pagebar, width: animationValue.interpolate({ inputRange: [0, 1], outputRange: ['50%', '100%'] }) }} />
            </View>

            <View style={{ flex: 1, alignItems: 'center' }}>
                {isTendencyScreen === 0 && 
                    <>
                        <FlatList
                            style={{marginTop:30}}
                            data={interests}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        selectedInterests.includes(item) ? styles.selected : {}
                                    ]}
                                    onPress={() => toggleInterest(item)}
                                >
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
                        <View style={{ marginBottom: 40, alignItems: 'center' }}>
                            <BasicButton
                                style={selectedInterests.length > 0 ? {} : { backgroundColor: '#9FA4B1' }}
                                title="다음으로 넘어가기"
                                onPress={navigateToTendency}
                                disabled={selectedInterests.length === 0}
                            />
                        </View>
                    </>
                }

                {isTendencyScreen === 1 &&
                    <>
                        <FlatList
                            style={{marginTop:140}}
                            data={tendency}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        selectedTendency === item ? styles.selected : {}
                                    ]}
                                    onPress={() => toggleTendency(item)}
                                >
                                    <Text
                                        style={[
                                            styles.selecttext,
                                            selectedTendency === item ? styles.selectedtext : {}
                                        ]}
                                    >
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item}
                        />
                        <View style={{ marginBottom: 40, alignItems: 'center' }}>
                            <BasicButton
                                style={selectedTendency ? {} : { backgroundColor: '#9FA4B1' }}
                                title="다음으로 넘어가기"
                                onPress={() => selectedTendency && navigation.navigate('NextScreen')}
                                disabled={!selectedTendency}
                            />
                        </View>
                    </>
                }
            </View>
        </SafeAreaView>
    );
}

// ... StyleSheet 정의 및 export는 동일합니다 ...


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
        width: 140,
        height: 45,
        marginVertical: 5,
        marginHorizontal: 7.5,
        backgroundColor: 'white',
        borderColor: '#E8E6EA',
        borderWidth:1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTendency: {
        width: 327,
        height: 56,
        marginVertical: 5,
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
        elevation: 5, // Android에서도 동작하게 하기 위한 속성
        justifyContent: 'center', // 텍스트를 세로로 중앙에 위치시키기 위해 추가
        alignItems: 'center',
    },
    selecttext:{
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 14,
    },
    selectedtext: {
        color: 'white',
    }
});

export default MatchingFilter;