import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

export type FORMTextType = {
  /** Style props */
  fORMTextPosition?: string;
  fORMTextBorderColor?: string;
  fORMTextTop?: number | string;
  fORMTextLeft?: number | string;
  fORMTextWidth?: number | string;

  /** Action props */
  onFORMTextPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FORMText = ({
  fORMTextPosition,
  fORMTextBorderColor,
  fORMTextTop,
  fORMTextLeft,
  fORMTextWidth,
  onFORMTextPress,
}: FORMTextType) => {
  const fORMTextStyle = useMemo(() => {
    return {
      ...getStyleValue("position", fORMTextPosition),
      ...getStyleValue("borderColor", fORMTextBorderColor),
      ...getStyleValue("top", fORMTextTop),
      ...getStyleValue("left", fORMTextLeft),
      ...getStyleValue("width", fORMTextWidth),
    };
  }, [
    fORMTextPosition,
    fORMTextBorderColor,
    fORMTextTop,
    fORMTextLeft,
    fORMTextWidth,
  ]);

  return (
    <View style={[styles.formtext, fORMTextStyle]} onPress={onFORMTextPress}>
      <Text style={[styles.description, styles.txtTypo]}>Phone Number</Text>
      <Text style={[styles.txt, styles.txtTypo]}>{`+1 901-643-7253 `}</Text>
      <Image
        style={styles.dividerIcon}
        resizeMode="cover"
        source={require("../assets/divider.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  txtTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
  },
  description: {
    fontSize: FontSize.size_xs,
    letterSpacing: -0.1,
    lineHeight: 12,
    opacity: 0.4,
  },
  txt: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.2,
    lineHeight: 18,
    marginTop: 10,
  },
  dividerIcon: {
    borderRadius: Border.br_12xs,
    width: 233,
    height: 1,
    display: "none",
    opacity: 0.12,
    marginTop: 10,
  },
  formtext: {
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.12)",
    borderBottomWidth: 1,
    paddingBottom: Padding.p_8xs,
  },
});

export default FORMText;
