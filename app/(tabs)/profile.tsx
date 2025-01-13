import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1XoGyYxqZlHAKFWAakZlXiE1Q2ZD0TZi_3tA3rpY0aOBoVVJTOjdCseSmfVh3YTpeN8&usqp=CAU",
          }}
        />
        <Text style={styles.profileName}>Gabriel Castro</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="person-outline" size={24} color="#6C44F1" />
          <Text style={styles.optionText}>Detalhes do Perfil</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#9E9E9E" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="business-outline" size={24} color="#6C44F1" />
          <Text style={styles.optionText}>Detalhes da Conta</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#9E9E9E" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="receipt-outline" size={24} color="#6C44F1" />
          <Text style={styles.optionText}>Histórico</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#9E9E9E" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate("auth/login/index" as never)}
        >
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7B22D3",
  },
  header: {
    alignItems: "center",
    paddingVertical: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileImage: {
    marginTop: 30,
    width: 100,
    height: 100,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  profileName: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 10,
  },
  editButton: {
    backgroundColor: "#313131",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 50,
    marginTop: 10,
  },
  editButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  optionsContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: "#333333",
    marginLeft: 15,
  },
  logoutButton: {
    backgroundColor: "#7B22D3",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    marginTop: "auto",
  },
});
