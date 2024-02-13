import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import HEADERLogin from "../components/HEADERLogin";
import BUTTON1 from "../components/BUTTON1";
import TEXTWhite50 from "../components/TEXTWhite50";
import { Border } from "../GlobalStyles";

const TermsOfConsent = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.termsOfConsent}
      locations={[0, 1]}
      colors={["#010411", "#004da6"]}
      useAngle={true}
      angle={180.02}
    >
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption1.png")}
      />
      <HEADERLogin
        enterYourPhone={`Terms & Consent`}
        hEADERLoginPosition="absolute"
        hEADERLoginTop={74}
        hEADERLoginLeft={0}
        enterYourPhoneLetterSpacing={0.2}
        enterYourPhoneLineHeight={26}
        enterYourPhoneFontWeight="700"
        enterYourPhoneFontFamily="Montserrat-Bold"
      />
      <BUTTON1
        txt="I DECLINE"
        bUTTONPosition="absolute"
        bUTTONMarginTop={337}
        bUTTONMarginLeft={-175.5}
        bUTTONTop="50%"
        bUTTONLeft="50%"
        bUTTONBackgroundColor="unset"
        bUTTONWidth={354}
        bUTTONPaddingHorizontal="unset"
        bUTTONPaddingVertical="unset"
        bUTTONHeight="unset"
        txtLetterSpacing={0.7}
        txtColor="#0a7cff"
      />
      <BUTTON1
        txt="I AGREE"
        bUTTONPosition="absolute"
        bUTTONMarginTop={277}
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
        onBUTTONPress={() => navigation.navigate("Verification")}
      />
      <TEXTWhite50
        showEnterYourPhone
        tEXTWhite5011Position="absolute"
        tEXTWhite5011Top={144}
        tEXTWhite5011Left={10}
        enterYourPhoneLetterSpacing={0.2}
        enterYourPhoneFontFamily="unset"
        enterYourPhoneColor="unset"
        enterYourPhoneFontSize={14}
        enterYourPhoneLineHeight={22}
        enterYourPhoneTextAlign="left"
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  termsOfConsent: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default TermsOfConsent;
