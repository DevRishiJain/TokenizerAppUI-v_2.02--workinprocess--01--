import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

export type PhotoInstructionsType = {
  group3751?: ImageSourcePropType;

  /** Style props */
  photoInstructionsPosition?: string;
  photoInstructionsTop?: number | string;
  photoInstructionsLeft?: number | string;
  photoInstructionsWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PhotoInstructions = ({
  group3751,
  photoInstructionsPosition,
  photoInstructionsTop,
  photoInstructionsLeft,
  photoInstructionsWidth,
}: PhotoInstructionsType) => {
  const photoInstructionsStyle = useMemo(() => {
    return {
      ...getStyleValue("position", photoInstructionsPosition),
      ...getStyleValue("top", photoInstructionsTop),
      ...getStyleValue("left", photoInstructionsLeft),
      ...getStyleValue("width", photoInstructionsWidth),
    };
  }, [
    photoInstructionsPosition,
    photoInstructionsTop,
    photoInstructionsLeft,
    photoInstructionsWidth,
  ]);

  return (
    <View style={[styles.photoinstructions, photoInstructionsStyle]}>
      <View style={styles.toEnterOrBecomeABankCustParent}>
        <Text style={styles.toEnterOr}>Carefully review the examples.</Text>
        <Text style={[styles.toEnterOr1, styles.enterTypo]}>
          Face in shadow
        </Text>
        <Text style={[styles.toEnterOr2, styles.enterTypo]}>
          Сlothing covers
        </Text>
        <Text style={[styles.toEnterOr3, styles.enterTypo]}>Not a clear</Text>
        <View style={styles.toEnterOrBecomeABankCustParent}>
          <Text style={styles.toEnterOr4}>Everything OK</Text>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={group3751}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  enterTypo: {
    color: Color.colorFirebrick,
    letterSpacing: -0.1,
    fontSize: FontSize.size_5xs,
    top: "75.57%",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 12,
    position: "absolute",
  },
  toEnterOr: {
    top: "1.53%",
    left: "35.72%",
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
    opacity: 0.5,
    textAlign: "left",
    lineHeight: 12,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  toEnterOr1: {
    left: "36.6%",
  },
  toEnterOr2: {
    left: "58.09%",
  },
  toEnterOr3: {
    left: "82.49%",
  },
  toEnterOr4: {
    top: "90.84%",
    left: "4.36%",
    color: Color.colorForestgreen,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 12,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    height: 114,
    position: "absolute",
    width: 344,
  },
  toEnterOrBecomeABankCustParent: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  photoinstructions: {
    height: 131,
    width: 344,
  },
});

export default PhotoInstructions;
