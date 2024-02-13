import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import HEADERLogin from "../components/HEADERLogin";
import BUTTON1 from "../components/BUTTON1";
import INPUTfilled2 from "../components/INPUTfilled2";
import TEXTWhite50 from "../components/TEXTWhite50";
import INPUTfilled from "../components/INPUTfilled";
import { Border } from "../GlobalStyles";

const EMail = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.eMail}
      locations={[0, 1]}
      colors={["#010411", "#004da6"]}
      useAngle={true}
      angle={180.02}
    >
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption1.png")}
      />
      <HEADERLogin
        enterYourPhone="E-mail"
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
        onBUTTONPress={() => navigation.navigate("PersonalInformation")}
      />
      <INPUTfilled2 />
      <TEXTWhite50
        showEnterYourPhone
        tEXTWhite5011Position="absolute"
        tEXTWhite5011Top={454}
        tEXTWhite5011Left={10}
        enterYourPhoneFontFamily="unset"
        enterYourPhoneColor="unset"
        enterYourPhoneFontSize={11}
        enterYourPhoneLineHeight={14}
        enterYourPhoneTextAlign="left"
      />
      <INPUTfilled
        iCONeyeClosed={require("../assets/iconeyeclosed.png")}
        txt="•••••••••••••••"
        description="Email address"
        enterYourPhone="You must be 18 years or older to open a Tokenizer account"
        showICONeyeClosed
        showTypeCursorIcon
        description1={false}
        tEXTWhite5011={false}
        propTop={328}
        propLeft={15}
        propOpacity={0.3}
        propFontSize={12}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  eMail: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default EMail;
