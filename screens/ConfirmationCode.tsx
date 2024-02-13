import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import HEADERLogin from "../components/HEADERLogin";
import BUTTON1 from "../components/BUTTON1";
import INPUTfilled1 from "../components/INPUTfilled1";
import TEXTBlue from "../components/TEXTBlue";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ConfirmationCode = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.confirmationCode}
      locations={[0, 1]}
      colors={["#010411", "#004da6"]}
      useAngle={true}
      angle={180.02}
    >
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption1.png")}
      />
      <HEADERLogin
        enterYourPhone="Confirmation code"
        hEADERLoginPosition="absolute"
        hEADERLoginTop={74}
        hEADERLoginLeft={0}
        enterYourPhoneLetterSpacing={0.2}
        enterYourPhoneLineHeight={24}
        enterYourPhoneFontWeight="600"
        enterYourPhoneFontFamily="Montserrat-SemiBold"
      />
      <BUTTON1
        txt="CONTINUE"
        bUTTONPosition="absolute"
        bUTTONMarginTop={66}
        bUTTONMarginLeft={-175.5}
        bUTTONTop="50%"
        bUTTONLeft="50%"
        bUTTONBackgroundColor="#10309a"
        bUTTONWidth={354}
        bUTTONPaddingHorizontal="unset"
        bUTTONPaddingVertical="unset"
        bUTTONHeight="unset"
        txtLetterSpacing={0.7}
        txtColor="#fff"
        onBUTTONPress={() => navigation.navigate("EMail")}
      />
      <INPUTfilled1 />
      <View style={styles.keyboard}>
        <Image
          style={styles.backgroundIcon}
          resizeMode="cover"
          source={require("../assets/background1.png")}
        />
        <Image
          style={styles.deleteButtonIcon}
          resizeMode="cover"
          source={require("../assets/delete-button1.png")}
        />
        <View style={[styles.view, styles.viewPosition5]}>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key.png")}
          />
          <Text style={[styles.text, styles.textTypo2]}>0</Text>
        </View>
        <View style={[styles.view1, styles.viewPosition3]}>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key1.png")}
          />
          <Text style={[styles.wxyz, styles.tuvTypo]}>WXYZ</Text>
          <Text style={[styles.text1, styles.textTypo1]}>9</Text>
        </View>
        <View style={[styles.view2, styles.viewPosition4]}>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key1.png")}
          />
          <Text style={[styles.tuv, styles.tuvTypo]}>TUV</Text>
          <Text style={[styles.text1, styles.textTypo1]}>8</Text>
        </View>
        <View style={[styles.view3, styles.viewPosition2]}>
          <Image
            style={[styles.keyIcon3, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key1.png")}
          />
          <Text style={[styles.pgrs, styles.tuvTypo]}>PGRS</Text>
          <Text style={[styles.pgrs1, styles.suggestionTypo]}>•</Text>
          <Text style={[styles.text3, styles.textTypo2]}>7</Text>
        </View>
        <View style={[styles.view4, styles.viewPosition1]}>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key1.png")}
          />
          <Text style={[styles.mno, styles.tuvTypo]}>MNO</Text>
          <Text style={[styles.text1, styles.textTypo1]}>6</Text>
        </View>
        <View style={[styles.view5, styles.viewPosition1]}>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key1.png")}
          />
          <Text style={[styles.jkl, styles.tuvTypo]}>JKL</Text>
          <Text style={[styles.text1, styles.textTypo1]}>5</Text>
        </View>
        <View style={[styles.view6, styles.viewPosition1]}>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key1.png")}
          />
          <Text style={[styles.ghi, styles.tuvTypo]}>GHI</Text>
          <Text style={[styles.text6, styles.textTypo1]}>4</Text>
        </View>
        <View style={[styles.view7, styles.viewPosition]}>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key.png")}
          />
          <Text style={[styles.def, styles.tuvTypo]}>DEF</Text>
          <Text style={[styles.text7, styles.textTypo]}>3</Text>
        </View>
        <View style={[styles.view8, styles.viewPosition]}>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key.png")}
          />
          <Text style={[styles.def, styles.tuvTypo]}>ABC</Text>
          <Text style={[styles.text7, styles.textTypo]}>2</Text>
        </View>
        <View style={[styles.view9, styles.viewPosition]}>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key.png")}
          />
          <Text style={[styles.text9, styles.textTypo]}>1</Text>
        </View>
      </View>
      <View style={styles.iphonekeyboardsaddress}>
        <Image
          style={styles.backgroundIcon}
          resizeMode="cover"
          source={require("../assets/background2.png")}
        />
        <Image
          style={styles.backgroundIcon}
          resizeMode="cover"
          source={require("../assets/background3.png")}
        />
        <Text style={[styles.suggestion1, styles.suggestionTypo]}>234-149</Text>
        <Text style={[styles.suggestion2, styles.suggestionTypo]}>
          From message
        </Text>
      </View>
      <TEXTBlue
        enterYourPhone="Resend Code"
        tEXTBlue14Position="absolute"
        tEXTBlue14Top={354}
        tEXTBlue14Left={1}
      />
      <TEXTBlue
        enterYourPhone="Edit number"
        tEXTBlue14Position="absolute"
        tEXTBlue14Top={404}
        tEXTBlue14Left={1}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  viewPosition5: {
    left: "34.4%",
    right: "34.4%",
  },
  keyIconLayout: {
    borderRadius: Border.br_8xs,
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  textTypo2: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 30,
    fontSize: FontSize.size_6xl,
    left: "43.59%",
    position: "absolute",
  },
  viewPosition3: {
    left: "67.2%",
    right: "1.6%",
  },
  tuvTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    letterSpacing: 2,
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
    position: "absolute",
  },
  textTypo1: {
    top: "2.13%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 30,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  viewPosition4: {
    bottom: "25.93%",
    height: "21.76%",
    top: "52.31%",
    width: "31.2%",
    position: "absolute",
  },
  viewPosition2: {
    left: "1.6%",
    right: "67.2%",
  },
  suggestionTypo: {
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  viewPosition1: {
    bottom: "50.93%",
    top: "27.31%",
    height: "21.76%",
    width: "31.2%",
    position: "absolute",
  },
  viewPosition: {
    bottom: "75.93%",
    top: "2.78%",
    width: "31.2%",
    height: "21.3%",
    position: "absolute",
  },
  textTypo: {
    top: "2.17%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 30,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  backgroundIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  deleteButtonIcon: {
    width: 23,
    height: 17,
  },
  keyIcon: {
    bottom: "0%",
    height: "100%",
    borderRadius: Border.br_8xs,
  },
  text: {
    top: "17.39%",
  },
  view: {
    top: "77.31%",
    bottom: "1.39%",
    width: "31.2%",
    height: "21.3%",
    left: "34.4%",
    right: "34.4%",
    position: "absolute",
  },
  wxyz: {
    left: "32.48%",
    top: "59.57%",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    letterSpacing: 2,
  },
  text1: {
    left: "43.59%",
  },
  view1: {
    bottom: "25.93%",
    height: "21.76%",
    top: "52.31%",
    width: "31.2%",
    position: "absolute",
  },
  tuv: {
    left: "37.61%",
    top: "59.57%",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    letterSpacing: 2,
  },
  view2: {
    left: "34.4%",
    right: "34.4%",
  },
  keyIcon3: {
    height: "57.32%",
    bottom: "42.68%",
  },
  pgrs: {
    top: "34.15%",
    left: "34.19%",
  },
  pgrs1: {
    top: "85.37%",
    left: "46.15%",
    fontSize: FontSize.size_sm,
    lineHeight: 12,
  },
  text3: {
    top: "1.22%",
  },
  view3: {
    height: "37.96%",
    bottom: "9.72%",
    top: "52.31%",
    left: "1.6%",
    right: "67.2%",
    width: "31.2%",
    position: "absolute",
  },
  mno: {
    left: "35.9%",
    top: "59.57%",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    letterSpacing: 2,
  },
  view4: {
    left: "67.2%",
    right: "1.6%",
  },
  jkl: {
    left: "40.17%",
    top: "59.57%",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    letterSpacing: 2,
  },
  view5: {
    left: "34.4%",
    right: "34.4%",
  },
  ghi: {
    left: "38.46%",
    top: "59.57%",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    letterSpacing: 2,
  },
  text6: {
    left: "42.74%",
  },
  view6: {
    left: "1.6%",
    right: "67.2%",
  },
  def: {
    top: "60.87%",
    left: "38.89%",
  },
  text7: {
    left: "43.59%",
  },
  view7: {
    left: "67.2%",
    right: "1.6%",
  },
  view8: {
    left: "34.4%",
    right: "34.4%",
  },
  text9: {
    left: "45.3%",
  },
  view9: {
    left: "1.6%",
    right: "67.2%",
  },
  keyboard: {
    right: "-0.53%",
    bottom: 0,
    left: "0.53%",
    height: 216,
    position: "absolute",
    width: "100%",
  },
  suggestion1: {
    top: "40.48%",
    left: "42.16%",
    fontSize: FontSize.size_base,
    letterSpacing: -0.3,
  },
  suggestion2: {
    top: "7.14%",
    left: "40.29%",
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_100,
  },
  iphonekeyboardsaddress: {
    top: 554,
    left: 3,
    width: 375,
    height: 42,
    position: "absolute",
  },
  confirmationCode: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 812,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default ConfirmationCode;
