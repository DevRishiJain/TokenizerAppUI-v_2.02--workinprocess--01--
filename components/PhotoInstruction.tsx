import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export type PhotoInstructionType = {
  union?: ImageSourcePropType;

  /** Style props */
  photoInstructionPosition?: string;
  photoInstructionTop?: number | string;
  photoInstructionLeft?: number | string;
  rectangleViewBorderColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PhotoInstruction = ({
  union,
  photoInstructionPosition,
  photoInstructionTop,
  photoInstructionLeft,
  rectangleViewBorderColor,
}: PhotoInstructionType) => {
  const photoInstructionStyle = useMemo(() => {
    return {
      ...getStyleValue("position", photoInstructionPosition),
      ...getStyleValue("top", photoInstructionTop),
      ...getStyleValue("left", photoInstructionLeft),
    };
  }, [photoInstructionPosition, photoInstructionTop, photoInstructionLeft]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", rectangleViewBorderColor),
    };
  }, [rectangleViewBorderColor]);

  return (
    <View style={[styles.photoinstruction, photoInstructionStyle]}>
      <View style={styles.frameParent}>
        <View style={styles.unionParent}>
          <Image style={styles.unionIcon} resizeMode="cover" source={union} />
          <Text style={[styles.toEnterOr, styles.enterTypo]}>
            Use a light room
          </Text>
        </View>
        <View style={styles.unionGroupSpaceBlock}>
          <Image
            style={styles.unionIcon1}
            resizeMode="cover"
            source={require("../assets/union1.png")}
          />
          <Text style={[styles.toEnterOr1, styles.enterTypo]}>No flash</Text>
        </View>
        <View style={[styles.subtractParent, styles.unionGroupSpaceBlock]}>
          <Image
            style={styles.subtractIcon}
            resizeMode="cover"
            source={require("../assets/subtract1.png")}
          />
          <Text style={[styles.toEnterOr2, styles.enterTypo]}>
            Hold the camera stable
          </Text>
        </View>
      </View>
      <View style={[styles.photoinstructionChild, rectangleViewStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  enterTypo: {
    marginTop: 8,
    opacity: 0.5,
    textAlign: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 16,
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    height: 21,
  },
  unionGroupSpaceBlock: {
    marginLeft: 22,
    alignItems: "center",
  },
  unionIcon: {
    width: 21,
    opacity: 0.6,
    height: 21,
  },
  toEnterOr: {
    width: 97,
  },
  unionParent: {
    alignItems: "center",
  },
  unionIcon1: {
    width: 17,
    height: 26,
    opacity: 0.6,
  },
  toEnterOr1: {
    width: 57,
  },
  subtractIcon: {
    width: 25,
    height: 22,
    opacity: 0.6,
  },
  toEnterOr2: {
    width: 135,
  },
  subtractParent: {
    width: 116,
  },
  frameParent: {
    height: "79.86%",
    width: "91.55%",
    top: "15.94%",
    right: "7%",
    bottom: "4.2%",
    left: "1.46%",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  photoinstructionChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: "rgba(196, 196, 196, 0)",
    borderWidth: 0.5,
    position: "absolute",
  },
  photoinstruction: {
    width: 343,
    height: 69,
  },
});

export default PhotoInstruction;
