import React, { useRef,useState } from 'react';
import {StyleSheet, Text, View, Image, FlatList,TextInput,TouchableOpacity} from 'react-native';
import { Modalize } from 'react-native-modalize';
import RewardModal from '../Styles/RewardModal';
import alramicon from '../images/alramicon.png';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['ViewPropTypes will be removed']);

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMission, setSelectedMission] = useState(null);
  const [userPoints, setUserPoints] = useState(1400);
  const [step, setStep] = useState('reward'); 
  const onNextPress = () => {
    if (step === 'reward') {
        setStep('alarm');
    } else {
      setStep('reward'); // 다음으로 넘어가기를 누를 때 모달 표시
    }
}; 
  const modalizeRef = useRef(null);
  const dots = new Array(82).fill(0);
  const [missions, setMissions] = useState([
    { id: '1', title: '오늘의 매칭하고', point: '300P 즉시 받기', state:'보상받기',icon: require('../images/bell.png')},
    { id: '2', title: '채팅 3번하고', point: '100P 즉시 받기', state:'1/3',icon: require('../images/thumb.png')},
    { id: '3', title: '추가 매칭 3번하고', point: '100P 즉시 받기', state:'2/3', icon: require('../images/bucket-dynamic-color.png')},
    { id: '4', title: '모임 가입하고', point: '300P 즉시 받기', state:'2/3', icon: require('../images/camera.png')},
    { id: '5', title: '프로필 변경 2번하고', point: '300P 즉시 받기', state:'보상받기', icon: require('../images/golbang.png')},
    { id: '6', title: '등록한 모임 인원이 달성하면', point: '300P 즉시 받기', state:'보상받기', icon: require('../images/book.png')},
  ]);

  const confirmReward = () => {
    // 미션의 포인트 문자열에서 포인트를 추출하고 정수로 변환
    const pointsToAdd = parseInt(selectedMission.point.replace('P', ''));
  
    // 사용자의 포인트를 업데이트
    setUserPoints(currentPoints => currentPoints + pointsToAdd);
  
    // 이전과 같이 미션을 업데이트
    setMissions(prevMissions =>
      prevMissions.map(mission =>
        mission.id === selectedMission.id ? { ...mission, state: '보상완료' } : mission
      )
    );
  
    // 이전과 같이 모달을 닫음
    setModalVisible(false);
  };

  const openModal = (mission) => {
    setSelectedMission(mission); // 현재 선택된 mission 설정
    setModalVisible(true); // 모달을 열음
  };
  
  const renderMissionItem = ({ item }) => (
    <View>
      <RewardModal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          isVisible={modalVisible}
          onConfirm={confirmReward} // confirm 버튼을 누를 때 실행될 함수
          onRequestClose={() => setModalVisible(false)} // 모달 외부를 누를 때 실행될 함수
      >
      </RewardModal>
      <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
        {dots.map((_, index) => (
            <View
                key={index}
                style={{
                    width: 2,   // 도트의 넓이
                    height: 1,  // 도트의 높이
                    backgroundColor: '#B9B9B9',
                    marginHorizontal: 1,  // 도트 사이의 간격
                }}
            />
        ))}
      </View>
      <View style={styles.missionbar}>
        <Image source={item.icon} style={styles.challengeIcon} />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={{ fontFamily: 'Pretendard-Light', fontSize: 14, color: '#3B3B3B', marginBottom: 6 }}>
            {item.title}
          </Text>
          <Text style={{ fontFamily: 'Pretendard-SemiBold', fontSize: 18, color: '#5165B2' }}>
            {item.point}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.rewardbutton,
            item.state !== '보상받기' ? { backgroundColor: '#9FA4B1' } : {}
          ]}
          onPress={() => openModal(item)}
          disabled={item.state !== '보상받기'}
        >
          <Text style={styles.rewardbuttonText}>
            {item.state}
          </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
  const alarms = [
    { id: '1', title: '채팅 알림', point: 'James에게 채팅이 왔어요!', icon: require('../images/chatting.png'), date: '10월 4일 09:00'},
    { id: '2', title: '채팅 알림', point: 'Tina에게 채팅이 왔어요!',  icon: require('../images/chatting.png'), date: '10월 4일 09:00'},
    { id: '3', title: '모임 알림', point: '테니스 치실 분 모임이 하루 전이에요!', icon: require('../images/meeting.png'), date: '10월 4일 09:00'},
  ];
  const renderalarmItem = ({ item }) => (
    <View>
      <View style={styles.missionbar}>
        <Image source={item.icon} style={{width: 30, height: 30}} />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 6}} >
            <Text style={{ fontFamily: 'Pretendard-Bold', fontSize: 18, color: '#5782F1' }}>
              {item.title}
            </Text>
            <View style={{flex: 1}}/>
            <Text style={{ fontFamily: 'Pretendard-Medium', fontSize: 12, color: '#A9A9A9' }}>
              {item.date}
            </Text>
          </View>
          <Text style={{ fontFamily: 'Pretendard-Medium', fontSize: 16, color: '#000' }}>
            {item.point}
          </Text>
        </View>
      </View>
    </View>
  );
    return (
      <View style={styles.container}>
          <View style={styles.greetingBox}>
            <View>
              <Text style={{fontFamily: 'Pretendard-Regular', fontSize: 18, color: 'black', marginTop: '1%'}}>
                안녕하세요! 귀여운 다은님
              </Text> 
              <Text style={{fontFamily: 'Pretendard-Regular', fontSize: 12, color: 'black', marginTop: '1%'}}>
                오늘도 친구를 만나러 가볼까요?
              </Text>
            </View>
            <View style={styles.buttonbox}>
            <TouchableOpacity style={[styles.icon, step === 'reward' ? styles.icon : styles.selectedicon]} onPress={onNextPress}>
              <Image source={alramicon} style={styles.alram}/>
            </TouchableOpacity>
            </View>
          </View>
          <Image source={require('../images/Ellipse.png')} style={{position: 'absolute', width:393, height:594, zIndex: -1}}/>
          <View style={{marginTop:28}} >
          
            <Image source={require('../images/profileimage.png')} style={styles.backgroundImage}/>         
          </View>
          <View style={styles.pointContainer} >
            
            <View style={styles.pointBox}>
              <Text style={styles.pointText}>{userPoints}P</Text>
              <Text style={styles.explainText}>보유 포인트</Text>
            </View>
            <View style={{width:1.7, height:39, backgroundColor: '#EEEEEE', borderRadius: 10,}}/>
            <View style={styles.usageBox}>
              <Text style={styles.pointText}>2개</Text>
              <Text style={styles.explainText}>참여중인 모임</Text>
            </View>
          </View>
          <Modalize ref={modalizeRef}
            flatListProps={{
              ListHeaderComponent: () => ( step === 'reward' ? (
                <View style={{marginTop:26, marginLeft: 40, marginBottom: 19}} > 
                  <Text style={styles.modalTitle}>친구와 함께</Text> 
                  <Text style={styles.modalHashTag}>#도전챌린지</Text>
                </View>
                ) : (
                <View style={{marginTop:26, marginLeft: 40, marginBottom: 19}} > 
                  <Text style={styles.modalTitle}>알림 내역</Text>
                </View> 
                )),

              data: step === 'reward' ? missions : alarms,
              renderItem:  step === 'reward' ? renderMissionItem : renderalarmItem,
              keyExtractor: item => item.id,
              showsVerticalScrollIndicator: false
            }}
            avoidKeyboardLikeIOS={true}
            alwaysOpen={200}
            modalHeight={590}
            modalStyle={{ borderTopLeftRadius: 45, borderTopRightRadius: 45 }}
          />
      </View>
   );
}
  


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5782F1',
      alignItems: 'center'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    boldText: {
        fontSize: 18,
        fontFamily: 'Pretendard-Bold',
      },
    greetingBox: {
      flexDirection: 'row',
      marginTop: 55,
      width:343,
      height: 84,
      borderColor: 'white',
      borderWidth: 5,
      borderRadius: 20,
      backgroundColor: 'white',
      justifyContent: 'center', 
      alignItems: 'center'
    },
    buttonbox: {
      marginLeft: 60,
      flexDirection: 'row',
      borderRadius: 50,
      height: 50,
      width: 50,
      backgroundColor: '#E5E5E5',
      justifyContent: 'center', 
      alignItems: 'center'
    },
    icon: {
      width:46,
      height:46,
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    selectedicon: {
      borderRadius:50, 
      backgroundColor:'white', 
      width:46,
      height:46,
      borderWidth: 2, 
      borderColor:'#4C7EFD', 
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    backgroundImage: {
        width: 430,       // 원하는 가로 크기를 설정합니다.
        height: 266,      // 원하는 세로 크기를 설정합니다.
        // 이미지의 원래 비율을 유지하면서 크기를 조절합니다.
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
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
        borderRadius: 8,
        backgroundColor: 'white',
        width:345,
        height:68
      },
      pointBox: {
        justifyContent: 'center',  
        alignItems: 'center',
        flex: 0.48,
      },
      usageBox: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 0.48,
      },
      pointText: {
        fontSize: 20,
        color: '#6E87E5',
        fontFamily: 'Pretendard-Medium'
      },
      explainText: {
        fontSize: 12,
        color: '#949698',
        fontFamily: 'Pretendard-Medium'
      },
      modalTitle: {
        fontSize: 23,
        fontFamily: 'Pretendard-Bold',
        color: '#000'
      },
      modalHashTag: {
        fontSize: 23,
        fontFamily: 'Pretendard-Bold',
        color: '#5782F1',
      },
      missionbar: {
        flexDirection: 'row',  // 아이템의 중앙에 아이콘과 텍스트를 정렬
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
        marginHorizontal: 30
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
      width: 24, 
      height: 24, 
    },
    person: {
        width: 20,  
        height: 20, 
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
        width: 48, // 원하는 크기에 따라 수정
        height: 48, // 원하는 크기에 따라 수정
    },
    rewardbutton: {
      width: 90,
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
    },
    rewardbuttonText: {
      fontFamily: 'Pretendard-SemiBold',
      color: 'white',
      fontSize: 15,
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
    imageContainer: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    modalImage: {
      width: '95%',       // Set the width as per your requirements
      height: '80%',      // Set the height as per your requirements
      resizeMode: 'contain',
      marginBottom: '-3%'
    },
    buttonTendency: {
      width: 155,
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
  selectedtext: {
    color: 'white',
  },
  selected: {
    backgroundColor: '#5782F1',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0.5,
      } 
    },
    textInput: {
      width: 338,
      height: 53,
      borderColor: '#EEF3FF',
      backgroundColor: '#EEF3FF',
      marginTop: 20,
      paddingHorizontal: 10,
      borderRadius: 10
    },
    selecttext:{
      flex:1,
      fontFamily: 'Pretendard-SemiBold',
      fontSize: 14,
      textAlign: 'center',
      right: 12
  },
  });