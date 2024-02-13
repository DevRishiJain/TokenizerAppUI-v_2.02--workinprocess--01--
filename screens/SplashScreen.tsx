import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import { Border } from "../GlobalStyles";

const SplashScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.splashScreen}
      locations={[0, 1]}
      colors={["#010411", "#004da6"]}
      useAngle={true}
      angle={180.02}
    >
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("SignInSignUp")}
      >
        <BACKGROUNDoptionIcon
          imageDimensions={require("../assets/backgroundoption.png")}
        />
        <Image
          style={styles.tokenizerLogoIcon}
          resizeMode="cover"
          source={require("../assets/tokenizer-logo.png")}
        />
        <Image
          style={styles.splashScreenChild}
          resizeMode="cover"
          source={require("../assets/ellipse-36.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  tokenizerLogoIcon: {
    top: 371,
    left: 66,
    width: 225,
    height: 41,
    position: "absolute",
  },
  splashScreenChild: {
    top: 305,
    left: -6,
    width: 386,
    height: 168,
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
  splashScreen: {
    height: 812,
    width: "100%",
  },
});

export default SplashScreen;
