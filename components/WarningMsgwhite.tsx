import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type WarningMsgwhiteType = {
  /** Style props */
  warningMsgwhitePosition?: string;
  warningMsgwhiteTop?: number | string;
  warningMsgwhiteLeft?: number | string;
  warningMsgwhiteHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const WarningMsgwhite = ({
  warningMsgwhitePosition,
  warningMsgwhiteTop,
  warningMsgwhiteLeft,
  warningMsgwhiteHeight,
}: WarningMsgwhiteType) => {
  const warningMsgwhiteStyle = useMemo(() => {
    return {
      ...getStyleValue("position", warningMsgwhitePosition),
      ...getStyleValue("top", warningMsgwhiteTop),
      ...getStyleValue("left", warningMsgwhiteLeft),
      ...getStyleValue("height", warningMsgwhiteHeight),
    };
  }, [
    warningMsgwhitePosition,
    warningMsgwhiteTop,
    warningMsgwhiteLeft,
    warningMsgwhiteHeight,
  ]);

  return (
    <View style={[styles.warningmsgwhite, warningMsgwhiteStyle]}>
      <Text style={styles.toEnterOr}>
        Unfortunately, PO Boxes, business addresses, and non-US based addresses
        cannot be accepted
      </Text>
      <Image
        style={styles.iconattention}
        resizeMode="cover"
        source={require("../assets/iconattention.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  toEnterOr: {
    height: "79.55%",
    width: "83.91%",
    top: "20.45%",
    left: "16.09%",
    fontSize: FontSize.size_2xs,
    letterSpacing: -0.2,
    lineHeight: 14,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
    textAlign: "left",
    opacity: 0.5,
    position: "absolute",
  },
  iconattention: {
    height: "100%",
    width: "12.64%",
    top: "0%",
    right: "87.36%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  warningmsgwhite: {
    width: 348,
    height: 44,
  },
});

export default WarningMsgwhite;
