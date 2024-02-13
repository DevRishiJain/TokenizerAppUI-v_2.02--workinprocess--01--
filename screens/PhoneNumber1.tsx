import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import TEXTWhite501 from "../components/TEXTWhite501";
import HEADERLogin from "../components/HEADERLogin";
import FORMText from "../components/FORMText";
import INPUThalfSize1 from "../components/INPUThalfSize1";
import BUTTON1 from "../components/BUTTON1";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const PhoneNumber1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.phoneNumber}
      locations={[0, 1]}
      colors={["#010411", "#004da6"]}
      useAngle={true}
      angle={180.02}
    >
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption1.png")}
      />
      <TEXTWhite501
        tEXTWhite5016Position="absolute"
        tEXTWhite5016Top={129}
        tEXTWhite5016Left={-2}
      />
      <HEADERLogin
        enterYourPhone="What's your phone number?"
        hEADERLoginPosition="absolute"
        hEADERLoginTop={74}
        hEADERLoginLeft={0}
        enterYourPhoneLetterSpacing={0.2}
        enterYourPhoneLineHeight={24}
        enterYourPhoneFontWeight="600"
        enterYourPhoneFontFamily="Montserrat-SemiBold"
      />
      <FORMText
        fORMTextPosition="absolute"
        fORMTextBorderColor="#0a7cff"
        fORMTextTop={333}
        fORMTextLeft={136}
        fORMTextWidth={225}
      />
      <INPUThalfSize1 />
      <BUTTON1
        txt="CONTINUE"
        bUTTONPosition="absolute"
        bUTTONMarginTop={125}
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
        onBUTTONPress={() => navigation.navigate("ConfirmationCode")}
      />
      <View style={styles.keyboard}>
        <Image
          style={styles.backgroundIcon}
          resizeMode="cover"
          source={require("../assets/background.png")}
        />
        <Image
          style={styles.deleteButtonIcon}
          resizeMode="cover"
          source={require("../assets/delete-button.png")}
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
          <Text style={[styles.wxyz, styles.pgrsFlexBox]}>WXYZ</Text>
          <Text style={[styles.text1, styles.textTypo1]}>9</Text>
        </View>
        <View style={[styles.view2, styles.viewPosition4]}>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key1.png")}
          />
          <Text style={[styles.tuv, styles.pgrsFlexBox]}>TUV</Text>
          <Text style={[styles.text1, styles.textTypo1]}>8</Text>
        </View>
        <View style={[styles.view3, styles.viewPosition2]}>
          <Image
            style={[styles.keyIcon3, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key1.png")}
          />
          <Text style={[styles.pgrs, styles.pgrsFlexBox]}>PGRS</Text>
          <Text style={[styles.pgrs1, styles.pgrsFlexBox]}>•</Text>
          <Text style={[styles.text3, styles.textTypo2]}>7</Text>
        </View>
        <View style={[styles.view4, styles.viewPosition1]}>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key1.png")}
          />
          <Text style={[styles.mno, styles.pgrsFlexBox]}>MNO</Text>
          <Text style={[styles.text1, styles.textTypo1]}>6</Text>
        </View>
        <View style={[styles.view5, styles.viewPosition1]}>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key1.png")}
          />
          <Text style={[styles.jkl, styles.pgrsFlexBox]}>JKL</Text>
          <Text style={[styles.text1, styles.textTypo1]}>5</Text>
        </View>
        <View style={[styles.view6, styles.viewPosition1]}>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key1.png")}
          />
          <Text style={[styles.ghi, styles.pgrsFlexBox]}>GHI</Text>
          <Text style={[styles.text6, styles.textTypo1]}>4</Text>
        </View>
        <View style={[styles.view7, styles.viewPosition]}>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key.png")}
          />
          <Text style={[styles.def, styles.pgrsFlexBox]}>DEF</Text>
          <Text style={[styles.text7, styles.textTypo]}>3</Text>
        </View>
        <View style={[styles.view8, styles.viewPosition]}>
          <Image
            style={[styles.keyIcon, styles.keyIconLayout]}
            resizeMode="cover"
            source={require("../assets/key.png")}
          />
          <Text style={[styles.def, styles.pgrsFlexBox]}>ABC</Text>
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
    color: Color.colorBlack,
    lineHeight: 30,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.montserratRegular,
    left: "43.59%",
    position: "absolute",
  },
  viewPosition3: {
    left: "67.2%",
    right: "1.6%",
  },
  pgrsFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  textTypo1: {
    top: "2.13%",
    textAlign: "left",
    color: Color.colorBlack,
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
    color: Color.colorBlack,
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
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    letterSpacing: 2,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
    top: "59.57%",
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
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    letterSpacing: 2,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
    top: "59.57%",
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
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    letterSpacing: 2,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
  },
  pgrs1: {
    top: "85.37%",
    left: "46.15%",
    fontSize: FontSize.size_sm,
    lineHeight: 12,
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.montserratRegular,
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
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    letterSpacing: 2,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
    top: "59.57%",
  },
  view4: {
    left: "67.2%",
    right: "1.6%",
  },
  jkl: {
    left: "40.17%",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    letterSpacing: 2,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
    top: "59.57%",
  },
  view5: {
    left: "34.4%",
    right: "34.4%",
  },
  ghi: {
    left: "38.46%",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    letterSpacing: 2,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
    top: "59.57%",
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
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    letterSpacing: 2,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
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
    right: "-0.27%",
    bottom: -6,
    left: "0.27%",
    height: 216,
    position: "absolute",
    width: "100%",
  },
  phoneNumber: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 812,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default PhoneNumber1;
