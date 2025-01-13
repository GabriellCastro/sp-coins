import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const ItemPromotion = ({ item }: any) => (
  <View style={styles.promotionCard}>
    <Image
      source={require("../assets/images/promotion.png")}
      style={styles.promotionImage}
    />
    <View>
      <Text style={styles.promotionTitle}>Pacote ACAPULCO</Text>
      <Text style={styles.promotionSubtitle}>Guerrero - México</Text>
      <View
        style={{ flexDirection: "row", alignItems: "baseline", marginTop: 5 }}
      >
        <Text style={styles.promotionCoin}>{item.coin}</Text>
        <Text style={styles.promotionPrice}>{item.price}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  promotionCard: {
    flexDirection: "row",
    backgroundColor: "#6A0DAD",
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    elevation: 5,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    height: 110,
    marginRight: 12,
    width: 320,
    marginBottom: 20,
  },
  promotionImage: {
    width: 120,
    height: 100,
    marginRight: 10,
    marginLeft: 10,
  },
  promotionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  promotionSubtitle: {
    fontSize: 14,
    color: "#FFF",
  },
  promotionCoin: {
    fontSize: 14,
    color: "#FFF",
  },
  promotionPrice: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
  },
});
