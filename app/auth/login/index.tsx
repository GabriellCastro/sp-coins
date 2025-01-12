import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    // Implement login logic here
    navigation.navigate("(tabs)" as never);
  }

  function handleRegister() {
    navigation.navigate("auth/register/index" as never);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="wallet-outline" size={100} color="white" />
        <Text style={styles.appName}>Shopping Coins</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.loginTitle}>Login</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#9E9E9E" />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#9E9E9E"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#9E9E9E" />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            placeholderTextColor="#9E9E9E"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText} onPress={handleRegister}>
            Registrar-se
          </Text>
          <Text style={styles.footerText}>|</Text>
          <Text style={styles.footerText}>Resetar senha</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C44F1",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6C44F1",
  },
  appName: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },
  form: {
    flex: 2,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: "center",
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 50,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#6C44F1",
    borderRadius: 10,
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    marginTop: 20,
  },
  footerText: {
    color: "#6C44F1",
    marginHorizontal: 5,
    fontSize: 14,
  },
});
