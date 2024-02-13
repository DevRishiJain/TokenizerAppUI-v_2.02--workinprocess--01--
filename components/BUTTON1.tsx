import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type BUTTON1Type = {
  txt?: string;

  /** Style props */
  bUTTONPosition?: string;
  bUTTONMarginTop?: number | string;
  bUTTONMarginLeft?: number | string;
  bUTTONTop?: number | string;
  bUTTONLeft?: number | string;
  bUTTONBackgroundColor?: string;
  bUTTONWidth?: number | string;
  bUTTONPaddingHorizontal?: number | string;
  bUTTONPaddingVertical?: number | string;
  bUTTONHeight?: number | string;
  bUTTONOpacity?: number;
  txtLetterSpacing?: number;
  txtColor?: string;

  /** Action props */
  onBUTTONPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BUTTON1 = ({
  txt,
  bUTTONPosition,
  bUTTONMarginTop,
  bUTTONMarginLeft,
  bUTTONTop,
  bUTTONLeft,
  bUTTONBackgroundColor,
  bUTTONWidth,
  bUTTONPaddingHorizontal,
  bUTTONPaddingVertical,
  bUTTONHeight,
  bUTTONOpacity,
  txtLetterSpacing,
  txtColor,
  onBUTTONPress,
}: BUTTON1Type) => {
  const bUTTONStyle = useMemo(() => {
    return {
      ...getStyleValue("position", bUTTONPosition),
      ...getStyleValue("marginTop", bUTTONMarginTop),
      ...getStyleValue("marginLeft", bUTTONMarginLeft),
      ...getStyleValue("top", bUTTONTop),
      ...getStyleValue("left", bUTTONLeft),
      ...getStyleValue("backgroundColor", bUTTONBackgroundColor),
      ...getStyleValue("width", bUTTONWidth),
      ...getStyleValue("paddingHorizontal", bUTTONPaddingHorizontal),
      ...getStyleValue("paddingVertical", bUTTONPaddingVertical),
      ...getStyleValue("height", bUTTONHeight),
      ...getStyleValue("opacity", bUTTONOpacity),
    };
  }, [
    bUTTONPosition,
    bUTTONMarginTop,
    bUTTONMarginLeft,
    bUTTONTop,
    bUTTONLeft,
    bUTTONBackgroundColor,
    bUTTONWidth,
    bUTTONPaddingHorizontal,
    bUTTONPaddingVertical,
    bUTTONHeight,
    bUTTONOpacity,
  ]);

  const txtStyle = useMemo(() => {
    return {
      ...getStyleValue("letterSpacing", txtLetterSpacing),
      ...getStyleValue("color", txtColor),
    };
  }, [txtLetterSpacing, txtColor]);

  return (
    <View style={[styles.button, bUTTONStyle]} onPress={onBUTTONPress}>
      <Text style={[styles.txt, txtStyle]}>{txt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0.7,
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  button: {
    borderRadius: Border.br_smi_5,
    borderStyle: "solid",
    borderColor: Color.colorMidnightblue_200,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_base,
  },
});

export default BUTTON1;
