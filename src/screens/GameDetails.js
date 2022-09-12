import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GameDetails({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>GameDetails</Text>
      <Text>{route.params?.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
