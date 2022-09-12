import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Home from "../screens/Home";
import GameDetails from "../screens/GameDetails";
import Cart from "../screens/Cart";
import Favorite from "../screens/Favorite";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetails}
        options={({ route }) => ({ title: route.params?.title })}
      />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#ad40af" },
        tabBarInactiveTintColor: "#ffffff",
        tabBarActiveTintColor: "#42af40",
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: "#ad40af",
          },
        })}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: "#42af40" },
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  if (routeName == "GameDetails") return "none";
  return "flex";
};

export default TabNavigator;
