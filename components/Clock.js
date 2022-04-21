import React, {useEffect,useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
const Clock = props => {
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);


  return (
    <View style={styles.pozitie}>
    <View style={styles.background}>
  
      
        <Text style={styles.text}>
      {date.toLocaleTimeString()}
      </Text>
    </View>
    </View>
  );
}

export default Clock;

const styles = StyleSheet.create(
    {
    pozitie:{
        flex:1,
        position:'absolute',
        alignItems:'center',
      bottom:"85%",
        width:'80%',
        justifyContent:'center',
        
    },
    text: {
     fontSize:30,
     color:'white',
     fontWeight:'bold'
    },
    background:{
        marginTop: 150,
        width:180,
        height:75,
        marginLeft:100,
        backgroundColor:'red',
        justifyContent:'center',
        borderRadius:20,
        alignItems:'center'
        
    }
}
)