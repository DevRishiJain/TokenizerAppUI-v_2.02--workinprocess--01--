import React, { useMemo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type WarningMsgblueType = {
  /** Style props */
  warningMsgbluePosition?: string;
  warningMsgblueTop?: number | string;
  warningMsgblueLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const WarningMsgblue = ({
  warningMsgbluePosition,
  warningMsgblueTop,
  warningMsgblueLeft,
}: WarningMsgblueType) => {
  const warningMsgblueStyle = useMemo(() => {
    return {
      ...getStyleValue("position", warningMsgbluePosition),
      ...getStyleValue("top", warningMsgblueTop),
      ...getStyleValue("left", warningMsgblueLeft),
    };
  }, [warningMsgbluePosition, warningMsgblueTop, warningMsgblueLeft]);

  return (
    <View style={[styles.warningmsgblue, warningMsgblueStyle]}>
      <View style={styles.warningmsgblueChild} />
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract.png")}
      />
      <Text style={styles.toEnterOr}>
        Information secured with 128-bit encryption
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  warningmsgblueChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.brandPrimary,
    opacity: 0.08,
    position: "absolute",
  },
  subtractIcon: {
    width: 15,
    height: 18,
    opacity: 0.6,
  },
  toEnterOr: {
    top: "30.56%",
    left: "11.37%",
    fontSize: FontSize.size_2xs,
    letterSpacing: -0.2,
    lineHeight: 14,
    fontFamily: FontFamily.montserratRegular,
    color: Color.brandPrimary,
    textAlign: "left",
    position: "absolute",
  },
  warningmsgblue: {
    width: 343,
    height: 36,
  },
});

export default WarningMsgblue;
