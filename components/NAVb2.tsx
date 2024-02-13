import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type NAVb2Type = {
  union?: ImageSourcePropType;
  ellipse38?: ImageSourcePropType;

  /** Style props */
  nAVb03Height?: number | string;
  nAVb03MarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NAVb2 = ({
  union,
  ellipse38,
  nAVb03Height,
  nAVb03MarginLeft,
}: NAVb2Type) => {
  const nAVb03Style = useMemo(() => {
    return {
      ...getStyleValue("height", nAVb03Height),
      ...getStyleValue("marginLeft", nAVb03MarginLeft),
    };
  }, [nAVb03Height, nAVb03MarginLeft]);

  return (
    <View style={[styles.navb03, nAVb03Style]}>
      <Text style={styles.wallet}>Wallet</Text>
      <View style={styles.navb03Child} />
      <Image style={styles.unionIcon} resizeMode="cover" source={union} />
      <Image style={styles.navb03Item} resizeMode="cover" source={ellipse38} />
    </View>
  );
};

const styles = StyleSheet.create({
  wallet: {
    top: "77.27%",
    left: "16.67%",
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorCornflowerblue,
    textAlign: "center",
    position: "absolute",
  },
  navb03Child: {
    height: "90.91%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "9.09%",
    left: "0%",
    position: "absolute",
  },
  unionIcon: {
    width: 21,
    height: 23,
  },
  navb03Item: {
    height: "196.97%",
    width: "216.67%",
    top: "-48.48%",
    right: "-58.33%",
    bottom: "-48.48%",
    left: "-58.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  navb03: {
    width: 60,
    height: 66,
  },
});

export default NAVb2;
