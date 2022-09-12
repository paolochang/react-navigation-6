import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CustomButton({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.CustomButton} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  CustomButton: {
    backgroundColor: "#ad40af",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});
