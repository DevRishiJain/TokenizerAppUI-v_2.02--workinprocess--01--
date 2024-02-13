import React, { useMemo } from "react";
import { StyleSheet, View, Image, ImageSourcePropType } from "react-native";

export type DSHBRDButtonCryptoType = {
  vector?: ImageSourcePropType;

  /** Style props */
  dSHBRDButtonCryptoPosition?: string;
  dSHBRDButtonCryptoWidth?: number | string;
  dSHBRDButtonCryptoHeight?: number | string;
  dSHBRDButtonCryptoTop?: number | string;
  dSHBRDButtonCryptoRight?: number | string;
  dSHBRDButtonCryptoBottom?: number | string;
  dSHBRDButtonCryptoLeft?: number | string;
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
const DSHBRDButtonCrypto = ({
  vector,
  dSHBRDButtonCryptoPosition,
  dSHBRDButtonCryptoWidth,
  dSHBRDButtonCryptoHeight,
  dSHBRDButtonCryptoTop,
  dSHBRDButtonCryptoRight,
  dSHBRDButtonCryptoBottom,
  dSHBRDButtonCryptoLeft,
  vectorIconHeight,
  vectorIconWidth,
  vectorIconTop,
  vectorIconRight,
  vectorIconBottom,
  vectorIconLeft,
}: DSHBRDButtonCryptoType) => {
  const dSHBRDButtonCryptoStyle = useMemo(() => {
    return {
      ...getStyleValue("position", dSHBRDButtonCryptoPosition),
      ...getStyleValue("width", dSHBRDButtonCryptoWidth),
      ...getStyleValue("height", dSHBRDButtonCryptoHeight),
      ...getStyleValue("top", dSHBRDButtonCryptoTop),
      ...getStyleValue("right", dSHBRDButtonCryptoRight),
      ...getStyleValue("bottom", dSHBRDButtonCryptoBottom),
      ...getStyleValue("left", dSHBRDButtonCryptoLeft),
    };
  }, [
    dSHBRDButtonCryptoPosition,
    dSHBRDButtonCryptoWidth,
    dSHBRDButtonCryptoHeight,
    dSHBRDButtonCryptoTop,
    dSHBRDButtonCryptoRight,
    dSHBRDButtonCryptoBottom,
    dSHBRDButtonCryptoLeft,
  ]);

  const vectorIcon1Style = useMemo(() => {
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
    <View style={[styles.dshbrdButtoncrypto, dSHBRDButtonCryptoStyle]}>
      <View style={styles.dshbrdButtoncryptoChild} />
      <Image
        style={[styles.vectorIcon, vectorIcon1Style]}
        resizeMode="cover"
        source={vector}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dshbrdButtoncryptoChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  vectorIcon: {
    height: "82.33%",
    width: "73.76%",
    top: "5.15%",
    right: "5.66%",
    bottom: "12.52%",
    left: "20.58%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  dshbrdButtoncrypto: {
    width: 58,
    height: 58,
  },
});

export default DSHBRDButtonCrypto;
