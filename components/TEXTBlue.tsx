import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type TEXTBlueType = {
  enterYourPhone?: string;

  /** Style props */
  tEXTBlue14Position?: string;
  tEXTBlue14Top?: number | string;
  tEXTBlue14Left?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TEXTBlue = ({
  enterYourPhone,
  tEXTBlue14Position,
  tEXTBlue14Top,
  tEXTBlue14Left,
}: TEXTBlueType) => {
  const tEXTBlue14Style = useMemo(() => {
    return {
      ...getStyleValue("position", tEXTBlue14Position),
      ...getStyleValue("top", tEXTBlue14Top),
      ...getStyleValue("left", tEXTBlue14Left),
    };
  }, [tEXTBlue14Position, tEXTBlue14Top, tEXTBlue14Left]);

  return (
    <View
      style={[styles.textblue14, styles.textblue14FlexBox, tEXTBlue14Style]}
    >
      <Text style={[styles.enterYourPhone, styles.textblue14FlexBox]}>
        {enterYourPhone}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textblue14FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  enterYourPhone: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.2,
    lineHeight: 26,
    fontFamily: FontFamily.montserratRegular,
    color: Color.brandPrimary,
    textAlign: "center",
    display: "flex",
    width: 346,
  },
  textblue14: {
    width: 375,
    flexDirection: "row",
    paddingHorizontal: Padding.p_24xl,
    paddingVertical: Padding.p_3xs,
  },
});

export default TEXTBlue;
