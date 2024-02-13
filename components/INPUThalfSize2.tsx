import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

export type INPUThalfSize2Type = {
  txt?: string;
  txt1?: string;
  iCONArrowDown?: boolean;
  txt2?: boolean;

  /** Style props */
  propTop?: number | string;
  propBottom?: number | string;
  propRight?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const INPUThalfSize2 = ({
  txt,
  txt1,
  iCONArrowDown,
  txt2,
  propTop,
  propBottom,
  propRight,
  propLeft,
}: INPUThalfSize2Type) => {
  const iNPUThalfSizeStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("bottom", propBottom),
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propBottom, propRight, propLeft]);

  return (
    <View style={[styles.inputhalfsize, iNPUThalfSizeStyle]}>
      <Image
        style={[styles.dividerIcon, styles.dividerIconPosition]}
        resizeMode="cover"
        source={require("../assets/divider3.png")}
      />
      {!iCONArrowDown && (
        <Image
          style={[styles.iconarrowdown, styles.dividerIconPosition]}
          resizeMode="cover"
          source={require("../assets/iconarrowdown.png")}
        />
      )}
      <Text style={[styles.txt, styles.txtTypo]}>{txt}</Text>
      {!txt2 && <Text style={[styles.txt1, styles.txtTypo]}>{txt1}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  dividerIconPosition: {
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  txtTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
    position: "absolute",
  },
  dividerIcon: {
    borderRadius: Border.br_12xs,
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    left: 0,
  },
  iconarrowdown: {
    width: 44,
    height: 44,
    display: "none",
  },
  txt: {
    bottom: 30,
    fontSize: FontSize.size_2xs,
    letterSpacing: -0.1,
    opacity: 0.5,
    left: 0,
  },
  txt1: {
    top: "66.67%",
    left: "0%",
    fontSize: FontSize.size_mid,
    letterSpacing: -0.2,
    opacity: 0.8,
    display: "none",
  },
  inputhalfsize: {
    height: "8.87%",
    width: "43.47%",
    top: "54.93%",
    right: "51.47%",
    bottom: "36.21%",
    left: "5.07%",
    position: "absolute",
  },
});

export default INPUThalfSize2;
