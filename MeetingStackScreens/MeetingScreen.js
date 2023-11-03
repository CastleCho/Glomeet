import { View, Image, TextInput, FlatList, SafeAreaView, Text, TouchableOpacity} from "react-native";
import React, { useState, useEffect } from 'react';
import styles from '../Styles/Styles.js';
import pingpong from '../images/pingpong.png';
import group_main from '../images/group_main.png'
import tennis_group from '../images/tennis_group.png';
import circle_add from '../images/circle_add.png';
import heart from '../images/heart.png'
import star from '../images/star.png'

const MeetingScreen = ({navigation}) =>{
    const category = ['ALL', '운동', '여행', '게임', '문화', '언어'];
    const when= ['최신순', '조회수', '추천순'];
    const [selectedTendency, setSelectedTendency] = useState('');
    const toggleTendency = (tendency) => {
        if (selectedTendency === tendency) {
            setSelectedTendency(''); // 이미 선택된 성향을 다시 클릭하면 해제
        } else {
            setSelectedTendency(tendency); // 아니라면 선택
        }
    };

    return(
        <SafeAreaView style= {styles.MeetingContainer}>
            <View>
            <TextInput 
                    style={styles.searchBar} 
                    placeholder="Search..."
            />
            <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 16, color: '#000000', left: 25, top:10}}>카테고리</Text>
            <FlatList
                    key="category"
                    style={{marginTop:10, marginBottom: 5 }}
                    data={category}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.buttonmeeting,
                                selectedTendency === item ? styles.meetingselected : {}
                            ]}
                            onPress={() => toggleTendency(item)}
                        >
                            <Text
                                style={[
                                    styles.meetingtext,
                                    selectedTendency === item ? styles.meetingselectedtext : {}
                                ]}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                />
            <View style={styles.dottedBorder}>
            </View>    
            <Image source={group_main} style={{width: 342, height: 163, marginTop: 10, left: 22, borderRadius: 10}} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={circle_add} style={{ width: 16, height: 16, left: 290, marginTop: 10 }} /> 
                <TouchableOpacity onPress={() => navigation.navigate('goToRegistration')} style={{marginLeft: 300, marginTop: 10}}>
                    <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 16, color: '#000000'}}>
                        등록하기
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                key="when"
                style={{ marginTop: 3 }}
                data={when}
                horizontal={true}
                ListHeaderComponent={
                    <Text style={{ fontFamily: 'Pretendard-Medium', fontSize: 16, color: '#000000', left: 15, marginTop: 8}}>
                        총 10개
                    </Text>
                }
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.buttonwhen,
                            selectedTendency === item ? styles.whenselected : {}
                        ]}
                        onPress={() => toggleTendency(item)}
                    >
                        <Text
                            style={[
                                styles.meetingtext,
                                selectedTendency === item ? styles.meetingselectedtext : {}
                            ]}
                        >
                            {item}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item}
            />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.itemContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('MeetingDetailScreen')}>
                    <View style={styles.tennisImageContainer}>
                        <Image source={tennis_group} style={styles.imageStyle} />
                        <Image source={heart} style={styles.overlayIcon} />
                    </View>
                </TouchableOpacity>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Tennis CLUB</Text>
                        <Text style={styles.date}>10.5일 15시</Text>
                        <Text style={styles.location}>학교 테니스 코트</Text>
                        <View style={styles.participantRow}>
                            <Image source={star} style={styles.participantImage} />
                            <Text style={styles.star}>2/4</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.itemContainer}>
                    <Image source={pingpong} style={styles.imageStyle} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>탁구 연습</Text>
                        <Text style={styles.date}>10.4일 9시</Text>
                        <Text style={styles.location}>대강당</Text>
                        <View style={styles.participantRow}>
                            <Image source={star} style={styles.participantImage} />
                            <Text style={styles.star}>3/4</Text>
                        </View>
                    </View>
                </View>
            </View>
        
        </SafeAreaView>
    )
}

export default MeetingScreen;

