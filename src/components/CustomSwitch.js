import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) {
  const [isSelected, setIsSelected] = useState(selectionMode);

  const updateSwitch = (value) => {
    setIsSelected(value);
    onSelectSwitch(value);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitch(1)}
        style={[
          styles.switch,
          isSelected == 1 ? styles.selected : styles.unselected,
        ]}
      >
        <Text
          style={[
            styles.text,
            isSelected == 1 ? styles.selectedText : styles.unselectedText,
          ]}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitch(2)}
        style={[
          styles.switch,
          isSelected == 2 ? styles.selected : styles.unselected,
        ]}
      >
        <Text
          style={[
            styles.text,
            isSelected == 2 ? styles.selectedText : styles.unselectedText,
          ]}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: 44,
    backgroundColor: "#e4e4e4",
    borderRadius: 10,
    borderColor: "#ad40af",
    marginVertical: 20,
  },
  switch: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    backgroundColor: "#ad40af",
  },
  unselected: {
    backgroundColor: "#e4e4e4",
  },
  selectedText: {
    color: "#e4e4e4",
  },
  unselectedText: {
    color: "#ad40af",
  },
  text: {
    fontSize: 14,
    fontFamily: "Roboto-Medium",
  },
});
