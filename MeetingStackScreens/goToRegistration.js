import { View, Text, ScrollView, Image, TouchableOpacity, TextInput} from "react-native";
import styles from "../Styles/Styles";
import React, {useState } from 'react';
import register from '../images/register.png'
import BasicModal from "../Styles/BasicModal";
import ImagePicker from 'react-native-image-crop-picker';
import feedIcon from '../images/cameraicon.png';
import calender from '../images/calender.png';

const GoToRegistration = ({navigation}) =>{
    const [contentinputValue, setContentInputValue] = useState('');
    const [titleinputValue, setTitleInputValue] = useState('');
    const [count, setCount] = useState(3);
    const dates = [7, 8, 9, 10, 11];
    const day = ['토', '일', '월', '화', '수'];
    const time = ['14:30','15:00','15:30','16:00'];
    const category = ['운동', '여행', '게임', '문화', '언어'];
    const [selectedDate, setSelectedDate ] = useState(null); 
    const [selectedTime, setSelectedTime ] = useState(null); 
    const [selectedCategory, setSelectedCategory ] = useState(null); 
    const [modalVisible, setModalVisible] = useState(false);
    const handleRegistrationComplete = () => {
        navigation.navigate('RegistrationComplete');
    };
    
    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };
    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };
    const [selectedImage, setSelectedImage] = useState(null);
    const pickImage = () => {
        ImagePicker.openPicker({
            multiple: false // 한 개의 이미지만 선택
        }).then(image => {
            setSelectedImage(image.path); // 선택된 이미지의 경로를 저장
        }).catch(e => {
            console.log(e); // 에러 처리 필요 시
        });
    };
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
            <TouchableOpacity onPress={pickImage} style={{ marginRight: 15 }}>
                <Image
                source={feedIcon}
                style={{ width: 20, height: 20,  tintColor: '#000'}} 
                />
            </TouchableOpacity>
            ),
        });
    }, [navigation, pickImage]);
    return(
        <ScrollView contentContainerStyle={{ alignItems: 'center',backgroundColor: '#ffffff'}}>
            <View style={styles.dashregistration}>
                <View style={styles.registration}>
                    <Image
                        source={selectedImage ? { uri: selectedImage } : register}
                        style={selectedImage ? { width: '100%', height: '100%', alignSelf: 'center' } : { width: 25, height: 25 }}
                        resizeMode={selectedImage ? 'cover' : 'contain'} 
                    />
                </View>
            </View>

            <View style={{alignItems: 'flex-start',  width: 338 }}>
                <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 16, color: '#25282B', marginTop: 40}}>
                    참여 인원 수
                </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',width: 320, height: 40, borderWidth: 1, borderRadius: 10, marginTop: 20, borderColor: '#E5E5E5'}}>
                {/* - 버튼 */}
                <TouchableOpacity style={{height: 40, alignItems:'center', justifyContent: 'center'}} onPress={() => setCount(prevCount => prevCount - 1)}>
                    <Text style={{ fontSize: 15, marginHorizontal: 38}}>-</Text>
                </TouchableOpacity>
                <View style={{width:1.7, height:18, backgroundColor: '#EEEEEE', borderRadius: 10,}}/>
                {/* 현재 값 표시 */}
                <Text style={{ fontSize: 15, flex: 1, textAlign: 'center'}}>{count}</Text>
                <View style={{width:1.7, height:18, backgroundColor: '#EEEEEE', borderRadius: 10,}}/>
                {/* + 버튼 */}
                <TouchableOpacity style={{height: 40, alignItems:'center', justifyContent: 'center'}} onPress={() => setCount(prevCount => prevCount + 1)}>
                    <Text style={{ fontSize: 15, marginHorizontal: 38}}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems: 'flex-start',  width: 338 ,flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 16, color: '#25282B'}}>
                    글 제목
                </Text>
                <Text style={{ fontSize: 13, fontFamily: 'Pretendard-Regular', color: '#D3D3D3'}}> {titleinputValue.length}/20 </Text>
            </View>
            <View>
                <TextInput
                    style={{
                        width: 338,
                        height: 40,
                        borderColor: '#F0EFF2',
                        borderBottomWidth: 1,
                        fontFamily: 'Pretendard-Regular',
                        color:'#000',
                        fontSize: 14
                    }}
                    placeholder="글 제목을 입력하세요"
                    placeholderTextColor= '#D3D3D3'
                    onChangeText={text => setTitleInputValue(text)} // 입력된 텍스트로 상태 업데이트
                    maxLength={20}
                />
            </View>

            <View style={{alignItems: 'flex-start',  width: 338 ,flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 16, color: '#25282B'}}>
                    모임 소개
                </Text>
                <Text style={{ fontSize: 13, fontFamily: 'Pretendard-Regular', color: '#D3D3D3'}} > {contentinputValue.length}/50 </Text>
            </View>
            <View style={styles.introduce}>
                <TextInput style={{
                        marginLeft: 5,
                        height: 40,
                        borderColor: '#F0EFF2',
                        borderBottomWidth: 1,
                        fontFamily: 'Pretendard-Regular',
                        color:'#000',
                        fontSize: 14
                    }}
                    placeholder="모임 소개를 입력하세요"
                    placeholderTextColor= '#D3D3D3'
                    onChangeText={text => setContentInputValue(text)} // 입력된 텍스트로 상태 업데이트
                    maxLength={50}
                />
            </View>
            <View style={{alignItems: 'flex-start',  width: 338,flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 16, color: '#25282B'}}>
                    날짜 선택
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            {
                dates.map((date, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={{ 
                            width: 44,
                            height: 64,
                            marginHorizontal: 7.5,
                            borderRadius: 30, 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            backgroundColor: date === selectedDate ? '#5782F1' : '#F1F1F1'
                        }}
                        onPress={() => handleDateSelect(date)}
                    >
                        <Text style={{ fontFamily: 'Pretendard-SemiBold', fontSize: 16 ,color: date === selectedDate ? 'white' : 'white' }}>{date}</Text>
                        <Text style={{ fontFamily: 'Pretendard-Regular', fontSize: 12 ,color: date === selectedDate ? 'white' : 'white' }}>{day[index]}</Text>
                    </TouchableOpacity>
                ))
            }
            <TouchableOpacity  
                        style={{ 
                            width: 44,
                            height: 64,
                            marginHorizontal: 7.5,
                            borderRadius: 30, 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            backgroundColor: '#E1EAFF'
                        }}
                    >
                        <Image
                        source={calender}
                        style={{ width: 20, height: 19, tintColor: 'white' }}
                    />
                    </TouchableOpacity>
        </View>
        <View style={{alignItems: 'flex-start',  width: 338,flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 16, color: '#25282B'}}>
                    시간대 선택
                </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            {time.map((item, index) => (
                <TouchableOpacity 
                key={index} 
                style={{ 
                    width: 65, 
                    height: 37, 
                    borderRadius: 10, 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: item === selectedTime ? '#5782F1' : 'white',
                    borderColor: '#F1F1F1',
                    borderWidth: 1,
                    marginHorizontal: 11
                }}
                onPress={() => handleTimeSelect(item)}
                >
                <Text style={{fontFamily: 'Pretendard-Regular', fontSize: 15, color: item === selectedTime ? '#ffffff' : '#949698' }}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>

        <View style={{alignItems: 'flex-start',  width: 338,flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Text style={{fontFamily: 'Pretendard-Bold', fontSize: 16, color: '#25282B'}}>
                키워드 선택
            </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            {category.map((item, index) => (
                <TouchableOpacity 
                key={index} 
                style={{ 
                    width: 53, 
                    height: 28, 
                    borderRadius: 10, 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: item === selectedCategory ? '#5782F1' : 'white',
                    borderColor: '#F1F1F1',
                    borderWidth: 1,
                    marginHorizontal: 7.5
                }}
                onPress={() => handleCategorySelect(item)}
                >
                <Text style={{fontFamily: 'Pretendard-Regular', fontSize: 13, color: item === selectedCategory ? '#ffffff' : '#949698' }}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>

        <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
            backgroundColor: '#5782F1',
            borderRadius: 25,
            paddingVertical: 10,
            paddingHorizontal: 30,
            marginVertical: 50,
            width: 318,
            height: 52,
            alignItems: 'center', 
            justifyContent: 'center', 
            }}
        >

        {modalVisible && (
            <BasicModal
            animationType="fade"
            title={'모임을 등록하시겠습니까?'}
            confirmButtonText="등록"
            cancelButtonText="취소"
            transparent={true}
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            onConfirm={() => {
                setModalVisible(false);
                handleRegistrationComplete();
            }}
            />
        )}
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontFamily: 'Pretendard-Bold'}}>등록하기</Text>
        </TouchableOpacity>

        </ScrollView>
    )
}

export default GoToRegistration;
