import { StyleSheet,ImageBackground,Button,View} from 'react-native';
import Clock from '../components/Clock';
import 'react-native-gesture-handler';
import {useNavigation } from '@react-navigation/native';
import Puls from '../lists/Puls';
import { ScrollView } from 'react-native-gesture-handler';
import Temperatura from '../lists/Temperatura';
import Umiditate from '../lists/Umiditate';
import ECG from '../lists/ECG';
import Ora from '../lists/Ora';

const ClockScreen = props => {
  const navigation = useNavigation()
  return (
    <ImageBackground 
   source={require('../assets/image.jpg')}
    resizeMode="stretch" 
    style={styles.image}>
<Clock/>

<View style={styles.pulsPlasare}>
  <Puls/>
</View>

<View style={styles.temperaturaPlasare}>
<Temperatura/>
</View>


<View style={styles.umiditatePlasare}>
<Umiditate/>
</View>

<View style={styles.ECGPlasare}>
<ECG/>
</View>

<View style={styles.oraPlasare}>
<Ora/>
</View>


<View style={styles.buttonPozitie}>
<Button style={styles.button}
      title="Detalii"
      onPress={() =>
        navigation.navigate('Details')
      }/>
      </View>
</ImageBackground>

  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
 
  },
  buttonPozitie:{
    position:'absolute',
   bottom:10,
   left:'40%',
 width:'30%',
  },
  button: {
    alignItems:'center',
    
  },
  pulsPlasare:{
    position:"absolute",
    bottom:"50%",
    left:"35%",
  },
  temperaturaPlasare:{
    position:"absolute",
    bottom:"50%",
    left:"50%",
  },
  umiditatePlasare:{
    position:"absolute",
    bottom:"50%",
    left:"65%",
  },
  ECGPlasare:{
    position:"absolute",
    bottom:"50%",
    left:"80%",
  },
  oraPlasare:{
    position:"absolute",
    bottom:"50%",
    left:"5%",
    width:35
  }

});

export default ClockScreen;