import React, { useMemo } from "react";
import { Image, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Padding } from "../GlobalStyles";

export type NavSecondaryType = {
  icon32pxlightuser?: ImageSourcePropType;

  /** Style props */
  navSecondaryPosition?: string;
  navSecondaryTop?: number | string;
  navSecondaryLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavSecondary = ({
  icon32pxlightuser,
  navSecondaryPosition,
  navSecondaryTop,
  navSecondaryLeft,
}: NavSecondaryType) => {
  const navSecondaryStyle = useMemo(() => {
    return {
      ...getStyleValue("position", navSecondaryPosition),
      ...getStyleValue("top", navSecondaryTop),
      ...getStyleValue("left", navSecondaryLeft),
    };
  }, [navSecondaryPosition, navSecondaryTop, navSecondaryLeft]);

  return (
    <View style={[styles.navSecondary, navSecondaryStyle]}>
      <Image
        style={styles.icon32pxlightuserLayout}
        resizeMode="cover"
        source={icon32pxlightuser}
      />
      <Image
        style={[styles.icon32pxlightbell, styles.icon32pxlightuserLayout]}
        resizeMode="cover"
        source={require("../assets/icon-32pxlightbell.png")}
      />
      <Image
        style={[styles.icon32pxlightbell, styles.icon32pxlightuserLayout]}
        resizeMode="cover"
        source={require("../assets/icon-32pxlighthelp.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon32pxlightuserLayout: {
    height: 32,
    width: 32,
  },
  icon32pxlightbell: {
    marginLeft: 10,
  },
  navSecondary: {
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
});

export default NavSecondary;
