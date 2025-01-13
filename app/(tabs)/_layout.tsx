import { Tabs } from "expo-router";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#7B22D3",
        tabBarInactiveTintColor: "#B9B9B9",
        tabBarIconStyle: {
          marginTop: 10,
        },
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#FFFFFF",
          boxShadow: `0px -2px 4px rgba(0, 0, 0, 0.1)`,
          borderColor: "none",
          borderTopWidth: 0,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: 80,
        },
        tabBarLabel: () => null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="bag" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
