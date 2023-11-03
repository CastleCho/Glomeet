import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        
        alignItems: 'center',
      },
    MeetingContainer: {
      flex: 1,
      backgroundColor: '#ffffff'
    },
  groupMain: {
      width: 342, 
      height: 163, 
      marginVertical: 20, 
      alignSelf: 'center',
      borderRadius: 10
  },
  searchBar: {
      marginHorizontal: 20,
      padding: 13,
      fontFamily: 'pretendard-Medium',
      borderRadius: 16.67,
      borderWidth: 1,
      backgroundColor: '#F5F5F5',
      borderColor: '#F5F5F5',
      marginTop: 15
  },
  categories: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 10,
  },
  pingPong: {
      width: 175, 
      height: 145, 
      position: 'absolute',
      top: 350, 
      left: 200, 
      borderRadius: 10
  },
  tennisGroup: {
      width: 176, 
      height: 164, 
      position: 'absolute',
      top: 185, 
      left: 17, 
      borderRadius: 10
  },
    button: {
        marginHorizontal: '5%',
        width: '90%',
        backgroundColor: '#5782F1',
        borderRadius: 25,
        justifyContent: 'center', // 텍스트를 세로로 중앙에 위치시키기 위해 추가
        alignItems: 'center',
        height: 52,
        marginVertical:'3%'

    },
    buttonText: {
        fontFamily: 'Pretendard-Bold',
        color: '#ffffff',
        fontSize: 12,
      },
    notice: {
        margin: '3%',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    shadowBox: {
        borderRadius: 2,
        width: 177,
        height: 68,
        backgroundColor: 'white',
        shadowColor: "#F8F4FF",
        shadowOffset: {
          width: 0,
          height: 0.5,
        },
        borderWidth: 0.1,
        borderColor: '#D3D3D3',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // Android에서도 동작하게 하기 위한 속성
        justifyContent: 'center', // 텍스트를 세로로 중앙에 위치시키기 위해 추가
        alignItems: 'center',
      },
    navtext:{
        fontFamily: 'Pretendard-Regular',
        fontSize: 12,
    },
    matchingcard: {
      borderRadius:20,
      shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 4, // Android에서도 동작하게 하기 위한 속성
        
    },
    gradient: {
        width:307, 
        height:320, 
        borderRadius:20,
        justifyContent: 'center', // 텍스트를 세로로 중앙에 위치시키기 위해 추가
        alignItems: 'center',
      },
    chatbutton:{
        width:281, 
        height:38, 
        elevation:2,
        backgroundColor:'white',
        borderRadius:20, 
        justifyContent:'center', 
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:20, 
        marginTop:14,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
      },
    buttonTendency: {
        width: 327,
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
    meetingselected: {
        backgroundColor: '#5782F1',
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 0.5,
        },borderColor: '#5782F1',
        borderWidth:1,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4, // Android에서도 동작하게 하기 위한 속성
        justifyContent: 'center', // 텍스트를 세로로 중앙에 위치시키기 위해 추가
        alignItems: 'center',
    },
      meetingselecttext:{
        flex:1,
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 12,
        textAlign: 'center',
        right: 12,
    },
    meetingtext:{
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 12,
        color: '#8A8A8A'
    },
    meetingselectedtext: {
      color: 'white',
  },
  buttonmeeting: {
    width: 52,
    height: 26,
    marginHorizontal:3,
    backgroundColor: '#D1DCFB',
    borderColor: '#D1DCFB',
    borderWidth:1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    left: 20,
    marginTop: 5

    },
    dottedBorder:{
    borderWidth: 1,
    borderColor: '#CACCCF80',
    borderStyle: 'dashed',
    backgroundColor: '#CACCCF80',
    marginTop: 5,
    width:350,
    marginLeft: 20,
    marginBottom: 10
    },
    buttonwhen: {
      width: 52,
      height: 26,
      marginHorizontal:3,
      backgroundColor: 'white',
      borderColor: '#969696',
      borderWidth:1,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      left: 150,
      marginTop: 5
      },
      whenselected: {
        backgroundColor: '#969696',
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 0.5,
        },borderColor: '#969696',
        borderWidth:1,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4, // Android에서도 동작하게 하기 위한 속성
        justifyContent: 'center', // 텍스트를 세로로 중앙에 위치시키기 위해 추가
        alignItems: 'center',
    },
    itemContainer: {
      width: 176,
      height: 270,
      margin: 10,
      borderRadius: 10,
      overflow: 'hidden',
    },
    imageStyle: {
        width: '100%',
        height: 145,
    },
    textContainer: {
        padding: 5,
        backgroundColor: '#FFFFFF',
        borderColor: 'grey',
    },
    title: {
      fontFamily: 'pretendard-Regular'
    },
    date: {
        fontSize: 12,
        fontFamily: 'pretendard-Regular',
        color: '#888',
    },
    location: {
        fontSize: 12,
        color: '#08C754',
        backgroundColor: '#D7F6E4',
        fontFamily: 'pretendard-Regular',
        width: 100
    },
    star: {
        fontSize: 12,
        fontFamily: 'pretendard-Regular',
        color: '#444',
    },
    participantImage: {
      width: 16,        // Set the desired width
      height: 16,      // Add some space to the left of the image
    },
    participantRow: {
      flexDirection: 'row',
      alignItems: 'center',  // This ensures the image and text are vertically centered
    },
    tennisImageContainer: {
      position: 'relative',
    },
    overlayIcon: {
      width: 20,  // 원하는 크기로 조절하세요
      height: 20, // 원하는 크기로 조절하세요
      position: 'absolute',
      top: 5,     // 원하는 위치로 조절하세요
      left: 5,    // 원하는 위치로 조절하세요
      backgroundColor: 'white',
      borderRadius: 10,  // 이미지의 반경. 위에서 지정한 width와 height의 절반 값이어야 원형으로 보입니다.
    },
    MDimage: {
      width: 393,
      height: 288,
    }, 
    boxInnerTitle: {
      fontSize: 24,  
      color: '#25282B',
      fontFamily: 'pretendard-Bold',
      padding: 10, 
      marginTop: 20,
      marginLeft: 10
    },
      boxInnerTime: {
        fontSize: 14,
        fontFamily: 'pretendard-Regular',
        color: 'gray',
        padding: 1, 
        marginLeft: 20
    },
    boxInnerText: {
      fontSize: 15,
      color: '#2F2F2F', 
      fontFamily: 'pretendard-Regular', 
      padding: 10, 
      marginLeft: 10,
      width: 327,
      height:96
    },
    customBox: {
      width: 393,
      height: 504,
      top: -30,
      borderRadius: 29,
      borderTopLeftRadius: 29,
      borderTopRightRadius: 29,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      backgroundColor: '#ffffff' 
    },
    meetingTime: {
      width: 22,
      height: 19,
      marginRight: 5,
      marginLeft: -30
    },
    meetingBox: {
      flexDirection: 'row',
      marginHorizontal: 70,
      alignItems: 'center',
      justifyContent: 'center'

    },
    customBoxMini: {
      width: 300,
      height: 100,
      borderRadius: 10,
      top: 20,
      alignSelf: 'center',
      borderWidth: 0.5,
      borderColor: '#DCDCDC',
      shadowColor: "#00000040",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 3, 
    },
    tennisBox: {
      flexDirection: 'row',
      marginHorizontal: 36,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15
    },
    tennisdetail:{
      fontFamily: 'Pretendard-Bold',
      color: '#2D68FF',
      fontSize: 12,
    },
    tennisdetailBox:{
      borderRadius: 10,
      backgroundColor: '#5782F133',
      width: 53,
      height: 28,
      alignItems: 'center',
      justifyContent: 'center'
    },
    Miniimage: {
      height: 41,
      width: 62
    },
    buttonStyle: {
      alignItems: 'center',
      width: 125,
      height: 31,
      backgroundColor: '#5782F1',
      justifyContent: 'center',
      borderRadius: 10, 
    },
    buttonText: {
      fontSize: 12,
      color: '#FFFFFF',
    },
    ImageButton: {
      flexDirection: 'row',
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 20
    },
    miniText: {
      fontSize: 12,
      color: '#000000',
      marginTop: 10,
      marginLeft: 10

    },
    registration:{
      width: 288,
      height: 126,
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: '#DCDCDC',
      backgroundColor: '#F1F1F1',
      justifyContent: 'center',
    },
    dashregistration:{
      width: 303,
      height: 143,
      alignItems: 'center',
      borderWidth: 1.5,
      borderColor: '#DCDCDC',
      backgroundColor: 'white',
      justifyContent: 'center',
      borderStyle: 'dashed',
      borderRadius: 1.5,
      marginTop: 30

    },
    introduce:{
      width: 338,
      height: 93,
      alignItems: 'center',
      backgroundColor: '#EEF3FF',
      justifyContent: 'center',
      marginTop: 15,
      borderRadius: 10
    },

        
});

export default styles;