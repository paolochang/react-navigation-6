import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import GoogleSVG from "../../assets/images/misc/google.svg";
import FacebookSVG from "../../assets/images/misc/facebook.svg";
import TwitterSVG from "../../assets/images/misc/twitter.svg";
import { useTheme } from "@react-navigation/native";

export default function LoginOption({ register }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      {!register && (
        <Text style={[styles.label, { color: colors.text }]}>
          Or, login with ...
        </Text>
      )}
      <View style={styles.block}>
        <TouchableOpacity
          style={[styles.icons, { borderColor: colors.border }]}
        >
          <GoogleSVG width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.icons, { borderColor: colors.border }]}
        >
          <FacebookSVG width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.icons, { borderColor: colors.border }]}
        >
          <TwitterSVG width={24} height={24} />
        </TouchableOpacity>
      </View>
      {register && (
        <Text style={[styles.label, { color: colors.text }]}>
          Or, register with email
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    textAlign: "center",
    marginBottom: 30,
  },
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  icons: {
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
