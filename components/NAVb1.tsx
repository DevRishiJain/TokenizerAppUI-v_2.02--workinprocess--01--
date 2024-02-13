import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type NAVb1Type = {
  ellipse38?: ImageSourcePropType;

  /** Style props */
  nAVb02Height?: number | string;
  nAVb02MarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NAVb1 = ({ ellipse38, nAVb02Height, nAVb02MarginLeft }: NAVb1Type) => {
  const nAVb02Style = useMemo(() => {
    return {
      ...getStyleValue("height", nAVb02Height),
      ...getStyleValue("marginLeft", nAVb02MarginLeft),
    };
  }, [nAVb02Height, nAVb02MarginLeft]);

  return (
    <View style={[styles.navb02, nAVb02Style]}>
      <Text style={styles.transaction}>Transaction</Text>
      <View style={styles.navb02Child} />
      <Image
        style={[styles.navb02Item, styles.navb02Layout]}
        resizeMode="cover"
        source={require("../assets/vector-9.png")}
      />
      <Image
        style={[styles.navb02Inner, styles.navb02Layout]}
        resizeMode="cover"
        source={require("../assets/vector-10.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.navb02Layout]}
        resizeMode="cover"
        source={ellipse38}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navb02Layout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  transaction: {
    top: "77.27%",
    left: "0%",
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorCornflowerblue,
    textAlign: "center",
    position: "absolute",
  },
  navb02Child: {
    height: "90.91%",
    width: "82.19%",
    top: "0%",
    right: "9.59%",
    bottom: "9.09%",
    left: "8.22%",
    display: "none",
    position: "absolute",
  },
  navb02Item: {
    top: "31.82%",
    right: "38.22%",
    bottom: "60.61%",
    left: "36.99%",
    width: "24.79%",
    height: "7.58%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  navb02Inner: {
    top: "50.76%",
    right: "38.36%",
    bottom: "41.67%",
    left: "36.85%",
    width: "24.79%",
    height: "7.58%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  ellipseIcon: {
    height: "196.97%",
    width: "178.08%",
    top: "-48.48%",
    right: "-39.73%",
    bottom: "-48.48%",
    left: "-38.36%",
  },
  navb02: {
    width: 73,
    height: 66,
  },
});

export default NAVb1;
