import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import HEADERLogin from "../components/HEADERLogin";
import BUTTON1 from "../components/BUTTON1";
import INPUTfilled from "../components/INPUTfilled";
import INPUTfilled3 from "../components/INPUTfilled3";
import { Border } from "../GlobalStyles";

const PersonalInformation = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.personalInformation}
      locations={[0, 1]}
      colors={["#010411", "#004da6"]}
      useAngle={true}
      angle={180.02}
    >
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption1.png")}
      />
      <HEADERLogin
        enterYourPhone="Personal information"
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
        onBUTTONPress={() => navigation.navigate("Address")}
      />
      <INPUTfilled
        iCONeyeClosed={require("../assets/iconclose.png")}
        txt="07/13/1984"
        description="Date of birth"
        enterYourPhone="You must be 18 years or older to open a Tokenizer account"
        showICONeyeClosed={false}
        showTypeCursorIcon={false}
        description1
        tEXTWhite5011
        propTop={270}
        propLeft={16}
        propFontSize={12}
      />
      <INPUTfilled3
        iCONClose={require("../assets/iconclose.png")}
        txt="Jack"
        description="Legal first name"
        enterYourPhone="You must be 18 years or older to open a Tokenizer account"
        iCONClose1={false}
        tEXTWhite5011={false}
      />
      <INPUTfilled3
        iCONClose={require("../assets/iconclose.png")}
        txt="Smith"
        description="Legal last name"
        enterYourPhone="You must be 18 years or older to open a Tokenizer account"
        iCONClose1={false}
        tEXTWhite5011={false}
        propTop={478}
        propFontSize={12}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  personalInformation: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default PersonalInformation;
