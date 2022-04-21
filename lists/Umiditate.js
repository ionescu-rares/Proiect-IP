import React, {useState} from 'react';
import {Text,StyleSheet,View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
const Umiditate = props => {
const [umiditate,setUmiditate] = useState([
        {name:"327",key:1},
        {name:"326",key:2},
        {name:"318",key:3},
        {name:"337",key:4}
    
]);
return (
    <View style={styles.container}>
        <Ionicons name="water-outline" size={32} color="green" style={styles.heart}></Ionicons>
        {
            umiditate.map((item)=>{
                return(
                    <View key={item.key}>
                        <Text style={styles.item}>
{item.name}
                        </Text>
                    </View>
                
                )})
}
    </View>
);
}
const styles = StyleSheet.create({
    container:{
    flex:1,
backgroundColor:"white",
borderRadius:10,
width:50,
alignItems:'center'
    },
    item:{
        fontSize:22,
    },

})


export default Umiditate;