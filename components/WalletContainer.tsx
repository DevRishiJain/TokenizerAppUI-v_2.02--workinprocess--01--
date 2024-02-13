import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import NAVb from "./NAVb";
import NAVb1 from "./NAVb1";
import NAVb2 from "./NAVb2";

const WalletContainer = () => {
  return (
    <View style={styles.navb01Parent}>
      <NAVb
        ellipse38={require("../assets/ellipse-361.png")}
        rectangle95={require("../assets/rectangle-95.png")}
        rectangleViewBorderColor="#fff"
      />
      <NAVb1
        ellipse38={require("../assets/ellipse-38.png")}
        nAVb02Height={66}
        nAVb02MarginLeft={44}
      />
      <NAVb2
        union={require("../assets/union2.png")}
        ellipse38={require("../assets/ellipse-38.png")}
        nAVb03Height={66}
        nAVb03MarginLeft={44}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navb01Parent: {
    position: "absolute",
    top: 15,
    left: 56,
    flexDirection: "row",
  },
});

export default WalletContainer;
