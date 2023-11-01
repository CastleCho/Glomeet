import React, { useRef,useState } from 'react';
import {StyleSheet, Text, View, Image, FlatList,TextInput,TouchableOpacity} from 'react-native';
import { Modalize } from 'react-native-modalize';
import BasicModal from '../Styles/BasicModal';
import { BlurView } from "@react-native-community/blur";
import LinearGradient from 'react-native-linear-gradient';
import alramicon from '../images/alramicon.png'

const missions = [
    { id: '1', title: '오늘의 매칭하고', point: '300P 즉시 받기', state:'보상받기',icon: require('../images/bell.png')},
    { id: '2', title: '채팅 3번하고', point: '100P 즉시 받기', state:'1/3',icon: require('../images/thumb.png')},
    { id: '3', title: '추가 매칭 3번하고', point: '100P 즉시 받기', state:'2/3', icon: require('../images/bucket-dynamic-color.png')},
    { id: '4', title: '모임 가입하고', point: '300P 즉시 받기', state:'2/3', icon: require('../images/camera.png')},
    { id: '5', title: '프로필 변경 2번하고', point: '300P 즉시 받기', state:'보상받기', icon: require('../images/golbang.png')},
    { id: '6', title: '등록한 모임 인원이 달성하면', point: '300P 즉시 받기', state:'보상받기', icon: require('../images/book.png')},
];

export default function App() {
  const modalizeRef = useRef(null);

    return (
      <View style={styles.container}>
          <View style={styles.greetingBox}>
            <View>
              <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 18, color: 'black', marginTop: '1%'}}>
                안녕하세요! 귀여운 다은님
              </Text> 
              <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 12, color: 'black', marginTop: '1%'}}>
                오늘도 친구를 만나러 가볼까요?
              </Text>
            </View>
            <View style={styles.buttonbox}>
            <TouchableOpacity style={[styles.icon]}>
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
              <Text style={styles.pointText}>1,400P</Text>
              <Text style={styles.explainText}>보유 포인트</Text>
            </View>
            <View style={{width:1.7, height:39, backgroundColor: '#EEEEEE', borderRadius: 10,}}/>
            <View style={styles.usageBox}>
              <Text style={styles.pointText}>2개</Text>
              <Text style={styles.explainText}>참여중인 모임</Text>
            </View>
          </View>
          <Modalize ref={modalizeRef}
            alwaysOpen={240}
            modalHeight={670}
            modalStyle={{ borderTopLeftRadius: 45, borderTopRightRadius: 45 }} 
          >
            <View>
              <Text style={styles.challengeTitle}>친구와 함께</Text> 
              <Text style={styles.challengeHashTag}>#도전챌린지</Text>
            </View>
            <FlatList 
              data={missions}
              renderItem={({ item }) => (
                <View style={styles.missionItem}>
                  <Image source={item.icon} style={styles.challengeIcon} />
                  <View style={{ marginLeft: '6%', marginTop: '1%'}}>
                    <Text style={{fontFamily: 'Pretendard-SemiBold', fontSize: 14 ,color: '#3B3B3B',marginBottom:'3%'}}>
                      {item.title}
                    </Text>
                    <Text style={{fontFamily: 'Pretendard-ExtraBold',fontSize: 18 ,color: '#5165B2'}}>
                      {item.point}
                    </Text>
                  </View>
                  <View style={[
                    styles.button, 
                    item.state !== "보상받기" ? {backgroundColor: '#9FA4B1'} : {}
                  ]}>
                    <Text style={styles.buttonText} onPress={() => setModalVisible(true)}>
                      {item.state}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </Modalize>
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
        fontFamily: 'Pretendard-SemiBold'
      },
      explainText: {
        fontSize: 12,
        color: '#949698',
        fontFamily: 'Pretendard-Medium'
      },
      challengeTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        left: 10,
        marginBottom: 3,
        marginTop:10
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