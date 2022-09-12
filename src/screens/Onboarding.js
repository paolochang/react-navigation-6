import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GamingImg from "../../assets/gaming.svg";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Onboarding({ navigation }) {
  return (
    <SafeAreaView style={styles.container} /*onLayout={onLayoutRootView}*/>
      <View>
        <Text style={styles.title}>React Navigation 6</Text>
      </View>
      <GamingImg style={styles.image} width={300} height={300} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Let's Begin</Text>
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
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#20315f",
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
    color: "#fff",
    fontFamily: "Roboto-MediumItalic",
  },
});
