import React, { useState } from 'react';
import { SafeAreaView, View, Image, Modal, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import styles from '../Styles/Styles';
// import BasicModal from '../Styles/BasicModal';

const ReadTendencyScreen = ({navigation}) => {
    const handleNextPagePress = () => {
        navigation.navigate('StartScreen');
    }
    const [selectedButton, setSelectedButton] = useState(null);  // 선택된 버튼의 상태를 null로 초기화
    const [modalVisible, setModalVisible] = useState(false);  // 모달의 보이기/숨기기 상태

    return(
        <SafeAreaView>
            <View>
                
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../images/3.png')} style={{width: 337, height:2.4, marginTop: 10, marginBottom: 30}} />
                </View>

                <Text>
                    당신의 성향은 무엇인가요?
                </Text>
                <Text>
                    Choose one option for now. You can explore others later.
                </Text>

                <TouchableOpacity
                    style={[styles.button, selectedButton === '내향적' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('내향적')}
                >
                    <Text style={styles.buttonText}>내향적</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedButton === '외향적' ? styles.selectedButton : null]}
                    onPress={() => setSelectedButton('외향적')}
                >
                    <Text style={styles.buttonText}>외향적</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        if (selectedButton) {
                            setModalVisible(true);
                        } else {
                            alert('버튼을 하나 선택해주세요.');
                        }
                    }}
                >
                    <Text style={styles.buttonText}>다음으로 넘어가기</Text>
                </TouchableOpacity>
            </View>

            <View>
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

                            <Text style={{marginBottom: 15, textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>
                            ‘글로밋’에서 보내는 정보 및 알림(push)를 받아보시겠습니까?
                            </Text>
                            <Text style={styles.modalText}>
                            수신 동의 시 챌린지 및 매칭 완료 등 정보에 대한 알림을 받아보실 수 있습니다.
                            </Text>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    setModalVisible(false)
                                    handleNextPagePress()
                                }}
                            >
                                <Text style={styles.buttonText}>확인</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    setModalVisible(false)
                                    handleNextPagePress()
                                }}
                            >
                                <Text style={styles.buttonText}>취소</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>

            </View>
            
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
        backgroundColor: 'blue',
    },
    buttonText: {
        fontFamily: 'Pretendard-Bold',
        color: '#ffffff',
        fontSize: 18,
    },
  });
  


export default ReadTendencyScreen;