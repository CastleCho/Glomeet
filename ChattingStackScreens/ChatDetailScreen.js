import React, { useState, useEffect } from 'react';
import { Modal, View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Swipeout from 'react-native-swipeout';
// import { useNavigation } from '@react-navigation/native';
// import styles from '../Styles/Styles.js';
// import BasicButton from '../Styles/BasicButton.js'



const ChatDetailScreen = ({ route, navigation }) => {
    const { chat } = route.params;

    const [messages, setMessages] = useState([]);

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
    }, []);
    
    const [inputMessage, setInputMessage] = useState('');

    const sendMessage = async () => {
        if (inputMessage.trim() === '') {
            alert('Message cannot be empty!');
            return;
        }

        // setMessages(prevMessages => [...prevMessages, inputMessage]);
        // setInputMessage('');

        const updatedMessages = [...messages, inputMessage];

        try {
            await AsyncStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
            setMessages(updatedMessages);
            setInputMessage('');
        } catch (error) {
            console.error('Error saving message:', error);
        }
    };



    return (
        <SafeAreaView style={[styles.container, {backgroundColor: 'white'}]}>
            <View style={styles.container}>

                <View style={{ borderBottomWidth: 0.5, flexDirection: 'row', borderBottomColor: 'gray', alignItems: 'center', justifyContent: 'center'}}> 

                    <View style={{flexDirection: 'row'}}>

                        <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                            <Image
                                source={require('../images/backicon.png')}
                                style={{ width: 10, height: 15}}
                            />
                                <Text style={{fontSize: 15}}>Back</Text>
                        </TouchableOpacity>

                        <Text style={[styles.chatName, {flex: 1, textAlign: 'center', fontSize: 20, marginRight: 45}]}>
                            {chat.name}
                        </Text>


                        

                    </View>

                </View>
                    
                <ScrollView style={styles.messagesContainer}>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <Image source={chat.image} style={styles.profileImage} />
                        <View>
                            <Text style={styles.chatSmallName}>{chat.name}</Text>
                            <Text style={styles.chatMessage}>{chat.message}</Text>
                            {/* ... 기타 채팅방 내용 표시1  1 */}
                        </View>
                    </View>

                    {/* {messages.map((message, index) => (
                        <Text key={index} style={styles.message}>{message}</Text>
                    ))} */}

                </ScrollView>

                <View style={styles.inputContainer}>
                    <TextInput
                        value={inputMessage}
                        onChangeText={setInputMessage}
                        style={styles.input}
                        placeholder="Enter your message here..."
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                        <Text style={styles.sendButtonText}>Send</Text>
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
        justifyContent: 'space-between',
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    sendButton: {
        marginLeft: 10,
        padding: 8,
        backgroundColor: '#2196F3',
        borderRadius: 5,
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: '#868686',
        marginRight: 10
    },
    chatName: {
        flexDirection: 'row',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    chatSmallName: {
        fontSize: 12,
        marginBottom: 3,
    },
});

export default ChatDetailScreen;