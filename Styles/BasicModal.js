import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const BasicModal = ({
    
    isVisible,
    onClose,
    title = "매칭을 시작하시겠습니까?", // default 값
    onConfirm,
    confirmButtonText = "시작",
    cancelButtonText = "취소",
    width = '76%', // default 값
    height = '22%', // default 값
}) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={[styles.modalView, { width, height }]}>
                    <View style={styles.modalTextView}>
                        <Text style={styles.modalText}>{title}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                            style={styles.modalbutton}
                            onPress={onClose}
                        >
                            <Text style={styles.modalbuttonText}>
                                {cancelButtonText}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  
                            style={[styles.modalbutton, {backgroundColor:'#5782F1'}]}
                            onPress={onConfirm}
                        >
                            <Text style={[styles.modalbuttonText, {color:'white'}]}>
                                {confirmButtonText}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
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
        backgroundColor: "white",
        borderRadius: 5,
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // Android에서도 동작하게 하기 위한 속성
        
        
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

export default BasicModal;