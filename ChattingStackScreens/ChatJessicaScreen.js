import React, { useState, useEffect } from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Image} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import send from '../images/send.png'
import backicon from '../images/backicon.png';

const ChatJessicaScreen = ({navigation }) => {
    const chat = {name:'Jessica',image:require('../images/boy.png'), messages: 'asdasd'}
    const category = ['안녕하세요', '뭐하고 계세요?', '같이 등산하러가요', '오늘 같이 카페가요!', '기분이 어때요?'];
    const [selectedCategory, setSelectedCategory ] = useState(null);
    
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };
    const [messages, setMessages] = useState([]);
    const [messageSent, setMessageSent] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showPrompt, setShowPrompt] = useState(true);


    useEffect(() => {
        const loadMessages = async () => {
            try {
                const savedMessages = await AsyncStorage.getItem('chatMessages');
                if (savedMessages) {
                    setMessages(JSON.parse(savedMessages));
                }
            } catch (error) {
                console.error('Error loading messages:', error);
            }
        };

        loadMessages();
        navigation.setOptions({
            headerTitle: chat.name,
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('채팅', {
                    screen: 'ChattingScreen'})}>
                    <Image source={backicon} style={{width: 9, height: 18, margin: 20}} />
                </TouchableOpacity>
            ),
            headerShown: true,
          });
        }, [chat, navigation]);
    
    const [inputMessage, setInputMessage] = useState('');
    
    const handlePresetMessage = () => {
        const predefinedMessage = "Let’s go to a cafe together today!";
        
        setInputMessage(predefinedMessage);
      };

      const sendMessage = async () => {
        if (inputMessage.trim() === '') {
            alert('Message cannot be empty!');
            return;
        }
        // 새로운 메시지 객체 생성
        const newMessage = {
            text: inputMessage,
            id: Date.now().toString()
        };

        const updatedMessages = [...messages, newMessage];

        try {
            await AsyncStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
            setMessages(updatedMessages);
            setInputMessage('');
            setMessageSent(true);
            setShowImage(true);
            setShowPrompt(false);
        } catch (error) {
            console.error('Error saving message:', error);
        }
    };

    const renderLastMessage = () => {
        if (!messageSent || messages.length === 0) {
            return null; // 메시지가 보내지지 않았거나 없을 경우 아무것도 표시하지 않음
        }

        // 메시지 배열에서 마지막 메시지를 추출
        const lastMessage = messages[messages.length - 1];

        return (
            <View style={styles.messageItem}>
                <Text style={styles.messageText}>{lastMessage.text}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: 'white'}]}>
            <View style={styles.container}>
                    <View style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
                    <View style={{ width: 113, height: 26, backgroundColor: '#DFDFDF', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'pretendard-Medium', color: '#8A8A8A', fontSize: 11, textAlign: 'center' }}>
                            2023년 10월 5일
                        </Text>
                    </View>
                        <View style={{marginTop:25 ,justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily:'pretendard-Medium', fontSize: 14, color:'#B4B4B4',textAlign: 'center'}}>매칭이 완료되었습니다! {'\n'} 새로운 사람과 대화할 때 매너있는 채팅을 해주세요 :)</Text>
                        </View>
                        <View style={{flex:1}}/>
                        <View style={{marginTop:25 ,justifyContent: 'center', alignItems: 'center',marginTop: 270}}>
                            <Text style={{fontFamily:'pretendard-Medium', fontSize: 14, color:'#B4B4B4',textAlign: 'center'}}>Today 12:05</Text>
                        </View>
                        
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}} >
                    {renderLastMessage()}
                    {showImage && <Image source={chat.image} style={styles.profileImage} />}
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        {showPrompt && (
                            <Text style={{color: '#5782F1', fontFamily: 'pretendard-Medium',fontSize: 14}}>
                                버튼을 눌러 채팅을 시작해보세요!
                            </Text>
                        )}
                        <View style={{ flexDirection: 'column', marginTop: 20, alignItems: 'center' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            {category.slice(0, 3).map((item, index) => (
                            <TouchableOpacity 
                                key={index} 
                                style={[
                                styles.chatbutton, 
                                { backgroundColor: item === selectedCategory ? '#5782F1' : '#D1DCFB' }
                                ]}
                                onPress={() => {handlePresetMessage(item);
                                    handleCategorySelect(item);}}
                            >
                                <Text style={{
                                fontFamily: 'Pretendard-Medium', 
                                fontSize: 11, 
                                color: item === selectedCategory ? '#ffffff' : '#949698'
                                }}>
                                {item}
                                </Text>
                            </TouchableOpacity>
                            ))}
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            {category.slice(3).map((item, index) => (
                            <TouchableOpacity 
                                key={index} 
                                style={[
                                styles.chatbutton, 
                                { backgroundColor: item === selectedCategory ? '#5782F1' : '#D1DCFB' }
                                ]}
                                onPress={() => {handlePresetMessage(item);
                                    handleCategorySelect(item);}}
                            >
                                <Text style={{
                                fontFamily: 'Pretendard-Medium', 
                                fontSize: 11, 
                                color: item === selectedCategory ? '#ffffff' : '#949698'
                                }}>
                                {item}
                                </Text>
                            </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    </View>

                <View style={styles.inputContainer}>
                <TextInput
                    value={inputMessage}
                    onChangeText={setInputMessage}
                    style={[
                        styles.input,
                        { color: inputMessage ? '#000000' : '#B9B9B9' }
                    ]}
                    placeholder="Type Something...."
                />
                    <TouchableOpacity style={[styles.sendButton]} onPress={sendMessage}>
                        <Image source={send} style={{width: 24, height: 24}} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    messagesContainer: {
        flex: 1,
    },
    message: {
        padding: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        marginVertical: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 30,
        backgroundColor:'#F1F1F1' ,
        fontFamily: 'Pretendard-Regular',
        fontSize:14,
        color: '#B9B9B9'
    },
    sendButton: {
        marginLeft: 10,
        backgroundColor: '#F1F1F1',
        borderRadius: 45,
        width: 71,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    sendButtonText: {
        color: '#B9B9B9',

    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: '#D7D7D7',
        backgroundColor: '#D7D7D7',
        marginRight: 10,
        marginLeft: 10
    },
    chatName: {
        flexDirection: 'row',
        fontSize: 20,
        fontFamily: 'pretendard-Medium'
    },
    chatSmallName: {
        fontSize: 12,
        marginBottom: 3,
    },
      chatbutton: {
        width: 110, 
        height: 26, 
        borderRadius: 20, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderColor: '#ffffff',
        borderWidth: 1,
        marginHorizontal: 7.5
      },
      chatMessage: {
        fontFamily: 'Pretendard-Regular',
        fontSize: 14,
        marginLeft: 20
      },
      messageItem: {
        marginVertical: 5,
        backgroundColor: '#5782F1',
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 20,
        width: 250, height: 50,
        alignItems: 'flex-start',
        paddingLeft: 20
    },
    messageText: {
        fontFamily: 'Pretendard-Regular',
        color: '#FFFFFF',
        fontSize: 14,
        marginRight: 20,
    },
});

export default ChatJessicaScreen;