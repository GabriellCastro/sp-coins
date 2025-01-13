import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

interface NotificationProps {
  notificationMessage: string;
}

export function Notification({ notificationMessage }: NotificationProps) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={styles.notification}>
      <Text style={styles.notificationText}>
        O <Text style={{ fontWeight: "bold" }}>{notificationMessage}</Text> está
        a caminho! 🎉
      </Text>
      <Text style={styles.subNotification}>
        Parabéns, sua compra foi confirmada!
      </Text>
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["100%", "0%"],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notification: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 0,
    backgroundColor: "#FFFF",
    padding: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    width: "95%",
    zIndex: 999,
  },
  notificationText: {
    fontSize: 14,
    color: "#2F2D2C",
    textAlign: "center",
  },
  subNotification: {
    fontSize: 12,
    color: "#9B9B9B",
    textAlign: "center",
    marginTop: 5,
  },
  progressBarContainer: {
    marginTop: 10,
    height: 5,
    backgroundColor: "#DDD",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#6A0DAD",
  },
});
