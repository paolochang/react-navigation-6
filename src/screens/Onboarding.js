import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import GamingImg from "../../assets/gaming.svg";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Onboarding({ navigation }) {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View>
        <Text style={[styles.title, { color: colors.text }]}>
          React Navigation 6
        </Text>
      </View>
      <GamingImg style={styles.image} width={300} height={300} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.buttonText, { color: colors.text }]}>
          Let's Begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "Inter-Bold",
    marginTop: 100,
  },
  image: {
    transform: [{ rotate: "-15deg" }],
  },
  button: {
    backgroundColor: "#ad40af",
    padding: 20,
    width: "90%",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 70,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Roboto-MediumItalic",
  },
});
