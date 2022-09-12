import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function CustomDrawer(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContainer}
      >
        <ImageBackground
          style={styles.headerBackground}
          source={require("../../assets/images/menu-bg.jpeg")}
        >
          <Image
            style={styles.headerProfile}
            source={require("../../assets/images/user-profile.jpeg")}
          />
          <Text style={styles.headerUsername}>John Doe</Text>
          <View style={styles.coinsWrapper}>
            <FontAwesome5 name="coins" size={14} color="#fff" />
            <Text style={styles.headerCoins}>280 Coins</Text>
          </View>
        </ImageBackground>
        <View style={styles.itemlList}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footerDrawer}>
        <TouchableOpacity onPress={() => {}} style={styles.footerItem}>
          <View style={styles.footerItemWrapper}>
            <Ionicons name="share-social-outline" size={22} />
            <Text style={styles.footerItemText}>Share this App</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.footerItem}>
          <View style={styles.footerItemWrapper}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={styles.footerItemText}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContainer: {
    backgroundColor: "#8200d6",
  },
  headerBackground: {
    padding: 20,
  },
  headerProfile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  headerUsername: {
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "Roboto-Medium",
  },
  coinsWrapper: {
    flexDirection: "row",
    marginTop: 10,
  },
  headerCoins: {
    color: "#ffffff",
    fontFamily: "Roboto-Medium",
    marginLeft: 10,
  },
  itemlList: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 10,
  },
  footerDrawer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  footerItem: {
    paddingVertical: 15,
  },
  footerItemWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerItemText: {
    color: "#333",
    fontSize: 15,
    fontFamily: "Roboto-Medium",
    marginLeft: 10,
  },
});
