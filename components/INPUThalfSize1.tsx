import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const INPUThalfSize = () => {
  return (
    <View style={styles.inputhalfsize}>
      <Image
        style={[styles.dividerIcon, styles.dividerIconPosition]}
        resizeMode="cover"
        source={require("../assets/divider1.png")}
      />
      <Image
        style={[styles.iconarrowdown, styles.dividerIconPosition]}
        resizeMode="cover"
        source={require("../assets/iconarrowdown.png")}
      />
      <Text style={[styles.txt, styles.txtTypo]}>Country</Text>
      <Text style={[styles.txt1, styles.txtTypo]}>USA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dividerIconPosition: {
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  txtTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
    position: "absolute",
  },
  dividerIcon: {
    borderRadius: Border.br_12xs,
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    left: 0,
  },
  iconarrowdown: {
    width: 44,
    height: 44,
  },
  txt: {
    bottom: 30,
    fontSize: FontSize.size_2xs,
    letterSpacing: -0.1,
    opacity: 0.5,
    left: 0,
  },
  txt1: {
    top: "66.67%",
    left: "0%",
    fontSize: FontSize.size_mid,
    letterSpacing: -0.2,
    opacity: 0.8,
  },
  inputhalfsize: {
    height: "8.87%",
    width: "25.33%",
    top: "40.15%",
    right: "69.6%",
    bottom: "50.99%",
    left: "5.07%",
    position: "absolute",
  },
});

export default INPUThalfSize;
