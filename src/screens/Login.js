import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import DismissKeyboard from "../components/DismissKeyboard";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import LoginOption from "../components/LoginOption";

import Ionicons from "react-native-vector-icons/Ionicons";
import LoginSVG from "../../assets/images/misc/login.svg";

export default function Login({ navigation }) {
  const { colors } = useTheme();

  const keyboardVerticalOffset = Platform.OS === "ios" ? 10 : 0;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <View style={styles.form}>
          <View style={styles.imageBlock}>
            <LoginSVG style={styles.image} height={300} width={300} />
          </View>
          <Text style={[styles.title, { color: colors.text }]}>Login</Text>

          <InputField
            label="Email"
            icon={<Ionicons name="at" size={20} color={colors.text} />}
            keyboardType="email-address"
          />
          <InputField
            label="Password"
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color={colors.text}
              />
            }
            inputType="password"
            fieldButtonLabel="Forgot?"
            fieldButtonFunction={() => {}}
          />

          <CustomButton label="Log in" onPress={() => {}} />

          <LoginOption register={false} />

          <View style={styles.registerBlock}>
            <Text style={{ color: colors.text }}>New to the app?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  imageBlock: {
    alignItems: "center",
  },
  image: {
    transform: [{ rotate: "-5deg" }],
  },
  form: {
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 28,
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    marginBottom: 30,
  },
  registerBlock: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  registerText: {
    color: "#ad40af",
    fontWeight: "700",
    marginLeft: 10,
  },
});
