import React, { useEffect, useState } from "react";
import { Notification } from "@/components/Notification";
import { ItemCard } from "@/components/ItemCard";
import { data } from "@/utils/mockData";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function ShopScreen() {
  const navigation = useNavigation();
  const [items, setItems] = useState(data);
  const [notification, setNotification] = useState(false);

  const handlePurchase = (item: any) => {
    const newItems = items.map((i) => {
      if (i.id === item.id) {
        return {
          ...i,
          stock: i.stock - 1,
          purchased: true,
        };
      }

      return i;
    });

    setItems(newItems);
    setNotification(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [notification]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#FFF" />
          <Text
            style={{
              color: "#FFF",
              fontSize: 16,
              marginLeft: 5,
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.shopContainer}>
        <Text style={styles.header}>Shop</Text>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ItemCard item={item} handlePurchase={handlePurchase} />
          )}
          numColumns={2}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
        <View>
          {notification && (
            <Notification notificationMessage={items[0].title} />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7B22D3",
  },
  shopContainer: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 10,
    paddingTop: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 80,
  },
  headerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    height: 100,
  },
  backButton: {
    color: "#FFF",
    fontSize: 16,
    marginRight: 25,
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    paddingHorizontal: 12,
  },
  list: {},
});
