import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type TEXTWhite50Type = {
  enterYourPhone?: string;
  showEnterYourPhone?: boolean;

  /** Style props */
  tEXTWhite5011Position?: string;
  tEXTWhite5011Top?: number | string;
  tEXTWhite5011Left?: number | string;
  enterYourPhoneLetterSpacing?: number | string;
  enterYourPhoneFontFamily?: string;
  enterYourPhoneColor?: string;
  enterYourPhoneFontSize?: number;
  enterYourPhoneLineHeight?: number;
  enterYourPhoneTextAlign?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TEXTWhite50 = ({
  enterYourPhone,
  showEnterYourPhone,
  tEXTWhite5011Position,
  tEXTWhite5011Top,
  tEXTWhite5011Left,
  enterYourPhoneLetterSpacing,
  enterYourPhoneFontFamily,
  enterYourPhoneColor,
  enterYourPhoneFontSize,
  enterYourPhoneLineHeight,
  enterYourPhoneTextAlign,
}: TEXTWhite50Type) => {
  const tEXTWhite5011Style = useMemo(() => {
    return {
      ...getStyleValue("position", tEXTWhite5011Position),
      ...getStyleValue("top", tEXTWhite5011Top),
      ...getStyleValue("left", tEXTWhite5011Left),
    };
  }, [tEXTWhite5011Position, tEXTWhite5011Top, tEXTWhite5011Left]);

  const enterYourPhone1Style = useMemo(() => {
    return {
      ...getStyleValue("letterSpacing", enterYourPhoneLetterSpacing),
      ...getStyleValue("fontFamily", enterYourPhoneFontFamily),
      ...getStyleValue("color", enterYourPhoneColor),
      ...getStyleValue("fontSize", enterYourPhoneFontSize),
      ...getStyleValue("lineHeight", enterYourPhoneLineHeight),
      ...getStyleValue("textAlign", enterYourPhoneTextAlign),
    };
  }, [
    enterYourPhoneLetterSpacing,
    enterYourPhoneFontFamily,
    enterYourPhoneColor,
    enterYourPhoneFontSize,
    enterYourPhoneLineHeight,
    enterYourPhoneTextAlign,
  ]);

  return (
    <View style={[styles.textwhite5011, tEXTWhite5011Style]}>
      {showEnterYourPhone && (
        <Text style={[styles.enterYourPhone, enterYourPhone1Style]}>
          {enterYourPhone}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  enterYourPhone: {
    fontSize: FontSize.size_2xs,
    letterSpacing: -0.2,
    lineHeight: 14,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorGray_200,
    textAlign: "left",
    display: "flex",
    width: 347,
    alignItems: "center",
  },
  textwhite5011: {
    flexDirection: "row",
    justifyContent: "center",
    padding: Padding.p_8xs,
    alignItems: "center",
  },
});

export default TEXTWhite50;
