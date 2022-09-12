import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View style={styles.inputBlock}>
      {icon}
      {inputType == "password" ? (
        <TextInput
          style={styles.input}
          keyboardType={keyboardType}
          textContentType="oneTimeCode"
          placeholder={label}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          style={styles.input}
          keyboardType={keyboardType}
          placeholder={label}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={styles.fieldBtn}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBlock: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    // android has padding, and not align
    paddingVertical: 0,
  },
  fieldBtn: {
    color: "#ad40af",
    fontWeight: "700",
  },
});
