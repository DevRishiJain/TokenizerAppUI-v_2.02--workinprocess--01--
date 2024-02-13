import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import DSHBRDButtonCard from "./DSHBRDButtonCard";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const DSHBRDButton = () => {
  return (
    <View style={styles.dshbrdbutton}>
      <View style={[styles.dshbrdbuttonChild, styles.cryptoWalletPosition]} />
      <DSHBRDButtonCard
        frame={require("../assets/frame.png")}
        dSHBRDButtonCardPosition="absolute"
        dSHBRDButtonCardWidth="42.63%"
        dSHBRDButtonCardHeight="42.63%"
        dSHBRDButtonCardTop="19.71%"
        dSHBRDButtonCardRight="28.91%"
        dSHBRDButtonCardBottom="37.66%"
        dSHBRDButtonCardLeft="28.47%"
        groupViewHeight="91.27%"
        groupViewWidth="94.35%"
        groupViewTop="4.28%"
        groupViewRight="0.51%"
        groupViewBottom="4.45%"
        groupViewLeft="5.14%"
        rectangleViewWidth="96.73%"
        rectangleViewRight="-0.18%"
        rectangleViewLeft="3.45%"
        frameIconWidth="98.73%"
        frameIconRight="1.27%"
      />
      <Text style={[styles.cryptoWallet, styles.cryptoWalletPosition]}>
        Credit Cards
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cryptoWalletPosition: {
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  dshbrdbuttonChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_15xl,
    backgroundColor: Color.colorMidnightblue_100,
  },
  cryptoWallet: {
    height: "15.33%",
    top: "65.69%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dshbrdbutton: {
    top: 194,
    left: 198,
    width: 137,
    height: 137,
    position: "absolute",
  },
});

export default DSHBRDButton;
