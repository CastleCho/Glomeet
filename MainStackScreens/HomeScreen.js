import React, { useRef, useEffect,useState } from 'react';
import {StyleSheet, Text, View,Alert, Image, FlatList, Modal,TouchableOpacity} from 'react-native';
import { Modalize } from 'react-native-modalize';

const missions = [
    { id: '1', title: '오늘의 매칭하고', point: '300P 즉시 받기',icon: require('../images/bell.png')},
    { id: '2', title: '채팅 3번하고', point: '100P 즉시 받기', icon: require('../images/thumb.png')},
    { id: '3', title: '추가 매칭 3번하고', point: '100P 즉시 받기', icon: require('../images/bucket-dynamic-color.png')},
    { id: '4', title: '모임 가입하고', point: '300P 즉시 받기', icon: require('../images/camera.png')},
    { id: '5', title: '프로필 변경 2번하고', point: '300P 즉시 받기', icon: require('../images/golbang.png')},
    { id: '6', title: '등록한 모임 인원이 달성하면', point: '300P 즉시 받기', icon: require('../images/book.png')},
];

function showAlert(title, message) {
  Alert.alert(
    title,
    message,
    [
      { text: "닫기", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: true }
  );
}

export default function App() {
    const modalizeRef = useRef(null);

    useEffect(() => {
        modalizeRef.current?.open();
    }, []);

    const openBottomSheet = () => {
        modalizeRef.current?.open();
      };

    return (
        <View style={styles.container}>
          <View style={styles.header}>
          </View>
          <View style={styles.greetingBox}>
            <Image source={require('../images/bell_click.png')} style={styles.alram} />
            <Image source={require('../images/person.png')} style={styles.person} />
            <Image source={require('../images/Rectangle.png')} style={styles.iconWrapper} />
            <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 18, color: 'black', marginTop: '1%'}}>
              <Text>안녕하세요! <Text style={styles.boldText}>귀여운 다은님</Text></Text>
            </Text> 
            <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 12, color: 'black', marginTop: '1%'}}>
              <Text>오늘도 친구를 만나러 가볼까요?</Text>
            </Text>
            {/* 통화 및 메시지 아이콘 */}
          </View>
          <Image source={require('../images/avatar.png')} style={styles.avatar} />
          <Image source={require('../images/background.png')} style={styles.backgroundImage} />
          <Image source={require('../images/Ellipse.png')} style={styles.ellipse} />
  
          <View style={styles.pointContainer} >
            
            <View style={styles.pointBox}>
              <Text style={styles.pointText}>1,400P</Text>
              <Text>보유 포인트</Text>
            </View>
            <View style={styles.usageBox}>
              <Text style={styles.usageText}>2개</Text>
              <Text>참여중인 모임</Text>
            </View>
          </View>
          <Modalize ref={modalizeRef}
           alwaysOpen={200}
           modalHeight={600}
           modalStyle={{ borderTopLeftRadius: 45, borderTopRightRadius: 45 }} >
        <View style={styles.challengeHeader}>
        <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 23, color: 'black', marginTop: '1%', marginLeft: '3%'}}>
          <Text style={styles.challengeTitle}>친구와 함께</Text>
        </Text>
        <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 23, color: 'black', marginTop: '1%', marginLeft: '3%'}}>
          <Text style={styles.challengeHashTag}>#도전챌린지</Text>
        </Text>
        </View>
        <MissionList />
      </Modalize>
    </View>
  );
}
  

function MissionList() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleRewardPress = () => {
    setModalVisible(true);
  };

  return (
    <>
      <FlatList 
        data={missions}
        renderItem={({ item }) => (
          <View style={styles.missionItem}>
            <Image source={item.icon} style={styles.challengeIcon} />
            <View style={{ marginLeft: '6%', marginTop: '1%'}}>
              <Text style={{fontFamily: 'Pretendard-SemiBold', fontSize: 14 ,color: '#3B3B3B',marginBottom:'3%'}}>
                <Text>{item.title}</Text>
              </Text>
              <Text style={{fontFamily: 'Pretendard-ExtraBold',fontSize: 18 ,color: '#5165B2'}}>
                <Text>{item.point}</Text>
              </Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={handleRewardPress}>보상받기</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      {modalVisible && (
        <Modal transparent={true} animationType="slide" visible={modalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalMessage}>보상이 지급되었습니다!</Text>
              <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                <Text>닫기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5782F1',
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    boldText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    greetingBox: {
      marginTop: 55,
      padding: 15,
      borderColor: 'white',
      borderWidth: 5,
      borderRadius: 20,
      backgroundColor: 'white',
    },
    avatar: {
      width: 233,
      height: 266,
      borderRadius: 300,
      marginTop: 30,
      alignSelf: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        top: 300,
        left: 50,
        width: 300,       // 원하는 가로 크기를 설정합니다.
        height: 200,      // 원하는 세로 크기를 설정합니다.
        resizeMode: 'contain', // 이미지의 원래 비율을 유지하면서 크기를 조절합니다.
    },
    ellipse: {
        position: 'absolute',
        top: 100,
        left: '0%',
        width: '120%',       // 화면 전체 넓이로 설정합니다.
        height: '60%',         // 원하는 세로 크기를 유지하거나 조절합니다.
        zIndex: -1,          // 다른 요소들 뒤로 이미지를 보냅니다.
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      paddingHorizontal: 40,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: 'white',
      paddingBottom: 20,
      backgroundColor: 'white'
    },
    pointContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        padding: 1,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        backgroundColor: 'white',
      },
      pointBox: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        flex: 0.48,
      },
      usageBox: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        flex: 0.48,
      },
      pointText: {
        fontSize: 24,
        color: '#6E87E5',
        padding: 3,
        fontWeight: 'bold'
      },
      usageText: {
        fontSize: 24,
        color: '#6E87E5',
        padding: 3,
        fontWeight: 'bold'
      },
      challengeTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        left: 10
      },
      challengeHashTag: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5782F1',
        left: 10
      },
      missionItem: {
        flexDirection: 'row',  // 아이템의 중앙에 아이콘과 텍스트를 정렬
        padding: 2,
        borderBottomWidth: 1,
        borderColor: '#eee',
      },
      challengeHeader: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#eee',
      },
      openButton: {
        padding: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
      },
      alram: {
      position: 'absolute',
      right: '4%',  
      top: '50%', 
      width: 33, 
      height: 34, 
    },
    person: {
        position: 'absolute', 
        right: 50,  
        top: '55%',
        width: 30,  
        height: 30, 
      },
      iconWrapper: {
        position: 'absolute', 
        right: 1,  
        top: '30%',
        width: 90,  
        height: 50, 
        zIndex: -1, 
    },
    challengeIcon: {
        width: 50, // 원하는 크기에 따라 수정
        height: 50, // 원하는 크기에 따라 수정
        marginLeft: '3%',
    },
    button: {
      width: 80,
      height: 37,
      borderRadius: 10,
      backgroundColor: '#5782F1',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      position: 'absolute',
      marginLeft: '70%',
      marginTop: '2%'
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    modalContainer: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    modalMessage: {
      marginVertical: 20,
    },
    modalButton: {
      alignSelf: 'flex-end',
    },

  });