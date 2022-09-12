import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import GoogleSVG from "../../assets/images/misc/google.svg";
import FacebookSVG from "../../assets/images/misc/facebook.svg";
import TwitterSVG from "../../assets/images/misc/twitter.svg";

export default function LoginOption({ register }) {
  return (
    <View style={styles.container}>
      {!register && <Text style={styles.label}>Or, login with ...</Text>}
      <View style={styles.block}>
        <TouchableOpacity style={styles.icons}>
          <GoogleSVG width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <FacebookSVG width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <TwitterSVG width={24} height={24} />
        </TouchableOpacity>
      </View>
      {register && <Text style={styles.label}>Or, register with email</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  icons: {
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
