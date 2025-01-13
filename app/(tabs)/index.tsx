import { ItemCard } from "@/components/ItemCard";
import React, { useEffect, useState } from "react";
import { data } from "@/utils/mockData";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import { Notification } from "@/components/Notification";
import { ItemPromotion } from "@/components/ItemPromotion";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
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
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 30,
          }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1XoGyYxqZlHAKFWAakZlXiE1Q2ZD0TZi_3tA3rpY0aOBoVVJTOjdCseSmfVh3YTpeN8&usqp=CAU",
            }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.shoppingCoinsButton}>
            <Text style={styles.shoppingCoinsText}>Shopping Coins</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 10,
          }}
        >
          <Text style={styles.welcomeText}>
            Olá, <Text style={styles.username}>Gabriel</Text>
          </Text>
          <TouchableOpacity>
            <Ionicons
              name="notifications"
              size={30}
              style={styles.notificationIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.balanceSection}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="wallet-outline" size={30} color="#6A0DAD" />
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              marginLeft: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "regular",
                color: "#313131",
                marginRight: 3,
              }}
            >
              Lc
            </Text>
            <Text style={styles.balanceText}>5.000.000</Text>
          </View>
        </View>
        <View
          style={{
            width: 1,
            height: 30,
            backgroundColor: "#313131",
          }}
        />
        <TouchableOpacity
          style={styles.shopButton}
          onPress={() => navigation.navigate("shop" as never)}
        >
          <Ionicons name="bag-outline" size={26} color="#6A0DAD" />
          <Text style={styles.shopText}>Shop</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.productList}>
        <View
          style={{
            marginTop: 70,
            paddingLeft: 20,
          }}
        >
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={ItemPromotion}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.productContainer}>
          <FlatList
            data={data.slice(0, 2)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ItemCard item={item} handlePurchase={handlePurchase} />
            )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
          <View>
            {notification && (
              <Notification notificationMessage={items[0].title} />
            )}
          </View>
        </View>

        <TouchableOpacity
          style={styles.viewAllButton}
          onPress={() => navigation.navigate("shop" as never)}
        >
          <Text style={styles.viewAllText}>Ver todos os produtos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6A0DAD",
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#6A0DAD",
    padding: 15,
    height: 140,
    paddingHorizontal: 24,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: "#FFF",
    flex: 1,
  },
  username: {
    fontWeight: "bold",
  },
  notificationIcon: {
    fontSize: 20,
    color: "#FFF",
  },
  shoppingCoinsButton: {
    backgroundColor: "#333",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  shoppingCoinsText: {
    color: "#FFF",
    fontSize: 16,
  },
  balanceSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 20,
    marginVertical: 10,
    borderRadius: 12,
    marginHorizontal: 25,
    elevation: 5,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    marginBottom: -40,
    zIndex: 1,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#313131",
  },
  shopButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  shopText: {
    color: "#313131",
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 5,
  },
  productList: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  productContainer: {
    paddingHorizontal: 10,
  },
  viewAllButton: {
    backgroundColor: "#6A0DAD",
    borderRadius: 50,
    alignItems: "center",
    position: "absolute",
    bottom: 110,
    left: 20,
    right: 20,
    padding: 15,
  },
  viewAllText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
