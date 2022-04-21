import React, {useState} from 'react';
import {Text,StyleSheet,View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
const ECG = props => {
const [ecg,setEcg] = useState([
        {name:"120",key:1},
        {name:"130",key:2},
        {name:"140",key:3},
        {name:"125",key:4}
    
]);
return (
    <View style={styles.container}>
        <Ionicons name="flash-outline" size={32} color="green" style={styles.heart}></Ionicons>
        {
            ecg.map((item)=>{
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
width:50,
borderRadius:10,
alignItems:'center'
    },
    item:{
        fontSize:22
    },

})


export default ECG;