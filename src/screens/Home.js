import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import Feather from "react-native-vector-icons/Feather";
import { windowWidth } from "../utils/Dimensions";
import BannerSlider from "../components/BannerSlider";
import { freeGames, paidGames, sliderData } from "../model/data";
import CustomSwitch from "../components/CustomSwitch";
import ListItem from "../components/ListItem";

export default function Home({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello John Doe</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../../assets/images/user-profile.jpeg")}
              style={styles.profile}
              imageStyle={styles.profileImg}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchWrapper}>
          <Feather
            name="search"
            size={20}
            color="#c6c6c6"
            style={styles.searchIcon}
          />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.headerText}>Upcoming Games</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.seeAllButton}>See all</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />
        <View>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        {gamesTab == 1 &&
          freeGames.map((game) => <ListItem key={game.id} {...game} />)}
        {gamesTab == 2 &&
          paidGames.map((game) => <ListItem key={game.id} {...game} />)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: { padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  headerText: {
    fontSize: 18,
    fontFamily: "Roboto-Medium",
  },
  profile: {
    width: 35,
    height: 35,
  },
  profileImg: {
    borderRadius: 25,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#c6c6c6",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchIcon: { marginRight: 5 },
  searchInput: {
    // width: "90%",ffhgjhg
    // backgroundColor: "red",
  },
  seeAllButton: {
    color: "#0aada8",
  },
});
