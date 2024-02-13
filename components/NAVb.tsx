import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type NAVbType = {
  ellipse38?: ImageSourcePropType;
  rectangle95?: ImageSourcePropType;

  /** Style props */
  rectangleViewBorderColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NAVb = ({
  ellipse38,
  rectangle95,
  rectangleViewBorderColor,
}: NAVbType) => {
  const rectangleView2Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", rectangleViewBorderColor),
    };
  }, [rectangleViewBorderColor]);

  return (
    <View style={styles.navb01}>
      <Image
        style={[styles.navb01Child, styles.groupItemLayout]}
        resizeMode="cover"
        source={ellipse38}
      />
      <View style={[styles.navb01Item, styles.itemPosition]} />
      <Text style={styles.apps}>Apps</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, rectangleView2Style]} />
        <Image
          style={[styles.groupItem, styles.itemPosition]}
          resizeMode="cover"
          source={rectangle95}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  itemPosition: {
    left: "0%",
    position: "absolute",
  },
  navb01Child: {
    height: "196.97%",
    width: "216.67%",
    top: "-40.91%",
    right: "-63.33%",
    bottom: "-56.06%",
    left: "-53.33%",
    position: "absolute",
  },
  navb01Item: {
    height: "90.91%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "9.09%",
  },
  apps: {
    top: "77.27%",
    left: "23.33%",
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    height: "84.92%",
    width: "76.37%",
    top: "-8.38%",
    right: "-7.69%",
    bottom: "23.46%",
    left: "31.32%",
    borderStyle: "solid",
    borderColor: Color.colorCornflowerblue,
    borderWidth: 3,
    position: "absolute",
  },
  groupItem: {
    height: "68.16%",
    width: "59.89%",
    top: "32.4%",
    right: "40.11%",
    bottom: "-0.56%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  rectangleParent: {
    height: "27.12%",
    width: "30.33%",
    top: "33.33%",
    right: "34.67%",
    bottom: "39.55%",
    left: "35%",
    position: "absolute",
  },
  navb01: {
    width: 60,
    height: 66,
  },
});

export default NAVb;
