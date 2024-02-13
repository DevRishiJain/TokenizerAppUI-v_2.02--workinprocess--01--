import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import HEADERLogin from "../components/HEADERLogin";
import BUTTON1 from "../components/BUTTON1";
import TEXTWhite50 from "../components/TEXTWhite50";
import INPUTcomplex from "../components/INPUTcomplex";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const Summary = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.summary}>
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption1.png")}
      />
      <HEADERLogin
        enterYourPhone="Summary"
        hEADERLoginPosition="absolute"
        hEADERLoginTop={74}
        hEADERLoginLeft={0}
        enterYourPhoneLetterSpacing={0.2}
        enterYourPhoneLineHeight={26}
        enterYourPhoneFontWeight="700"
        enterYourPhoneFontFamily="Montserrat-Bold"
      />
      <BUTTON1
        txt="Continue"
        bUTTONPosition="absolute"
        bUTTONMarginTop={317}
        bUTTONMarginLeft={-175.5}
        bUTTONTop="50%"
        bUTTONLeft="50%"
        bUTTONBackgroundColor="#10309a"
        bUTTONWidth={354}
        bUTTONPaddingHorizontal="unset"
        bUTTONPaddingVertical="unset"
        bUTTONHeight="unset"
        txtLetterSpacing={0.4}
        txtColor="#fff"
        onBUTTONPress={() => navigation.navigate("Summary1")}
      />
      <TEXTWhite50
        enterYourPhone={`Please check your personal details,
edit if needed and proceed.`}
        showEnterYourPhone
        tEXTWhite5011Position="absolute"
        tEXTWhite5011Top={144}
        tEXTWhite5011Left={10}
        enterYourPhoneLetterSpacing={-0.3}
        enterYourPhoneFontFamily="Montserrat-Regular"
        enterYourPhoneColor="rgba(255, 255, 255, 0.5)"
        enterYourPhoneFontSize={14}
        enterYourPhoneLineHeight={25}
        enterYourPhoneTextAlign="left"
      />
      <INPUTcomplex
        personalInfo={`Jack Smith
13/07/1984`}
        personalDetails="PERSONAL"
        onINPUTcomplexPress={() => navigation.navigate("PersonalInformation")}
      />
      <Pressable
        style={styles.inputcomplex}
        onPress={() => navigation.navigate("EMail")}
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
          <Text style={[styles.txt, styles.txtTypo]}>
            +1 901-643-7271jacksmith@yahoo.com
          </Text>
        </View>
        <Text style={[styles.description, styles.descriptionTypo]}>
          Enter your password
        </Text>
        <Text style={[styles.description1, styles.descriptionTypo]}>
          CONTACTS
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
      <INPUTcomplex
        personalInfo={`351 Juan Ramos, Tamaulipas, 
Unit 63, Carrollton, AR, 75001`}
        personalDetails="ADDRESS"
        enterYourPhoneTop={388}
        onINPUTcomplexPress={() => navigation.navigate("Address")}
      />
      <INPUTcomplex
        personalInfo="SSN, ***-**-2880"
        personalDetails="IDENTITY"
        enterYourPhoneTop={480}
        onINPUTcomplexPress={() => navigation.navigate("Address1")}
      />
    </View>
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
    left: 0,
    overflow: "hidden",
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
    top: 296,
    left: 16,
    width: 343,
    height: 121,
    position: "absolute",
  },
  summary: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Summary;
