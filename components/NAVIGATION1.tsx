import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import NAVb from "./NAVb";
import NAVb1 from "./NAVb1";
import NAVb2 from "./NAVb2";
import { Color } from "../GlobalStyles";

export type NAVIGATION1Type = {
  ellipse36?: ImageSourcePropType;
  ellipse37?: ImageSourcePropType;
  ellipse38?: ImageSourcePropType;
  rectangle95?: ImageSourcePropType;

  /** Style props */
  nAVIGATIONPosition?: string;
  nAVIGATIONTop?: number | string;
  nAVIGATIONLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NAVIGATION1 = ({
  ellipse36,
  ellipse37,
  ellipse38,
  rectangle95,
  nAVIGATIONPosition,
  nAVIGATIONTop,
  nAVIGATIONLeft,
}: NAVIGATION1Type) => {
  const nAVIGATIONStyle = useMemo(() => {
    return {
      ...getStyleValue("position", nAVIGATIONPosition),
      ...getStyleValue("top", nAVIGATIONTop),
      ...getStyleValue("left", nAVIGATIONLeft),
    };
  }, [nAVIGATIONPosition, nAVIGATIONTop, nAVIGATIONLeft]);

  return (
    <View style={[styles.navigation, nAVIGATIONStyle]}>
      <View style={styles.navigationChild} />
      <Image
        style={[styles.navigationItem, styles.navigationLayout]}
        resizeMode="cover"
        source={ellipse36}
      />
      <Image
        style={[styles.navigationInner, styles.navigationLayout]}
        resizeMode="cover"
        source={ellipse37}
      />
      <View style={styles.navb01Parent}>
        <NAVb
          ellipse38={require("../assets/ellipse-362.png")}
          rectangle95={require("../assets/rectangle-951.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  navigationLayout: {
    display: "none",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "-19.54%",
    top: "-29.89%",
    width: "33.16%",
    height: "149.43%",
    position: "absolute",
  },
  navigationChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderTopWidth: 1,
    position: "absolute",
  },
  navigationItem: {
    right: "62.5%",
    left: "4.34%",
  },
  navigationInner: {
    right: "33.67%",
    left: "33.16%",
  },
  navb01Parent: {
    top: 15,
    left: 56,
    flexDirection: "row",
    position: "absolute",
  },
  navigation: {
    width: 392,
    height: 87,
  },
});

export default NAVIGATION1;
