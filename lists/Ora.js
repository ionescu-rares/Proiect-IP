import React, {useState} from 'react';
import {Text,StyleSheet,View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
const Ora = props => {
const [ora,setOra] = useState([
        {name:"12:10",key:1},
        {name:"13:25",key:2},
        {name:"14:02",key:3},
        {name:"21:40",key:4}
    
]);
return (
    <View style={styles.container}>
        <Ionicons name="time-outline" size={32} color="green" style={styles.heart}></Ionicons>
        {
            ora.map((item)=>{
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
width:100,
borderRadius:10,
alignItems:'center'
    },
    item:{
        fontSize:22
    },

})


export default Ora;