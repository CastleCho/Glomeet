import React, { useState } from 'react';
import { SafeAreaView, View, Image, Modal, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BasicModal from '../Styles/BasicModal';

const ReadTendencyScreen = ({navigation}) => {
    const handleNextPagePress = () => {
        navigation.navigate('StartScreen');
    }
    const [selectedButton, setSelectedButton] = useState(null);  // 선택된 버튼의 상태를 null로 초기화
    const [modalVisible, setModalVisible] = useState(false);  // 모달의 보이기/숨기기 상태

    return(
        <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
            <View>
                
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../images/3.png')} style={{width: 337, height:2.4, marginTop: 10, marginBottom: 70}} />
                </View>
                
                <View style={{alignItems: 'center', marginBottom: 20, width: 327, marginLeft: 32}}>
                    <Text style={{fontSize: 24, fontFamily:'pretendard-SemiBold',marginBottom: 30, textAlign: 'center'}}>
                        당신의 {'\n'}성향은 무엇인가요?
                    </Text>
                    <Text style={{fontSize: 16, fontFamily:'pretendard-Regular', textAlign: 'center'}}>
                        Choose one option for now. You can explore others later.
                    </Text>
                </View>

                <View style= {{marginTop: 120}}>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '내향적' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('내향적')}
                >
                    <Text style={[ {fontFamily: 'pretendard-SemiBold',fontSize: 16, color: selectedButton === '내향적' ? 'white' : '#868686'}]}>내향적</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 1.2, borderColor: '#E1E1E1'}, selectedButton === '외향적' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('외향적')}
                >
                    <Text style={[{fontFamily: 'pretendard-SemiBold',fontSize: 16, color: selectedButton === '외향적' ? 'white' : '#868686'}]}>외향적</Text>
                </TouchableOpacity>

                </View>
                <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    style={[styles.button, {marginTop: 160}]}
                    onPress={() => {
                        if (selectedButton) {
                            setModalVisible(true);
                        } else {
                            alert('버튼을 하나 선택해주세요.');
                        }
                    }}
                >
                    <Text style={{fontFamily: 'pretendard-Bold', fontSize: 18, color: '#FFFFFF'}}>다음으로 넘어가기</Text>
                </TouchableOpacity>
                </View>
            </View>
            <Modal
                    animationType="slide"
                    transparent={true}  // 투명 배경으로 설정하여 모달 뒤의 내용도 보이게 합니다.
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <Text style={{marginBottom: 15, textAlign: 'center', fontSize: 15, fontWeight: 'bold', width: 200}}>
                            ‘글로밋’에서 보내는 정보 및 알림(push)를 받아보시겠습니까?
                            </Text>
                            <Text style={[styles.modalText, {marginBottom: 25}]}>
                            수신 동의 시 챌린지 및 매칭 완료 등 정보에 대한 알림을 받아보실 수 있습니다.
                            </Text>

                            <View style={{flexDirection: 'row', marginLeft: 16}}>
                                <TouchableOpacity
                                    style={[styles.button, {width: 100, borderRadius: 10, backgroundColor: '#F4F4F4', borderWidth: 0, borderColor: '#E1E1E1'}, selectedButton === '취소' ? styles.selectedButton : null]}
                                    onPress={() => {
                                        setModalVisible(false)
                                        handleNextPagePress()
                                        setSelectedButton('취소')
                                    }}
                                >
                                    <Text style={[styles.buttonText, {fontWeight: 'bold', color: '#8E8E8E'}]}>취소</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.button, {width: 100, borderRadius: 10, backgroundColor: '#5782F1', borderWidth: 0, borderColor: '#E1E1E1'}, selectedButton === '확인' ? styles.selectedButton : null]}
                                    onPress={() => {
                                        setModalVisible(false)
                                        handleNextPagePress()
                                        setSelectedButton('확인')
                                    }}
                                >
                                    <Text style={[styles.buttonText, {fontWeight: 'bold', color: 'white'}]}>확인</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>


            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      width: 240,
    },
    button: {
        marginHorizontal: '5%',
        width: '90%',
        backgroundColor: '#5782F1',
        borderRadius: 25,
        justifyContent: 'center', // 텍스트를 세로로 중앙에 위치시키기 위해 추가
        alignItems: 'center',
        height: 52,
        marginVertical:'3%'
    },
    selectedButton: {
        backgroundColor: '#5782F1',
        borderWidth: 0,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        fontFamily: 'Pretendard-Bold',
        color: '#ffffff',
        fontSize: 18,
    },
  });

export default ReadTendencyScreen;