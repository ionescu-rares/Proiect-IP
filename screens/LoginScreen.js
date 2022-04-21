import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
} from "react-native";
import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { State } from "react-native-gesture-handler";
const LoginScreen = (props) => {
  const navigation = useNavigation();
  const [text, setText] = useState("");

  return (
    <ImageBackground
      source={require("../assets/login.png")}
      resizeMode="cover"
      smartm
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.info}>Introduceti CNP</Text>
        <TextInput
          placeholder="CNP"
          keyboardType={"numeric"}
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
          style={styles.input}
        ></TextInput>
        <View style={styles.buttonPozitie}>
          <Button
            title="Acceseaza datele"
            disabled={text.length === 13 ? false : true}
            color="green"
            style={styles.button}
            onPress={() => navigation.navigate("Clock")}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    justifyContent: "center",
    margin: 12,
    borderWidth: 1,
    width: 350,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    textAlign:'center',
    color: "#000",
    borderRadius:10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  info: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  buttonPozitie: {
    borderRadius: 15,
    width: 200,
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
