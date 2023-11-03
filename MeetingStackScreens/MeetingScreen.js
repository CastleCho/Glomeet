import { View, Image, TextInput, FlatList, SafeAreaView, Text, TouchableOpacity} from "react-native";
import React, { useState, useEffect } from 'react';
import styles from '../Styles/Styles.js';
import pingpong from '../images/pingpong.png';
import group_main from '../images/group_main.png'
import tennis_group from '../images/tennis_group.png';
import circle_add from '../images/circle_add.png';
import heart from '../images/heart.png'
import person from '../images/person.png'
import search from '../images/Search.png'
import travel from '../images/meetingtravel.png'
import gamegroup from '../images/meetinggame.png'
const MeetingScreen = ({navigation}) =>{
    const category = ['ALL', '운동', '여행', '게임', '문화', '언어'];
    const when= ['최신순', '조회수', '추천순'];
    const meetgroup = [
        {id: '1', title: 'Tennis CLUB', date: '10.5일 15시', place:'학교 테니스 코트',icon: tennis_group, participants:'2/4'},
        {id: '2', title: '탁구 연습', date: '10.4일 9시', place:'대강당',icon: pingpong, participants:'3/4'},
        {id: '3', title: '국내여행 모집', date: '10.6일 14시', place:'부산',icon: travel, participants:'1/4'},
        {id: '4', title: '롤 자유랭 팀 모집', date: '10.8일 19시', place:'E-Sports피시방',icon: gamegroup, participants:'3/5'},
        ]
    const dots = new Array(58).fill(0);
    const [selectedTendency, setSelectedTendency] = useState('');
    const toggleTendency = (tendency) => {
        if (selectedTendency === tendency) {
            setSelectedTendency(''); // 이미 선택된 성향을 다시 클릭하면 해제
        } else {
            setSelectedTendency(tendency); // 아니라면 선택
        }
    };
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('MeetingDetailScreen')}>
                <View style={styles.tennisImageContainer}>
                <Image source={item.icon} style={styles.imageStyle} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    <View style={styles.locationbox}>
                        <Text style={styles.location}>{item.place}</Text>
                    </View>
                    <View style={styles.participantRow}>
                        <Image source={person} style={styles.participantImage} />
                        <Text style={styles.person}>{item.participants}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
      );
    return(
        <SafeAreaView style= {styles.MeetingContainer}>
            
            <View style={{borderRadius: 10 ,flexDirection: 'row', width: 350, height: 43, alignItems:'center', alignSelf: 'center', backgroundColor: '#F5F5F5'}}>
                <Image source={search} style={{width:25, height: 25, marginLeft: 5}}/>
                <TextInput style={{flex:1}}
                        placeholder="Search..."
                />
            </View>
            <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 18, color: '#000000', marginLeft:22, marginTop:15}}>카테고리</Text>
            <View style={{alignItems: 'center'}}>
                <View style={{ flexDirection: 'row', marginTop:15}}>
                    {dots.map((_, index) => (
                        <View
                            key={index}
                            style={{
                                width: 3,   // 도트의 넓이
                                height: 1,  // 도트의 높이
                                backgroundColor: '#CACCCF',
                                marginHorizontal: 1.5,  // 도트 사이의 간격
                            }}
                        />
                    ))}
                </View>
                <FlatList
                    key="category"
                    style={{ marginTop: 10}}
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
            </View>  
            
            <Image source={group_main} style={{width: 343, height: 163, alignSelf: 'center', marginTop: 10, borderRadius: 10}} />
                        
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal:22, marginTop: 22}}>
                <View style={{flex:1}}/>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.navigate('goToRegistration')}>
                    <Image source={circle_add} style={{ width: 20, height: 20}} /> 
                
                    <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 16, color: '#000000'}}>
                        등록하기
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center', marginHorizontal: 20, marginTop: 10}}>

                <Text style={{ fontFamily: 'Pretendard-Medium', fontSize: 16, color: '#000000'}}>
                    총 4개
                </Text>
                <View style={{flex: 1}}></View>
                <View style={{width: 174}}>
                    <FlatList
                        
                        key="when"
                        data={when}
                        horizontal={true}
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
                </View>
                
            </View>

            
            <FlatList
                style={{alignSelf: 'center', marginTop:10}}
                data={meetgroup}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            />                        
        
        </SafeAreaView>
    )
}

export default MeetingScreen;

