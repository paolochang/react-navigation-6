import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  const { colors } = useTheme();

  return (
    <View style={[styles.inputBlock, { borderBottomColor: colors.border }]}>
      {icon}
      {inputType == "password" ? (
        <TextInput
          style={[styles.input, { color: colors.text }]}
          keyboardType={keyboardType}
          textContentType="oneTimeCode"
          placeholder={label}
          placeholderTextColor={colors.text}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          style={styles.input}
          keyboardType={keyboardType}
          placeholder={label}
          placeholderTextColor={colors.text}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={[styles.fieldBtn, { color: colors.text }]}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBlock: {
    flexDirection: "row",
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
    // color: "#ad40af",
    fontWeight: "700",
  },
});
