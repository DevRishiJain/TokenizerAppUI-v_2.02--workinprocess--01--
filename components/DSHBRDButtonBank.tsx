import React, { useMemo } from "react";
import { StyleSheet, View, Image, ImageSourcePropType } from "react-native";

export type DSHBRDButtonBankType = {
  vector?: ImageSourcePropType;

  /** Style props */
  dSHBRDButtonBankPosition?: string;
  dSHBRDButtonBankWidth?: number | string;
  dSHBRDButtonBankHeight?: number | string;
  dSHBRDButtonBankTop?: number | string;
  dSHBRDButtonBankRight?: number | string;
  dSHBRDButtonBankBottom?: number | string;
  dSHBRDButtonBankLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DSHBRDButtonBank = ({
  vector,
  dSHBRDButtonBankPosition,
  dSHBRDButtonBankWidth,
  dSHBRDButtonBankHeight,
  dSHBRDButtonBankTop,
  dSHBRDButtonBankRight,
  dSHBRDButtonBankBottom,
  dSHBRDButtonBankLeft,
}: DSHBRDButtonBankType) => {
  const dSHBRDButtonBankStyle = useMemo(() => {
    return {
      ...getStyleValue("position", dSHBRDButtonBankPosition),
      ...getStyleValue("width", dSHBRDButtonBankWidth),
      ...getStyleValue("height", dSHBRDButtonBankHeight),
      ...getStyleValue("top", dSHBRDButtonBankTop),
      ...getStyleValue("right", dSHBRDButtonBankRight),
      ...getStyleValue("bottom", dSHBRDButtonBankBottom),
      ...getStyleValue("left", dSHBRDButtonBankLeft),
    };
  }, [
    dSHBRDButtonBankPosition,
    dSHBRDButtonBankWidth,
    dSHBRDButtonBankHeight,
    dSHBRDButtonBankTop,
    dSHBRDButtonBankRight,
    dSHBRDButtonBankBottom,
    dSHBRDButtonBankLeft,
  ]);

  return (
    <View style={[styles.dshbrdButtonbank, dSHBRDButtonBankStyle]}>
      <View style={styles.dshbrdButtonbankChild} />
      <Image style={styles.vectorIcon} resizeMode="cover" source={vector} />
    </View>
  );
};

const styles = StyleSheet.create({
  dshbrdButtonbankChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  vectorIcon: {
    height: "78.25%",
    width: "78.25%",
    top: "8.73%",
    right: "9.76%",
    bottom: "13.01%",
    left: "11.99%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  dshbrdButtonbank: {
    width: 58,
    height: 58,
  },
});

export default DSHBRDButtonBank;
