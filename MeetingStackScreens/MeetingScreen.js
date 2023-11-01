import { View, Image, TextInput, FlatList, SafeAreaView, Text, TouchableOpacity} from "react-native";
import React, { useState, useEffect } from 'react';
import styles from '../Styles/Styles.js';
import pingpong from '../images/pingpong.png';
import group_main from '../images/group_main.png'
import tennis_group from '../images/tennis_group.png';
import circle_add from '../images/circle_add.png';
import heart from '../images/heart.png'


const MeetingScreen = () =>{
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
            <Text style={{fontFamily: 'Pretendard-SemiBold', fontSize: 16, color: '#000000', left: 25, top:10}}>카테고리</Text>
            <FlatList
                    key="category"
                    style={{marginTop:15, }}
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
                <Text style={{fontFamily: 'Pretendard-SemiBold', fontSize: 16, color: '#000000', marginLeft: 300, marginTop: 10}}>
                    등록하기
                </Text>
            </View>

            <FlatList
                key="when"
                style={{ marginTop: 10, marginBottom: -20 }}
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
        <Text style={{ fontFamily: 'Pretendard-SemiBold', fontSize: 16, color: '#000000', left: 15, marginBottom: 10}}>
                총 10개
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <Image source={tennis_group} style={{width: 176, height: 164, borderRadius: 10, marginLeft: 10,}} />
                <Image source={pingpong} style={{width: 175, height: 145, borderRadius: 10, marginLeft: 15,}} />
            </View>
        </SafeAreaView>
    )
}

export default MeetingScreen;

