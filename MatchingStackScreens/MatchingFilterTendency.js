import React, { useState } from 'react';
import { View, Text, SafeAreaView, Button, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import BasicButton from '../Styles/BasicButton.js'

const MatchingFilterTendency = ({ navigation }) => {
    const [selectedTendency, setSelectedTendency] = useState(''); // 문자열로 변경

    const tendency = ['외향적', '내향적', '상관없음'];

    const toggleTendency = (tendency) => {
        if (selectedTendency === tendency) {
            setSelectedTendency(''); // 이미 선택된 성향을 다시 클릭하면 해제
        } else {
            setSelectedTendency(tendency); // 아니라면 선택
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={{backgroundColor: 'white'}}>
                <Text style={styles.AdviceText}>원하는 성향을{'\n'}선택해주세요</Text>
                <View style={{flexDirection: 'row'}} >
                    <View style={{flex:1}}/>
                    <View style={styles.pagebar}/>
                </View>
                
            </View>
            
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
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
            </View>
            <View style={{marginBottom: 40, alignItems: 'center'}}>
                <BasicButton 
                    style={selectedTendency ? {} : {backgroundColor: '#9FA4B1'}}
                    title="다음으로 넘어가기" 
                    onPress={() => selectedTendency && navigation.navigate('NextScreen')} 
                    disabled={!selectedTendency}
                />
            </View>
                
        </SafeAreaView>
    );
}

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

export default MatchingFilterTendency;
