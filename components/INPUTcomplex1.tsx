import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

export type INPUTcomplexType = {
  personalInfo?: string;
  personalDetails?: string;

  /** Style props */
  enterYourPhoneTop?: number | string;

  /** Action props */
  onINPUTcomplexPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const INPUTcomplex = ({
  personalInfo,
  personalDetails,
  enterYourPhoneTop,
  onINPUTcomplexPress,
}: INPUTcomplexType) => {
  const iNPUTcomplexStyle = useMemo(() => {
    return {
      ...getStyleValue("top", enterYourPhoneTop),
    };
  }, [enterYourPhoneTop]);

  return (
    <Pressable
      style={[styles.inputcomplex, iNPUTcomplexStyle]}
      onPress={onINPUTcomplexPress}
    >
      <Image
        style={[styles.dividerIcon, styles.dividerIconPosition]}
        resizeMode="cover"
        source={require("../assets/divider2.png")}
      />
      <Image
        style={[styles.iconarrowleft, styles.dividerIconPosition]}
        resizeMode="cover"
        source={require("../assets/iconarrowleft.png")}
      />
      <View style={[styles.type, styles.typeFlexBox]}>
        <Text style={[styles.txt, styles.txtTypo]}>{personalInfo}</Text>
      </View>
      <Text style={[styles.description, styles.descriptionTypo]}>
        Enter your password
      </Text>
      <Text style={[styles.description1, styles.descriptionTypo]}>
        {personalDetails}
      </Text>
      <View style={[styles.textwhite5011, styles.typeFlexBox]}>
        <Text style={[styles.enterYourPhone, styles.txtTypo]}>
          You must be 18 years or older to open a Tokenizer account
        </Text>
      </View>
      <Image
        style={styles.iconbluetick}
        resizeMode="cover"
        source={require("../assets/iconbluetick.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  dividerIconPosition: {
    right: 0,
    position: "absolute",
  },
  typeFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  txtTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    letterSpacing: -0.2,
  },
  descriptionTypo: {
    lineHeight: 12,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    bottom: 88,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    left: 0,
    position: "absolute",
  },
  dividerIcon: {
    bottom: 29,
    borderRadius: Border.br_12xs,
    maxWidth: "100%",
    height: 1,
    overflow: "hidden",
    left: 0,
  },
  iconarrowleft: {
    bottom: 49,
    width: 44,
    height: 44,
  },
  txt: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    color: Color.colorWhite,
  },
  type: {
    top: 40,
    left: 30,
    alignItems: "center",
    overflow: "hidden",
  },
  description: {
    color: Color.neutralsNeutral900,
    opacity: 0.4,
  },
  description1: {
    opacity: 0.5,
    color: Color.colorWhite,
  },
  enterYourPhone: {
    fontSize: FontSize.size_2xs,
    lineHeight: 14,
    color: Color.colorGray_200,
    display: "flex",
    width: 347,
    alignItems: "center",
  },
  textwhite5011: {
    top: 102,
    justifyContent: "center",
    padding: Padding.p_8xs,
    display: "none",
    alignItems: "center",
    left: 0,
  },
  iconbluetick: {
    top: 43,
    left: 4,
    width: 16,
    height: 16,
    position: "absolute",
  },
  inputcomplex: {
    top: 206,
    left: 16,
    width: 343,
    height: 121,
    position: "absolute",
  },
});

export default INPUTcomplex;
