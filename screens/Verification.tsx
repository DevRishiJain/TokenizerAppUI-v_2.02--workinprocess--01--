import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import HEADERLogin from "../components/HEADERLogin";
import BUTTON1 from "../components/BUTTON1";
import TEXTWhite50 from "../components/TEXTWhite50";
import IsolationModeIcon from "../components/IsolationModeIcon";
import { Border } from "../GlobalStyles";

const Verification = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.verification}
      locations={[0, 1]}
      colors={["#010411", "#004da6"]}
      useAngle={true}
      angle={180.02}
    >
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption1.png")}
      />
      <HEADERLogin
        enterYourPhone="Let's get you verified"
        hEADERLoginPosition="absolute"
        hEADERLoginTop={74}
        hEADERLoginLeft={0}
        enterYourPhoneLineHeight={30}
        enterYourPhoneFontWeight="600"
        enterYourPhoneFontFamily="Montserrat-SemiBold"
      />
      <BUTTON1
        txt="DRIVER LICENSE / ID CARD"
        bUTTONPosition="absolute"
        bUTTONMarginTop={274}
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
        onBUTTONPress={() => navigation.navigate("Frame")}
      />
      <BUTTON1
        txt="PASSPORT"
        bUTTONPosition="absolute"
        bUTTONMarginTop={332}
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
        onBUTTONPress={() => navigation.navigate("Frame")}
      />
      <TEXTWhite50
        enterYourPhone={`Which Government Issued ID do
you want to use?`}
        showEnterYourPhone
        tEXTWhite5011Position="absolute"
        tEXTWhite5011Top={144}
        tEXTWhite5011Left={10}
        enterYourPhoneLetterSpacing={0.2}
        enterYourPhoneFontFamily="Montserrat-Regular"
        enterYourPhoneColor="rgba(255, 255, 255, 0.5)"
        enterYourPhoneFontSize={14}
        enterYourPhoneLineHeight={20}
        enterYourPhoneTextAlign="center"
      />
      <IsolationModeIcon />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  verification: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default Verification;
