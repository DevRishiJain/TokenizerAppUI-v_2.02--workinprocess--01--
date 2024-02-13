import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Border } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.ellipseParent}>
      <Image
        style={styles.groupChild}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChild: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_6xl,
    width: 64,
    height: 64,
  },
  ellipseParent: {
    shadowColor: "rgba(0, 0, 0, 0.45)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 35,
    elevation: 35,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 64,
  },
});

export default Group;
