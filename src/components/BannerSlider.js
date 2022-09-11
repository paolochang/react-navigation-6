import { Image, StyleSheet, View } from "react-native";
import React from "react";

export default function BannerSlider({ data }) {
  return (
    <View>
      <Image source={data.image} style={styles.bannerImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerImage: {
    width: 300,
    height: 150,
    borderRadius: 10,
  },
});
