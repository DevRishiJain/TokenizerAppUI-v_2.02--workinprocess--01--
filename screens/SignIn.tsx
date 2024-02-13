import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import BUTTON1 from "../components/BUTTON1";
import FORMText from "../components/FORMText";
import INPUThalfSize from "../components/INPUThalfSize";
import INPUTfilled from "../components/INPUTfilled";
import TEXTBlue from "../components/TEXTBlue";
import { Border } from "../GlobalStyles";

const SignIn = () => {
  return (
    <LinearGradient
      style={styles.signIn}
      locations={[0, 1]}
      colors={["#010411", "#004da6"]}
      useAngle={true}
      angle={180.02}
    >
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption.png")}
      />
      <Image
        style={styles.tokenizerLogoIcon}
        resizeMode="cover"
        source={require("../assets/tokenizer-logo1.png")}
      />
      <Image
        style={styles.signInChild}
        resizeMode="cover"
        source={require("../assets/ellipse-36.png")}
      />
      <BUTTON1
        txt="LOg IN"
        bUTTONPosition="absolute"
        bUTTONMarginTop={327}
        bUTTONMarginLeft={-114.5}
        bUTTONTop="50%"
        bUTTONLeft="50%"
        bUTTONBackgroundColor="#10309a"
        bUTTONWidth={286}
        bUTTONPaddingHorizontal="unset"
        bUTTONPaddingVertical="unset"
        bUTTONHeight="unset"
        txtLetterSpacing={0.7}
        txtColor="#fff"
      />
      <Image
        style={styles.iconFaceId}
        resizeMode="cover"
        source={require("../assets/icon--face-id.png")}
      />
      <FORMText
        fORMTextPosition="absolute"
        fORMTextBorderColor="#0a7cff"
        fORMTextTop={353}
        fORMTextLeft={136}
        fORMTextWidth={225}
      />
      <INPUThalfSize />
      <INPUTfilled
        iCONeyeClosed={require("../assets/iconeyeclosed.png")}
        txt="•••••••••••••••"
        description="Email address"
        enterYourPhone="You must be 18 years or older to open a Tokenizer account"
        showICONeyeClosed
        showTypeCursorIcon
        description1={false}
        tEXTWhite5011={false}
      />
      <TEXTBlue
        enterYourPhone="Forgot Password"
        tEXTBlue14Position="absolute"
        tEXTBlue14Top={553}
        tEXTBlue14Left={0}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  tokenizerLogoIcon: {
    top: 159,
    left: 66,
    width: 225,
    height: 41,
    position: "absolute",
  },
  signInChild: {
    top: 93,
    left: -6,
    width: 386,
    height: 168,
    position: "absolute",
  },
  iconFaceId: {
    marginLeft: -164.5,
    top: 741,
    left: "50%",
    width: 33,
    height: 33,
    position: "absolute",
  },
  signIn: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default SignIn;
