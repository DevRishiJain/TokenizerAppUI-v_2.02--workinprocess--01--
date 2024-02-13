import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import HEADERLogin from "../components/HEADERLogin";
import BUTTON1 from "../components/BUTTON1";
import INPUTfilled from "../components/INPUTfilled";
import TEXTWhite50 from "../components/TEXTWhite50";
import WarningMsgblue from "../components/WarningMsgblue";
import { Border } from "../GlobalStyles";

const Address1 = () => {
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
        enterYourPhone="Social Security Number"
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
        onBUTTONPress={() => navigation.navigate("ProofOfID")}
      />
      <BUTTON1
        txt="I don’t have A SSN"
        bUTTONPosition="absolute"
        bUTTONMarginTop={277}
        bUTTONMarginLeft={-175.5}
        bUTTONTop="50%"
        bUTTONLeft="50%"
        bUTTONBackgroundColor="unset"
        bUTTONWidth={354}
        bUTTONPaddingHorizontal="unset"
        bUTTONPaddingVertical="unset"
        bUTTONHeight="unset"
        txtLetterSpacing={0.4}
        txtColor="#0a7cff"
      />
      <INPUTfilled
        iCONeyeClosed={require("../assets/iconeyeclosed.png")}
        txt="***-**-8816"
        description="Enter your SSN number"
        enterYourPhone="Start typing your address"
        showICONeyeClosed
        showTypeCursorIcon={false}
        description1
        tEXTWhite5011={false}
        propTop={518}
        propLeft={16}
        propOpacity={0.3}
        propFontSize={11}
      />
      <TEXTWhite50
        enterYourPhone={`To help the government fight the funding of terrorism and money laundering activities, Federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account.

What this means for you: When you open an account we will ask for your name, address, date of birth, and other information that will allow us to identify you. We may ask to see your driver’s license or other identifying information`}
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
      <WarningMsgblue
        warningMsgbluePosition="absolute"
        warningMsgblueTop={599}
        warningMsgblueLeft={16}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  address: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default Address1;
