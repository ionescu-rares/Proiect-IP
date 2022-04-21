import * as React from "react";
import { Button, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import ClockScreen from "../screens/ClockScreen";
import DetailScreen from "../screens/DetailScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login Screen",
            headerTintColor: 'white',
            headerStyle: { backgroundColor: "#007399"
          ,color:"white" },
          }}
        />
        <Stack.Screen
          name="Clock"
          component={ClockScreen}
          options={{ title: "Date despre pacient" ,
          
          headerStyle: { backgroundColor: "#ccffff" },}}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
