import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

export type INPUTcomplex2Type = {
  iHaveReadAndAgreeToThe?: string;
  electronicCommunicationCo?: string;
  prop?: string;

  /** Style props */
  tEXTWhite5011Top?: number | string;

  /** Action props */
  onINPUTcomplexPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const INPUTcomplex2 = ({
  iHaveReadAndAgreeToThe,
  electronicCommunicationCo,
  prop,
  tEXTWhite5011Top,
  onINPUTcomplexPress,
}: INPUTcomplex2Type) => {
  const iNPUTcomplex1Style = useMemo(() => {
    return {
      ...getStyleValue("top", tEXTWhite5011Top),
    };
  }, [tEXTWhite5011Top]);

  return (
    <Pressable
      style={[styles.inputcomplex, iNPUTcomplex1Style]}
      onPress={onINPUTcomplexPress}
    >
      <Image
        style={[styles.dividerIcon, styles.dividerIconPosition]}
        resizeMode="cover"
        source={require("../assets/divider2.png")}
      />
      <Image
        style={[styles.iconarrowleft, styles.dividerIconPosition1]}
        resizeMode="cover"
        source={require("../assets/iconarrowleft.png")}
      />
      <View style={[styles.type, styles.typeFlexBox]}>
        <Text style={[styles.txt, styles.txtTypo]}>
          <Text style={styles.iHaveRead}>{iHaveReadAndAgreeToThe}</Text>
          <Text style={styles.electronicCommunicationCons}>
            {electronicCommunicationCo}
          </Text>
          <Text style={styles.iHaveRead}>{prop}</Text>
        </Text>
      </View>
      <Text style={[styles.description, styles.descriptionTypo]}>
        Enter your password
      </Text>
      <Text style={[styles.description1, styles.descriptionTypo]}>
        PERSONAL
      </Text>
      <View style={[styles.textwhite5011, styles.typeFlexBox]}>
        <Text style={[styles.enterYourPhone, styles.txtTypo]}>
          You must be 18 years or older to open a Tokenizer account
        </Text>
      </View>
      <Image
        style={styles.icondefault}
        resizeMode="cover"
        source={require("../assets/icondefault.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  dividerIconPosition: {
    left: 0,
    display: "none",
  },
  dividerIconPosition1: {
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
    display: "none",
    overflow: "hidden",
    right: 0,
    position: "absolute",
  },
  iconarrowleft: {
    bottom: 49,
    width: 44,
    height: 44,
    display: "none",
  },
  iHaveRead: {
    color: Color.colorWhite,
  },
  electronicCommunicationCons: {
    textDecoration: "underline",
    color: Color.brandPrimary,
  },
  txt: {
    fontSize: FontSize.size_sm,
    letterSpacing: -0.3,
    lineHeight: 20,
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
    display: "none",
  },
  enterYourPhone: {
    fontSize: FontSize.size_2xs,
    letterSpacing: -0.2,
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
    alignItems: "center",
    display: "none",
    left: 0,
  },
  icondefault: {
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

export default INPUTcomplex2;
