import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type HEADERLoginType = {
  enterYourPhone?: string;

  /** Style props */
  hEADERLoginPosition?: string;
  hEADERLoginTop?: number | string;
  hEADERLoginLeft?: number | string;
  enterYourPhoneLetterSpacing?: number | string;
  enterYourPhoneLineHeight?: number | string;
  enterYourPhoneFontWeight?: string;
  enterYourPhoneFontFamily?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HEADERLogin = ({
  enterYourPhone,
  hEADERLoginPosition,
  hEADERLoginTop,
  hEADERLoginLeft,
  enterYourPhoneLetterSpacing,
  enterYourPhoneLineHeight,
  enterYourPhoneFontWeight,
  enterYourPhoneFontFamily,
}: HEADERLoginType) => {
  const hEADERLoginStyle = useMemo(() => {
    return {
      ...getStyleValue("position", hEADERLoginPosition),
      ...getStyleValue("top", hEADERLoginTop),
      ...getStyleValue("left", hEADERLoginLeft),
    };
  }, [hEADERLoginPosition, hEADERLoginTop, hEADERLoginLeft]);

  const enterYourPhone2Style = useMemo(() => {
    return {
      ...getStyleValue("letterSpacing", enterYourPhoneLetterSpacing),
      ...getStyleValue("lineHeight", enterYourPhoneLineHeight),
      ...getStyleValue("fontWeight", enterYourPhoneFontWeight),
      ...getStyleValue("fontFamily", enterYourPhoneFontFamily),
    };
  }, [
    enterYourPhoneLetterSpacing,
    enterYourPhoneLineHeight,
    enterYourPhoneFontWeight,
    enterYourPhoneFontFamily,
  ]);

  return (
    <View style={[styles.headerlogin, hEADERLoginStyle]}>
      <Text style={[styles.enterYourPhone, enterYourPhone2Style]}>
        {enterYourPhone}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  enterYourPhone: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.2,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    textShadowColor: "rgba(255, 255, 255, 0.89)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 35,
  },
  headerlogin: {
    width: 375,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_24xl,
    paddingVertical: Padding.p_3xs,
  },
});

export default HEADERLogin;
