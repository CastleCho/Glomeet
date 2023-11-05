import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, SafeAreaView, Image, ScrollView } from "react-native";
import Swipeout from 'react-native-swipeout';
import { useNavigation } from '@react-navigation/native';
import search from '../images/Search.png'
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
        { id: 'A3', name: 'James', tags: ['#전자과', '#남자', '#내향', '#게임'], image: require('../images/boy.png'), message: 'Do you want to go to a cafe with me?', time: '09:07', unread: 9 },
        { id: 'A4', name: 'Nhung Hoàng', tags: ['#이비즈', '#남자', '#외향', '#노래'], image: require('../images/boy.png'), message: 'I took a walk with my dog today and...', time: '10/03', unread: 1 },
        { id: 'A2', name: 'Jessica', tags: ['#간호학과', '#여자', '#내향', '#독서'], image: require('../images/chat_char.png'), message: 'Let’s go to a cafe together today', time: '12:05', unread: 0 },
        { id: 'A5', name: 'Kate', tags: ['#약학과', '#여자', '#외향', '#수영'], image: require('../images/chat_char2.png'), message: 'Do you know where the gym is?', time: '10/01', unread: 0 },
    ];

    const groupchats = [
        { id: 'B1', name: 'Shopping together (;', tags: ['#간호학과', '#쇼핑', '#친목'], image: require('../images/AjouLogo.png'), message: 'Who wants to go shopping today?', time: '11:31', unread: 3 },
        { id: 'B2', name: 'Cook Group Chat', tags: ['#경영학과', '#음식', '#요리', '#술'], image: require('../images/meeting.png'), message: "I'm glad to see you.", time: '11:25', unread: 2 },
        { id: 'B3', name: 'Game Room', tags: ['#경영학과', '#음식', '#게임'], image: require('../images/Main.png'), message: 'A new game has been released!', time: '09:38', unread: 4 },
        { id: 'B4', name: "Let's sing", tags: ['#전자과', '#친목', '#노래'], image: require('../images/chatting.png'), message: 'Who wants to sing with me?', time: '10:25', unread: 13 },
        { id: 'B5', name: 'Drink', tags: ['#이비즈', '#친목', '#음식', '#술'], image: require('../images/Matching.png'), message: 'A new bar opened today', time: '10:23', unread: 0 },
    ];

    return(
        <SafeAreaView style= {styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            activePage === 'Matching' ? styles.activeButton : {}
                        ]}
                        onPress={() => setActivePage('Matching')}>
                        <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 14, color: '#000'}}>매칭</Text>
                    </TouchableOpacity>
                    <View style={{flex:1}}/>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            activePage === 'Meeting' ? styles.activeButton : {}
                        ]}
                        onPress={() => setActivePage('Meeting')}>
                        <Text style={{fontFamily: 'Pretendard-Medium', fontSize: 14, color: '#000'}}>모임</Text>
                    </TouchableOpacity>
                </View>



                <View style={{borderRadius: 10 ,flexDirection: 'row', width: 350, height: 43, alignItems:'center', alignSelf: 'center', backgroundColor: '#F5F5F5'}}>
                    <Image source={search} style={{width:25, height: 25, marginLeft: 5}}/>
                    <TextInput style={{flex:1}}
                            placeholder="Search..."
                    />
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
      width: 361,
      height: 43,
      padding: 10,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: '#FFFFFF',
      backgroundColor: '#F5F5F5',
      marginBottom: 10,
    },
    page: {
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 7
    },
    activeButton: {
      backgroundColor: '#ffffff',
      width: 196,
      height: 35,
      borderBottomColor: '#5782F1',
      borderBottomWidth: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: 196,
      height: 35,
      borderBottomColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 5,
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
        borderWidth: 1,
        borderColor: '#B5B5B5',
        marginRight: 15,
        
    },
    chatDetails: {
        flex: 1
    },
    chatName: {
        fontSize: 18,
        fontFamily: 'pretendard-Medium'
    },
    chatMessage: {
        fontSize: 14,
        fontFamily: 'pretendard-Medium'
    },
    chatTime: {
        marginBottom: 5,
        color: '#A9A9A9'
    },
    unreadBadge: {
        backgroundColor: '#FF3838',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    unreadText: {
        color: '#FFFFFF',
        fontSize: 11
    },
    message: {
      color: '#000000',
      fontFamily: 'Pretendard-Medium'
    },
    tagsContainer: {
      flexDirection: 'row',
      marginVertical: 3,
    },
    tagBox: {
        
        height: 26,
        borderColor: '#ffffff',
        borderRadius: 20,    
        marginRight: 10,
        marginTop: 5,
        backgroundColor: '#D1DCFB',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    tagText: {
        fontFamily: 'Pretendard-Medium',
        fontSize: 11,
        marginHorizontal: 8,
        color: '#8A8A8A',
    }
});

export default ChattingScreen;