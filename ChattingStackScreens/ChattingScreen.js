import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, SafeAreaView, Image, ScrollView } from "react-native";
import Swipeout from 'react-native-swipeout';
import { useNavigation } from '@react-navigation/native';
import search from '../images/magnifier.png'
// import styles from '../Styles/Styles.js';
// import BasicButton from '../Styles/BasicButton.js'



const ChattingScreen = () => {
    
    const navigation = useNavigation();

    const [activePage, setActivePage] = useState('Matching');

    const handlePress = (chat) => {
        navigation.navigate('ChatDetailScreen', { chat });
    };
    const selectChatRoom = (chat) => {
        navigation.navigate('ChatDetailScreen', { chatName: chat.name });
    }
    // 가상의 대화 데이터
    const chats = [
        { id: 'A1', name: 'Toans', tags: ['#경영학과', '#남자', '#외향', '#축구'], image: require('../images/boy.png'), message: ['Hi, my name is Toans'], time: '12:33', unread: 1 },
        { id: 'A2', name: 'Siliva', tags: ['#간호학과', '#여자', '#내향', '#독서'], image: require('../images/girl.png'), message: 'hi', time: '12:31', unread: 1 },
        { id: 'A3', name: 'James', tags: ['#전자과', '#남자', '#내향', '#게임'], image: require('../images/boy.png'), message: 'Do you want to go to a cafe with me?', time: '09:07', unread: 9 },
        { id: 'A4', name: 'Nhung Hoàng', tags: ['#이비즈니스학과', '#남자', '#외향', '#노래'], image: require('../images/boy.png'), message: 'I took a walk with my dog today and...', time: '10/17', unread: 1 },
        { id: 'A5', name: 'Kate', tags: ['#약학과', '#여자', '#외향', '#수영'], image: require('../images/girl.png'), message: 'Do you know where the gym is?', time: '10/09', unread: 0 },
    ];

    const groupchats = [
        { id: 'B1', name: 'Shopping together (;', tags: ['#간호학과', '#쇼핑', '#친목'], image: require('../images/AjouLogo.png'), message: 'Who wants to go shopping today?', time: '11:31', unread: 3 },
        { id: 'B2', name: 'Cook Group Chat', tags: ['#경영학과', '#음식', '#요리', '#술'], image: require('../images/meeting.png'), message: "I'm glad to see you.", time: '11:25', unread: 2 },
        { id: 'B3', name: 'Game Room', tags: ['#경영학과', '#음식', '#게임'], image: require('../images/Main.png'), message: 'A new game has been released!', time: '09:38', unread: 4 },
        { id: 'B4', name: "Let's sing", tags: ['#전자과', '#친목', '#노래'], image: require('../images/chatting.png'), message: 'Who wants to sing with me?', time: '10/25', unread: 13 },
        { id: 'B5', name: 'Drink', tags: ['#이비즈니스학과', '#친목', '#음식', '#술'], image: require('../images/Matching.png'), message: 'A new bar opened today', time: '10/23', unread: 0 },
    ];

    return(
        <SafeAreaView style= {styles.container}>
                
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        source={require('../images/logo_glomeet.png')}
                        style={{ width: 105, height: 39, marginBottom: 10 }}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            activePage === 'Matching' ? styles.activeButton : null,
                        ]}
                        onPress={() => setActivePage('Matching')}>
                        <Text>매칭</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            activePage === 'Meeting' ? styles.activeButton : null,
                        ]}
                        onPress={() => setActivePage('Meeting')}>
                        <Text>모임</Text>
                    </TouchableOpacity>
                </View>



                <View style={{flexDirection: 'row'}}>
                        
                    <View style={styles.searchInput}>
                        <Image source={search} style={{width: 25, height: 25, marginRight: 5}} />
                        <TextInput placeholder='search...' style={{width: '90%'}}/>
                    </View>

                </View>



                {activePage === 'Matching' && (
                    <View style={styles.page}>
                        
                        <FlatList
                            data={chats}
                            renderItem={({ item }) => (
                                <View style={styles.chatItem}>
                                    <TouchableOpacity style={{flexDirection:'row'}} onPress={() => handlePress(item)}>
                                        <Image source={item.image} style={styles.profileImage} />

                                        <View style={styles.chatDetails}>
                                            <Text style={styles.chatName}>{item.name}</Text>
                                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.chatMessage}>{item.message}</Text>
                                            <View style={styles.tagsContainer}>
                                                {item.tags.map((tag, index) => (
                                                    <View style={styles.tagBox} key={index}>
                                                        <Text style={styles.tagText}>{tag}</Text>
                                                    </View>
                                                ))}
                                            </View>
                                        </View>

                                        <View style={{alignItems: 'center'}}>
                                            <Text style={styles.chatTime}>{item.time}</Text>
                                            {item.unread > 0 && <View style={styles.unreadBadge}><Text style={styles.unreadText}>{item.unread}</Text></View>}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                        />

                    </View>
                )}
                {activePage === 'Meeting' && (
                    <View style={styles.page}>
                        
                        <FlatList
                            data={groupchats}
                            renderItem={({ item }) => (
                                <View style={styles.chatItem}>
                                    <TouchableOpacity style={{flexDirection:'row'}} onPress={() => handlePress(item)}>
                                        <Image source={item.image} style={styles.profileImage} />

                                        <View style={styles.chatDetails}>
                                            <Text style={styles.chatName}>{item.name}</Text>
                                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.chatMessage}>{item.message}</Text>
                                            <View style={styles.tagsContainer}>
                                                {item.tags.map((tag, index) => (
                                                    <View style={styles.tagBox} key={index}>
                                                        <Text style={styles.tagText}>{tag}</Text>
                                                    </View>
                                                ))}
                                            </View>
                                        </View>
                                        
                                        <View style={{alignItems: 'center'}}>
                                            <Text style={styles.chatTime}>{item.time}</Text>
                                            {item.unread > 0 && <View style={styles.unreadBadge}><Text style={styles.unreadText}>{item.unread}</Text></View>}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                        />

                    </View>
                )}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#FFFFFF',
    },
    searchInput: {
      flexDirection: 'row',      
      flex: 1,
      marginHorizontal: 15,
      width: '90%',
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#000000',
      backgroundColor: '#F5F5F5',
      marginBottom: 10,
    },
    page: {
      marginBottom: 20,
    },
    activeButton: {
      backgroundColor: '#ddd',
      width: '50%',
      borderBottomColor: 'blue',
      borderBottomWidth: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      padding: 10,
      width: '50%',
      borderColor: '#868686',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    chatItem: {
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: '#868686',
        marginRight: 10
    },
    chatDetails: {
        flex: 1
    },
    chatName: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    chatMessage: {
        color: '#aaa'
    },
    chatTime: {
        marginBottom: 5,
        color: '#aaa'
    },
    unreadBadge: {
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    unreadText: {
        color: 'white',
        fontSize: 12
    },
    message: {
      color: 'gray',
    },
    tagsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginRight: 5,
    },
    tagBox: {
        paddingHorizontal: 8,  // 태그 안쪽의 가로 패딩
        paddingVertical: 3,    // 태그 안쪽의 세로 패딩
        borderWidth: 0,        // 태그 테두리 두께
        borderColor: '#ddd',   // 태그 테두리 색상
        borderRadius: 10,      // 태그 모서리 둥글게
        marginRight: 2,        // 태그와 태그 사이의 거리
        marginBottom: 0,       // 다음 줄로 넘어갈 때의 태그와 태그 사이의 거리
        marginTop: 5,
        backgroundColor: '#D1DCFB',
    },
    tagText: {
        marginTop: 0,
        fontSize: 10,
        color: '#8A8A8A', // 또는 다른 색상
    }
});

export default ChattingScreen;