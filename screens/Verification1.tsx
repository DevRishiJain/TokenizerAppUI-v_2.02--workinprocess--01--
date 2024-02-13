import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import HEADERLogin from "../components/HEADERLogin";
import { Border } from "../GlobalStyles";

const Verification1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.verification}
      locations={[0, 1]}
      colors={["#010411", "#004da6"]}
      useAngle={true}
      angle={180.02}
    >
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Summary")}
      >
        <BACKGROUNDoptionIcon
          imageDimensions={require("../assets/backgroundoption1.png")}
        />
        <HEADERLogin
          enterYourPhone="Make a Selfie"
          hEADERLoginPosition="absolute"
          hEADERLoginTop={74}
          hEADERLoginLeft={0}
          enterYourPhoneLineHeight={30}
          enterYourPhoneFontWeight="600"
          enterYourPhoneFontFamily="Montserrat-SemiBold"
        />
        <Image
          style={styles.verificationChild}
          resizeMode="cover"
          source={require("../assets/rectangle-1801.png")}
        />
        <Image
          style={styles.subtractIcon}
          resizeMode="cover"
          source={require("../assets/subtract2.png")}
        />
        <Image
          style={styles.verificationItem}
          resizeMode="cover"
          source={require("../assets/ellipse-192.png")}
        />
        <Image
          style={styles.verificationInner}
          resizeMode="cover"
          source={require("../assets/ellipse-191.png")}
        />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-193.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  verificationChild: {
    top: 124,
    left: 3,
    height: 549,
    width: 375,
    position: "absolute",
  },
  subtractIcon: {
    height: 557,
    opacity: 0.75,
    width: 375,
  },
  verificationItem: {
    top: 161,
    left: 16,
    width: 348,
    height: 506,
    position: "absolute",
  },
  verificationInner: {
    top: 695,
    left: 136,
    width: 86,
    height: 86,
    position: "absolute",
  },
  ellipseIcon: {
    top: 699,
    left: 140,
    width: 78,
    height: 78,
    position: "absolute",
  },
  pressable: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: "100%",
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100%",
  },
  verification: {
    height: 812,
    width: "100%",
  },
});

export default Verification1;
