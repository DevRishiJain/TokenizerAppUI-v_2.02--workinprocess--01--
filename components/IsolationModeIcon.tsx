import * as React from "react";
import { Image, StyleSheet } from "react-native";

const IsolationModeIcon = () => {
  return (
    <Image
      style={styles.isolationModeIcon}
      resizeMode="cover"
      source={require("../assets/isolation-mode.png")}
    />
  );
};

const styles = StyleSheet.create({
  isolationModeIcon: {
    position: "absolute",
    top: 305,
    left: 123,
    width: 160,
    height: 139,
    overflow: "hidden",
  },
});

export default IsolationModeIcon;
