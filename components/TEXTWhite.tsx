import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type TEXTWhiteType = {
  enterYourPhone?: string;

  /** Style props */
  tEXTWhite14Position?: string;
  tEXTWhite14Top?: number | string;
  tEXTWhite14Left?: number | string;
  enterYourPhoneFontWeight?: string;
  enterYourPhoneFontFamily?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TEXTWhite = ({
  enterYourPhone,
  tEXTWhite14Position,
  tEXTWhite14Top,
  tEXTWhite14Left,
  enterYourPhoneFontWeight,
  enterYourPhoneFontFamily,
}: TEXTWhiteType) => {
  const tEXTWhite14Style = useMemo(() => {
    return {
      ...getStyleValue("position", tEXTWhite14Position),
      ...getStyleValue("top", tEXTWhite14Top),
      ...getStyleValue("left", tEXTWhite14Left),
    };
  }, [tEXTWhite14Position, tEXTWhite14Top, tEXTWhite14Left]);

  const enterYourPhoneStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", enterYourPhoneFontWeight),
      ...getStyleValue("fontFamily", enterYourPhoneFontFamily),
    };
  }, [enterYourPhoneFontWeight, enterYourPhoneFontFamily]);

  return (
    <View
      style={[styles.textwhite14, styles.textwhite14FlexBox, tEXTWhite14Style]}
    >
      <Text
        style={[
          styles.enterYourPhone,
          styles.textwhite14FlexBox,
          enterYourPhoneStyle,
        ]}
      >
        {enterYourPhone}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textwhite14FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  enterYourPhone: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.2,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.gray6,
    textAlign: "center",
    display: "flex",
    width: 352,
  },
  textwhite14: {
    width: 375,
    flexDirection: "row",
    paddingHorizontal: Padding.p_24xl,
    paddingVertical: Padding.p_3xs,
  },
});

export default TEXTWhite;
