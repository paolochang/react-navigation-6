import React from "react";
import { TouchableWithoutFeedback, Platform, Keyboard } from "react-native";

const DismissKeyboard = ({ children }) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={dismissKeyboard}
      disabled={Platform.OS === "web"}
    >
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
