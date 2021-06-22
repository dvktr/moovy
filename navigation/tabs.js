import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import HomeScreen from "../src/pages/TabScreens/HomeScreen";
import CreateRevisionScreen from "../src/pages/TabScreens/CreateRevisionScreen";
import ConfigScreen from "../src/pages/TabScreens/ConfigScreen";
import ListRevisionScreen from "../src/pages/TabScreens/ListRevisionScreen";
import ChatScreen from "../src/pages/TabScreens/ChatScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...style.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#5A2FBD",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...style.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../src/assets/icons/icon_home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#5A2FBD" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#5A2FBD" : "#748c94", fontSize: 12 }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ListRevision"
        component={ListRevisionScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../src/assets/icons/icon_list.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#5A2FBD" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#5A2FBD" : "#748c94", fontSize: 12 }}
              >
                LIST
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CreateRevison"
        component={CreateRevisionScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../src/assets/icons/icon_create.png")}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                left: 3,
                tintColor: "#fff",
                ...style.shadow
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../src/assets/icons/icon_chat.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#5A2FBD" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#5A2FBD" : "#748c94", fontSize: 12 }}
              >
                CHAT
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Config"
        component={ConfigScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../src/assets/icons/icon_config.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#5A2FBD" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#5A2FBD" : "#748c94", fontSize: 12 }}
              >
                CONFIG
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
