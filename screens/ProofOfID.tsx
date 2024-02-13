import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import HEADERLogin from "../components/HEADERLogin";
import BUTTON1 from "../components/BUTTON1";
import TEXTWhite50 from "../components/TEXTWhite50";
import PhotoInstructions from "../components/PhotoInstructions";
import PhotoInstruction from "../components/PhotoInstruction";
import { Border } from "../GlobalStyles";

const ProofOfID = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.proofOfId}
      locations={[0, 1]}
      colors={["#010411", "#004da6"]}
      useAngle={true}
      angle={180.02}
    >
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption1.png")}
      />
      <HEADERLogin
        enterYourPhone="Proof of identity "
        hEADERLoginPosition="absolute"
        hEADERLoginTop={74}
        hEADERLoginLeft={0}
        enterYourPhoneLetterSpacing={0.2}
        enterYourPhoneLineHeight={24}
        enterYourPhoneFontWeight="600"
        enterYourPhoneFontFamily="Montserrat-SemiBold"
      />
      <BUTTON1
        txt="SCAN"
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
        onBUTTONPress={() => navigation.navigate("TermsOfConsent")}
      />
      <TEXTWhite50
        enterYourPhone="Time to scan your government issued ID and take a selfie, which helps to secure your account and payments."
        showEnterYourPhone
        tEXTWhite5011Position="absolute"
        tEXTWhite5011Top={144}
        tEXTWhite5011Left={10}
        enterYourPhoneLetterSpacing={-0.3}
        enterYourPhoneFontFamily="Montserrat-Regular"
        enterYourPhoneColor="rgba(255, 255, 255, 0.5)"
        enterYourPhoneFontSize={14}
        enterYourPhoneLineHeight={20}
        enterYourPhoneTextAlign="left"
      />
      <TEXTWhite50
        showEnterYourPhone
        tEXTWhite5011Position="absolute"
        tEXTWhite5011Top={237}
        tEXTWhite5011Left={10}
        enterYourPhoneFontFamily="unset"
        enterYourPhoneColor="rgba(255, 255, 255, 0.5)"
        enterYourPhoneFontSize={14}
        enterYourPhoneLineHeight={20}
        enterYourPhoneTextAlign="left"
      />
      <TEXTWhite50
        showEnterYourPhone
        tEXTWhite5011Position="absolute"
        tEXTWhite5011Top={458}
        tEXTWhite5011Left={10}
        enterYourPhoneLetterSpacing={-0.3}
        enterYourPhoneFontFamily="unset"
        enterYourPhoneColor="rgba(255, 255, 255, 0.5)"
        enterYourPhoneFontSize={14}
        enterYourPhoneLineHeight={20}
        enterYourPhoneTextAlign="left"
      />
      <PhotoInstructions
        group3751={require("../assets/group-3751.png")}
        photoInstructionsPosition="absolute"
        photoInstructionsTop={528}
        photoInstructionsLeft={14}
        photoInstructionsWidth={344}
      />
      <PhotoInstruction
        union={require("../assets/union.png")}
        photoInstructionPosition="absolute"
        photoInstructionTop={365}
        photoInstructionLeft={18}
        rectangleViewBorderColor="rgba(255, 255, 255, 0.5)"
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  proofOfId: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default ProofOfID;
