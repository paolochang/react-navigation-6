import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

export default function CustomButton({ label, onPress }) {
  const { colors } = useTheme();
  return (
    <TouchableOpacity style={styles.CustomButton} onPress={onPress}>
      <Text style={[styles.text, { color: colors.text }]}>{label}</Text>
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
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});
