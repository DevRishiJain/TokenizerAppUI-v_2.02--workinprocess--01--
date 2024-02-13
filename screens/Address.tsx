import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import HEADERLogin from "../components/HEADERLogin";
import BUTTON1 from "../components/BUTTON1";
import INPUTfilled3 from "../components/INPUTfilled3";
import TEXTWhite50 from "../components/TEXTWhite50";
import INPUThalfSize2 from "../components/INPUThalfSize2";
import WarningMsgwhite from "../components/WarningMsgwhite";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Address = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.address}
      locations={[0, 1]}
      colors={["#010411", "#004da6"]}
      useAngle={true}
      angle={180.02}
    >
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption1.png")}
      />
      <HEADERLogin
        enterYourPhone="Address"
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
        bUTTONMarginTop={337}
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
        onBUTTONPress={() => navigation.navigate("Address1")}
      />
      <INPUTfilled3
        iCONClose={require("../assets/iconpin.png")}
        txt="599 Lexington Avenue"
        description="Street/House/Apartment"
        enterYourPhone="Start typing your address"
        iCONClose1
        tEXTWhite5011
        propTop={329}
        propFontSize={11}
      />
      <TEXTWhite50
        enterYourPhone="Please provide your residential home address"
        showEnterYourPhone
        tEXTWhite5011Position="absolute"
        tEXTWhite5011Top={144}
        tEXTWhite5011Left={10}
        enterYourPhoneLetterSpacing={-0.3}
        enterYourPhoneFontFamily="Montserrat-Regular"
        enterYourPhoneColor="rgba(255, 255, 255, 0.5)"
        enterYourPhoneFontSize={14}
        enterYourPhoneLineHeight={25}
        enterYourPhoneTextAlign="center"
      />
      <INPUThalfSize2
        txt="Unit (optional)"
        txt1="USA"
        iCONArrowDown={false}
        txt2={false}
      />
      <INPUThalfSize2
        txt="City"
        txt1="New York"
        iCONArrowDown={false}
        txt2
        propTop="54.93%"
        propBottom="36.21%"
        propRight="4.27%"
        propLeft="52.27%"
      />
      <INPUThalfSize2
        txt="State"
        txt1="NY"
        iCONArrowDown
        txt2
        propTop="64.66%"
        propBottom="26.48%"
        propRight="51.47%"
        propLeft="5.07%"
      />
      <View style={styles.inputhalfsize}>
        <Image
          style={[styles.dividerIcon, styles.dividerIconPosition]}
          resizeMode="cover"
          source={require("../assets/divider3.png")}
        />
        <Image
          style={[styles.iconarrowdown, styles.dividerIconPosition]}
          resizeMode="cover"
          source={require("../assets/iconarrowdown.png")}
        />
        <Text style={[styles.txt, styles.txtTypo]}>Zip Code</Text>
        <Text style={[styles.txt1, styles.txtTypo]}>10022</Text>
      </View>
      <WarningMsgwhite
        warningMsgwhitePosition="absolute"
        warningMsgwhiteTop={274}
        warningMsgwhiteLeft={14}
        warningMsgwhiteHeight={44}
      />
    </LinearGradient>
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
    height: 1,
    left: 0,
    overflow: "hidden",
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
  },
  inputhalfsize: {
    height: "8.87%",
    width: "43.47%",
    top: "64.66%",
    right: "4.27%",
    bottom: "26.48%",
    left: "52.27%",
    position: "absolute",
  },
  address: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Address;
