import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import TEXTWhite50 from "./TEXTWhite50";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const INPUTfilled2 = () => {
  return (
    <View style={styles.inputfilled}>
      <Image
        style={[styles.dividerIcon, styles.typePosition]}
        resizeMode="cover"
        source={require("../assets/divider2.png")}
      />
      <Image
        style={[styles.iconclose, styles.iconclosePosition]}
        resizeMode="cover"
        source={require("../assets/iconclose.png")}
      />
      <View style={[styles.type, styles.typePosition]}>
        <Text style={styles.txt}>jacksmith@yahoo.com</Text>
        <Image
          style={styles.typeCursorIcon}
          resizeMode="cover"
          source={require("../assets/type-cursor.png")}
        />
      </View>
      <Text style={[styles.description, styles.descriptionTypo]}>
        Enter your password
      </Text>
      <Text style={[styles.description1, styles.descriptionTypo]}>
        Email address
      </Text>
      <TEXTWhite50
        showEnterYourPhone={false}
        tEXTWhite5011Position="absolute"
        tEXTWhite5011Top={72}
        tEXTWhite5011Left={0}
        enterYourPhoneFontFamily="unset"
        enterYourPhoneColor="unset"
        enterYourPhoneFontSize={11}
        enterYourPhoneLineHeight={14}
        enterYourPhoneTextAlign="left"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  typePosition: {
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  iconclosePosition: {
    bottom: 21,
    right: 0,
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
    bottom: 21,
    right: 0,
  },
  iconclose: {
    width: 44,
    height: 44,
    position: "absolute",
  },
  txt: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.2,
    lineHeight: 18,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
  },
  typeCursorIcon: {
    width: 2,
    height: 22,
    display: "none",
  },
  type: {
    top: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    color: Color.neutralsNeutral900,
    opacity: 0.4,
  },
  description1: {
    opacity: 0.5,
    color: Color.colorWhite,
    lineHeight: 12,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    bottom: 60,
  },
  inputfilled: {
    top: 270,
    left: 16,
    width: 343,
    height: 93,
    position: "absolute",
  },
});

export default INPUTfilled2;
