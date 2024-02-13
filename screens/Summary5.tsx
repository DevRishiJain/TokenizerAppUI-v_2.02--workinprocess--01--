import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import BrandingBannerImage from "../components/BrandingBannerImage";
import ContainerWrapper from "../components/ContainerWrapper";
import HEADERLogin from "../components/HEADERLogin";
import BUTTON1 from "../components/BUTTON1";
import { Border } from "../GlobalStyles";

const Summary5 = () => {
  return (
    <View style={styles.summary}>
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption.png")}
      />
      <BrandingBannerImage
        brandingBannerImageBrandi={require("../assets/brandingbanner.png")}
        brandingBannerIconPosition="absolute"
        brandingBannerIconTop={237}
        brandingBannerIconLeft={33}
      />
      <ContainerWrapper />
      <HEADERLogin
        enterYourPhone="Thanks for joining Tokenizer!"
        hEADERLoginPosition="absolute"
        hEADERLoginTop={74}
        hEADERLoginLeft={0}
        enterYourPhoneFontWeight="700"
        enterYourPhoneFontFamily="Montserrat-Bold"
      />
      <BUTTON1
        txt="FINISH"
        bUTTONPosition="absolute"
        bUTTONMarginTop={317}
        bUTTONMarginLeft={-176.5}
        bUTTONTop="50%"
        bUTTONLeft="50%"
        bUTTONBackgroundColor="#10309a"
        bUTTONWidth={354}
        bUTTONPaddingHorizontal="unset"
        bUTTONPaddingVertical="unset"
        bUTTONHeight="unset"
        txtLetterSpacing={0.4}
        txtColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  summary: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Summary5;
