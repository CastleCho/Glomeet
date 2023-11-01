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
        fontSize: 18,
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
    marginTop: 15,
    width:350,
    marginLeft: 20
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
      left: 200,
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

    
});

export default styles;