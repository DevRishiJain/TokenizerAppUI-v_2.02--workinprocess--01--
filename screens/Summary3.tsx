import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import HEADERLogin from "../components/HEADERLogin";
import BUTTON1 from "../components/BUTTON1";
import TEXTWhite50 from "../components/TEXTWhite50";
import INPUTcomplex4 from "../components/INPUTcomplex4";
import INPUTcomplex3 from "../components/INPUTcomplex3";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const Summary3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.summary}>
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption1.png")}
      />
      <HEADERLogin
        enterYourPhone="Agreement"
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
        onBUTTONPress={() => navigation.navigate("Summary4")}
      />
      <TEXTWhite50
        enterYourPhone="By checking the circles below, I consent that:"
        showEnterYourPhone
        tEXTWhite5011Position="absolute"
        tEXTWhite5011Top={144}
        tEXTWhite5011Left={10}
        enterYourPhoneLetterSpacing={-0.3}
        enterYourPhoneFontFamily="Montserrat-Regular"
        enterYourPhoneColor="rgba(255, 255, 255, 0.5)"
        enterYourPhoneFontSize={14}
        enterYourPhoneLineHeight={22}
        enterYourPhoneTextAlign="left"
      />
      <TEXTWhite50
        enterYourPhone={`Tokenizer is not a bank. Banking Services are provided by Mbanq banking partner, Evolve Bank & Trust, Member FDIC. 
The Tokenizer Account and Tokenizer Visa® Card are provided by Evolve Bank & Trust, Member FDIC.`}
        showEnterYourPhone
        tEXTWhite5011Position="absolute"
        tEXTWhite5011Top={644}
        tEXTWhite5011Left={10}
        enterYourPhoneFontFamily="Montserrat-Regular"
        enterYourPhoneColor="rgba(255, 255, 255, 0.5)"
        enterYourPhoneFontSize={11}
        enterYourPhoneLineHeight={14}
        enterYourPhoneTextAlign="left"
      />
      <INPUTcomplex4
        consentText="I have read and agree to the "
        legalText={`Electronic 
Communication Consent`}
        agreementText="."
      />
      <View style={styles.inputcomplex}>
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
          <Text style={[styles.txt, styles.txtTypo]}>I agree to all</Text>
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
          style={styles.iconbluetick}
          resizeMode="cover"
          source={require("../assets/iconbluetick.png")}
        />
      </View>
      <INPUTcomplex3 />
      <INPUTcomplex4
        consentText={`By applying for a Tokenizer Account and 
providing your contact details, you are 
agreeing to the `}
        legalText="Privacy Policy"
        agreementText={` which outlines 
how Tokenizer can use your information, 
including for marketing purposes.`}
        tEXTWhite5011Top={374}
      />
    </View>
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
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iconarrowleft: {
    bottom: 49,
    width: 44,
    height: 44,
    display: "none",
  },
  txt: {
    fontSize: FontSize.size_sm,
    letterSpacing: -0.3,
    lineHeight: 20,
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
  iconbluetick: {
    top: 43,
    left: 4,
    width: 16,
    height: 16,
    position: "absolute",
  },
  inputcomplex: {
    top: 508,
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

export default Summary3;
