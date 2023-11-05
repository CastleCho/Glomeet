import { View, Text, SafeAreaView, Image, TouchableOpacity} from "react-native";
import React, {useState } from 'react';
import tennis_group from '../images/tennis_group.png';
import styles from '../Styles/Styles.js';
import people from '../images/people.png'
import calender from '../images/calender.png'
import meetingdetail from '../images/meetingdetail.png'
import BasicModal from '../Styles/BasicModal';

const MeetingDetailScreen = ({navigation}) =>{
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <SafeAreaView style={styles.MeetingContainer}>
            <Image source={tennis_group} style={styles.MDimage} />
            <View style={styles.customBox}>
                <Text style={styles.boxInnerTitle}>Tennis CLUB</Text>
                <Text style={styles.boxInnerTime}>2시간 전</Text>
                <Text style={styles.boxInnerText}>테니스를 같이 칠 사람을 모집합니다. 테니스는 정말 좋은 운동이에요. 저랑 함께 테니스를 쳐요. 테니스를 같이 칠 사람을 모집합니다. 테니스는 정말 좋은 운동이에요. 저랑 함께 테니스를 쳐요. </Text>
                <View style={styles.dottedBorder}></View>
                <View style={styles.meetingBox}>
                    <Image source={calender} style={styles.meetingTime}/>
                    <Text>2023 / 10 / 05 15시</Text>
                    <View style={{flex:1}}/>
                    <Image source={people} style={styles.meetingTime}/>
                    <Text>4</Text>
                </View>
                <View style={styles.tennisBox}>
                    <View style={styles.tennisdetailBox}>
                        <Text style={styles.tennisdetail}>운동</Text>
                    </View>
                    <View style={{flex:1}}/>
                    <Text style={styles.location}>학교 테니스 코트</Text>
                </View>
                <View style={styles.customBoxMini}>
                    <Text style={styles.miniText}> 현재 2명이 참여중에 있습니다.</Text>
                    <View style={{flex:1}}/>
                    <View style={styles.ImageButton}>
                        <Image source={meetingdetail} style={styles.Miniimage}/>
                        <View style={{flex:1}}/>
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                            style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>모임 참여하기</Text>
                        </TouchableOpacity>
                    </View>


                    {modalVisible && (
                        <BasicModal
                        animationType="fade"
                        title={' "테니스 치실분" 모임에 \n     참가하시겠습니까?'}
                        confirmButtonText="참가"
                        cancelButtonText="취소"
                        transparent={true}
                        visible={modalVisible}
                        onClose={() => setModalVisible(false)}
                        onConfirm={() => {
                            navigation.navigate('채팅', {
                                screen: 'ChatTennisScreen',
                                params: { /* 필요한 파라미터 */ },
                            });
                            setModalVisible(false);
                            
                        }}
                        />
                    )}

                </View>
            </View>
        </SafeAreaView>
    )
}

export default MeetingDetailScreen;
