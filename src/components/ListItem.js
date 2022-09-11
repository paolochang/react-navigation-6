import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { windowWidth } from "../utils/Dimensions";

export default function ListItem(props) {
  const { title, subtitle, poster, isFree, price } = props;
  return (
    <View style={styles.container}>
      <View style={styles.infobox}>
        <Image source={poster} style={styles.image} />
        <View style={styles.contents}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          {isFree === "No" ? price : "Play"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  infobox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  contents: {
    width: windowWidth - 220,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 15,
    marginRight: 10,
  },
  title: {
    color: "#333",
    fontSize: 14,
    fontFamily: "Roboto-Medium",
  },
  subtitle: {
    color: "#333",
    fontSize: 14,
    fontFamily: "Roboto-Medium",
    textTransform: "uppercase",
  },
  button: {
    backgroundColor: "#0aada8",
    padding: 10,
    width: 100,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 14,
  },
});
