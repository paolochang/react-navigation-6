// import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import LoginOption from "../components/LoginOption";
// import DatePicker from 'react-native-date-picker'

import Ionicons from "react-native-vector-icons/Ionicons";
import RegistrationSVG from "../../assets/images/misc/registration.svg";

export default function Register({ navigation }) {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 30 : 0;

  // const [date, setDate] = useState(new Date());
  // const [open, setOpen] = useState(false);
  // const [dobLabel, setDobLabel] = useState("Date of Birth");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <ScrollView showsVerticalScrollIndicator={false} style={styles.form}>
          <View style={styles.imageBlock}>
            <RegistrationSVG style={styles.image} height={300} width={300} />
          </View>
          <Text style={styles.title}>Register</Text>

          <LoginOption register={true} />

          <InputField
            label="Full Name"
            icon={<Ionicons name="person-outline" size={20} color="#666" />}
          />
          <InputField
            label="Email"
            icon={<Ionicons name="at" size={20} color="#666" />}
            keyboardType="email-address"
          />
          <InputField
            label="Password"
            icon={
              <Ionicons name="ios-lock-closed-outline" size={20} color="#666" />
            }
            inputType="password"
          />
          <InputField
            label="Confirm Password"
            icon={
              <Ionicons name="ios-lock-closed-outline" size={20} color="#666" />
            }
            inputType="password"
          />

          {/*
            <View style={styles.datepickerBlock}>
              <Ionicons
                name="calendar-outline"
                style={styles.icon}
                size={20}
                color="#666"
              />
              <TouchableOpacity onPress={() => setOpen(true)}>
                <Text style={styles.placeholderText}>
                  {dobLabel}
                </Text>
              </TouchableOpacity>
            </View>

            <DatePicker
              modal
              open={open}
              date={date}
              mode={'date'}
              maximumDate={new Date('2005-01-01')}
              minimumDate={new Date('1980-01-01')}
              onConfirm={(date) => {
                setOpen(false);
                setDate(date);
                setDobLabel(date.toDateString());
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          */}

          <CustomButton label="Register" onPress={() => {}} />

          <View style={styles.loginBlock}>
            <Text>Already registered?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    color: "#333",
    marginBottom: 30,
  },
  datepickerBlock: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 30,
  },
  icon: { marginRight: 10 },
  placeholderText: {
    backgroundColor: "#555",
    color: "#bbb",
  },
  loginBlock: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  loginText: {
    color: "#ad40af",
    fontWeight: "700",
    marginLeft: 10,
  },
});
