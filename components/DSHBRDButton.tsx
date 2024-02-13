import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import DSHBRDButtonBank from "./DSHBRDButtonBank";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type DSHBRDButtonType = {
  vector?: ImageSourcePropType;
  cryptoWallet?: string;

  /** Style props */
  dSHBRDButtonPosition?: string;
  dSHBRDButtonTop?: number | string;
  dSHBRDButtonLeft?: number | string;
  dSHBRDButtonWidth?: number | string;
  dSHBRDButtonHeight?: number | string;
  vectorIconHeight?: number | string;
  vectorIconWidth?: number | string;
  vectorIconTop?: number | string;
  vectorIconRight?: number | string;
  vectorIconBottom?: number | string;
  vectorIconLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DSHBRDButton = ({
  vector,
  cryptoWallet,
  dSHBRDButtonPosition,
  dSHBRDButtonTop,
  dSHBRDButtonLeft,
  dSHBRDButtonWidth,
  dSHBRDButtonHeight,
  vectorIconHeight,
  vectorIconWidth,
  vectorIconTop,
  vectorIconRight,
  vectorIconBottom,
  vectorIconLeft,
}: DSHBRDButtonType) => {
  const dSHBRDButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("position", dSHBRDButtonPosition),
      ...getStyleValue("top", dSHBRDButtonTop),
      ...getStyleValue("left", dSHBRDButtonLeft),
      ...getStyleValue("width", dSHBRDButtonWidth),
      ...getStyleValue("height", dSHBRDButtonHeight),
    };
  }, [
    dSHBRDButtonPosition,
    dSHBRDButtonTop,
    dSHBRDButtonLeft,
    dSHBRDButtonWidth,
    dSHBRDButtonHeight,
  ]);

  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", vectorIconHeight),
      ...getStyleValue("width", vectorIconWidth),
      ...getStyleValue("top", vectorIconTop),
      ...getStyleValue("right", vectorIconRight),
      ...getStyleValue("bottom", vectorIconBottom),
      ...getStyleValue("left", vectorIconLeft),
    };
  }, [
    vectorIconHeight,
    vectorIconWidth,
    vectorIconTop,
    vectorIconRight,
    vectorIconBottom,
    vectorIconLeft,
  ]);

  return (
    <View style={[styles.dshbrdbutton, dSHBRDButtonStyle]}>
      <View style={[styles.dshbrdbuttonChild, styles.cryptoWalletPosition]} />
      <DSHBRDButtonBank
        vector={require("../assets/vector3.png")}
        dSHBRDButtonBankPosition="absolute"
        dSHBRDButtonBankWidth="42.63%"
        dSHBRDButtonBankHeight="42.63%"
        dSHBRDButtonBankTop="19.71%"
        dSHBRDButtonBankRight="28.91%"
        dSHBRDButtonBankBottom="37.66%"
        dSHBRDButtonBankLeft="28.47%"
      />
      <Text style={[styles.cryptoWallet, styles.cryptoWalletPosition]}>
        {cryptoWallet}
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
    width: 137,
    height: 137,
  },
});

export default DSHBRDButton;
