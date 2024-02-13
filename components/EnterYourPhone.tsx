import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const EnterYourPhone = () => {
  return (
    <Text style={styles.enterYourPhone}>Thanks for joining Tokenizer!</Text>
  );
};

const styles = StyleSheet.create({
  enterYourPhone: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorWhite,
    textAlign: "center",
    textShadowColor: "rgba(255, 255, 255, 0.89)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 35,
  },
});

export default EnterYourPhone;
