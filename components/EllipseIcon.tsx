import * as React from "react";
import { Image, StyleSheet } from "react-native";

const EllipseIcon = () => {
  return (
    <Image
      style={styles.signInsignUpChild}
      resizeMode="cover"
      source={require("../assets/ellipse-36.png")}
    />
  );
};

const styles = StyleSheet.create({
  signInsignUpChild: {
    position: "absolute",
    top: 155,
    left: -6,
    width: 386,
    height: 168,
  },
});

export default EllipseIcon;
