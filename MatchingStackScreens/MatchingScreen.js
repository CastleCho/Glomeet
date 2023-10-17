import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MatchingScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
      {/* 왼쪽 화면 */}
      <Text>Glomeet</Text>
      {/* ... 다른 컴포넌트들 ... */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>매칭하러 가기</Text>
        </TouchableOpacity>

      {/* 모달 */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <Text>Glomeet</Text>
          {/* ... 다른 컴포넌트들 ... */}
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>다음으로 넘어가기</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default MatchingScreen;