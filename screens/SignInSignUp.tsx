import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import TEXTWhite from "../components/TEXTWhite";
import EllipseIcon from "../components/EllipseIcon";
import BUTTON1 from "../components/BUTTON1";
import { Border } from "../GlobalStyles";

const SignInSignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.signInsignUp}
      locations={[0, 1]}
      colors={["#010411", "#004da6"]}
      useAngle={true}
      angle={180.02}
    >
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption.png")}
      />
      <View style={styles.tokenizerLogo}>
        <Image
          style={styles.tokenizerIcon}
          resizeMode="cover"
          source={require("../assets/tokenizer.png")}
        />
        <Image
          style={[styles.tokenizerIcon1, styles.tokenizerIconLayout]}
          resizeMode="cover"
          source={require("../assets/tokenizer1.png")}
        />
        <Image
          style={[styles.tokenizerIcon2, styles.tokenizerIconLayout]}
          resizeMode="cover"
          source={require("../assets/tokenizer2.png")}
        />
        <TEXTWhite
          tEXTWhite14Position="absolute"
          tEXTWhite14Top={128}
          tEXTWhite14Left={0}
          enterYourPhoneFontWeight="unset"
          enterYourPhoneFontFamily="unset"
        />
      </View>
      <EllipseIcon />
      <BUTTON1
        txt="Create account"
        bUTTONPosition="absolute"
        bUTTONMarginTop={104}
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
        onBUTTONPress={() => navigation.navigate("PhoneNumber")}
      />
      <BUTTON1
        txt="I already have an account"
        bUTTONPosition="absolute"
        bUTTONMarginTop={164}
        bUTTONMarginLeft={-175.5}
        bUTTONTop="50%"
        bUTTONLeft="50%"
        bUTTONBackgroundColor="unset"
        bUTTONWidth={354}
        bUTTONPaddingHorizontal="unset"
        bUTTONPaddingVertical="unset"
        bUTTONHeight="unset"
        txtLetterSpacing={0.7}
        txtColor="#fff"
        onBUTTONPress={() => navigation.navigate("SignIn")}
      />
      <Image
        style={styles.paginationIcon}
        resizeMode="cover"
        source={require("../assets/pagination.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  tokenizerIconLayout: {
    height: 40,
    width: 42,
    position: "absolute",
  },
  tokenizerIcon: {
    top: 13,
    left: 132,
    width: 168,
    height: 18,
    position: "absolute",
  },
  tokenizerIcon1: {
    top: 1,
    left: 75,
  },
  tokenizerIcon2: {
    top: 0,
    left: 76,
  },
  tokenizerLogo: {
    top: 221,
    left: -9,
    width: 375,
    height: 226,
    position: "absolute",
  },
  paginationIcon: {
    top: 460,
    left: 168,
    width: 39,
    height: 7,
    position: "absolute",
  },
  signInsignUp: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default SignInSignUp;
