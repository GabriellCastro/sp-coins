import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ItemCardProps {
  item: {
    image: string;
    title: string;
    stock: number;
    coin: string;
    price: string;
    purchased: boolean;
  };
  handlePurchase: (item: any) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, handlePurchase }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.stock}>{item.stock} unidades</Text>
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-end",
            paddingBottom: 10,
            paddingHorizontal: 10,
          }}
        >
          <Text style={styles.coin}>{item.coin}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <TouchableOpacity
          style={[styles.button, item.purchased && styles.purchasedButton]}
          onPress={() => handlePurchase(item)}
          disabled={item.purchased}
        >
          <Text style={styles.buttonText}>
            {item.purchased ? (
              <Ionicons name="checkmark" size={20} color="#FFF" />
            ) : (
              <Ionicons name="cart" size={20} color="#FFF" />
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    margin: 10,
    borderRadius: 12,
    flex: 1,
    alignItems: "flex-start",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  stock: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  coin: {
    fontSize: 14,
    color: "#6A0DAD",
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6A0DAD",
  },
  button: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#6A0DAD",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    marginRight: 10,
    marginBottom: 10,
  },
  purchasedButton: {
    backgroundColor: "#D3D3D3",
  },
  buttonText: {
    fontSize: 16,
    color: "#FFF",
  },
});
