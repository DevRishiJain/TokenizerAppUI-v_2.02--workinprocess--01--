import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const INPUTfilled1 = () => {
  return (
    <View style={styles.inputfilled}>
      <Image
        style={styles.dividerIcon}
        resizeMode="cover"
        source={require("../assets/divider2.png")}
      />
      <Image
        style={styles.iconeyeclosed}
        resizeMode="cover"
        source={require("../assets/iconeyeclosed.png")}
      />
      <View style={[styles.type, styles.typeFlexBox]}>
        <Text style={[styles.txt, styles.txtTypo]}>
          <Text style={styles.text}>234-14</Text>
          <Text style={styles.text1}>|</Text>
        </Text>
        <Image
          style={styles.typeCursorIcon}
          resizeMode="cover"
          source={require("../assets/type-cursor1.png")}
        />
      </View>
      <Text style={[styles.description, styles.descriptionTypo]}>
        Enter your password
      </Text>
      <Text style={[styles.description1, styles.descriptionTypo]}>
        Email address
      </Text>
      <View style={[styles.textwhite5011, styles.typeFlexBox]}>
        <Text style={[styles.enterYourPhone, styles.txtTypo]}>
          You must be 18 years or older to open a Tokenizer account
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  typeFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    left: 0,
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
    bottom: 60,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    left: 0,
    position: "absolute",
  },
  dividerIcon: {
    borderRadius: Border.br_12xs,
    maxWidth: "100%",
    height: 1,
    overflow: "hidden",
    left: 0,
    bottom: 21,
    right: 0,
    position: "absolute",
  },
  iconeyeclosed: {
    width: 44,
    height: 44,
    opacity: 0.3,
    display: "none",
    bottom: 21,
    right: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mid,
    color: Color.colorDarkgray,
  },
  text1: {
    fontSize: FontSize.size_3xl,
    color: Color.colorWhite,
  },
  txt: {
    lineHeight: 18,
  },
  typeCursorIcon: {
    width: 2,
    height: 22,
    display: "none",
  },
  type: {
    top: 40,
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
    top: 72,
    justifyContent: "center",
    padding: Padding.p_8xs,
    alignItems: "center",
    display: "none",
  },
  inputfilled: {
    top: 267,
    left: 18,
    width: 343,
    height: 93,
    position: "absolute",
  },
});

export default INPUTfilled1;
