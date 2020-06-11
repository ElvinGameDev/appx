import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { brandColor } from "AppRoot/src/const/variables";
import Home from "AppRoot/src/pages/Home/Home";
import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const logoImg = (
  <View>
    <Image
      style={{ width: 35, height: 35, marginBottom: 10 }}
      source={require("AppRoot/assets/icon.png")}
    />
  </View>
);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultOptions = {
  headerTitle: () => logoImg,
  headerTintColor: brandColor,
};

const tabOptions = {
  style: {
    paddingTop: 10,
  },
  activeTintColor: brandColor,
  inactiveTintColor: "#a1a1a1",
};

const HomeSatck = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={defaultOptions} />
  </Stack.Navigator>
);

const Tab2Stack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tab2" options={defaultOptions}>
      {() => {
        return <Text>Tab2</Text>;
      }}
    </Stack.Screen>
  </Stack.Navigator>
);

const Route = () => (
  <NavigationContainer>
    <Tab.Navigator tabBarOptions={tabOptions}>
      <Tab.Screen
        name="Home"
        component={HomeSatck}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" style={{ color, fontSize: size }} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2Stack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" style={{ color, fontSize: size }} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Route;
