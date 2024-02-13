import React, { useMemo } from "react";
import { StyleSheet, View, Image, ImageSourcePropType } from "react-native";

export type DSHBRDButtonCardType = {
  frame?: ImageSourcePropType;

  /** Style props */
  dSHBRDButtonCardPosition?: string;
  dSHBRDButtonCardWidth?: number | string;
  dSHBRDButtonCardHeight?: number | string;
  dSHBRDButtonCardTop?: number | string;
  dSHBRDButtonCardRight?: number | string;
  dSHBRDButtonCardBottom?: number | string;
  dSHBRDButtonCardLeft?: number | string;
  groupViewHeight?: number | string;
  groupViewWidth?: number | string;
  groupViewTop?: number | string;
  groupViewRight?: number | string;
  groupViewBottom?: number | string;
  groupViewLeft?: number | string;
  rectangleViewWidth?: number | string;
  rectangleViewRight?: number | string;
  rectangleViewLeft?: number | string;
  frameIconWidth?: number | string;
  frameIconRight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DSHBRDButtonCard = ({
  frame,
  dSHBRDButtonCardPosition,
  dSHBRDButtonCardWidth,
  dSHBRDButtonCardHeight,
  dSHBRDButtonCardTop,
  dSHBRDButtonCardRight,
  dSHBRDButtonCardBottom,
  dSHBRDButtonCardLeft,
  groupViewHeight,
  groupViewWidth,
  groupViewTop,
  groupViewRight,
  groupViewBottom,
  groupViewLeft,
  rectangleViewWidth,
  rectangleViewRight,
  rectangleViewLeft,
  frameIconWidth,
  frameIconRight,
}: DSHBRDButtonCardType) => {
  const dSHBRDButtonCardStyle = useMemo(() => {
    return {
      ...getStyleValue("position", dSHBRDButtonCardPosition),
      ...getStyleValue("width", dSHBRDButtonCardWidth),
      ...getStyleValue("height", dSHBRDButtonCardHeight),
      ...getStyleValue("top", dSHBRDButtonCardTop),
      ...getStyleValue("right", dSHBRDButtonCardRight),
      ...getStyleValue("bottom", dSHBRDButtonCardBottom),
      ...getStyleValue("left", dSHBRDButtonCardLeft),
    };
  }, [
    dSHBRDButtonCardPosition,
    dSHBRDButtonCardWidth,
    dSHBRDButtonCardHeight,
    dSHBRDButtonCardTop,
    dSHBRDButtonCardRight,
    dSHBRDButtonCardBottom,
    dSHBRDButtonCardLeft,
  ]);

  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("height", groupViewHeight),
      ...getStyleValue("width", groupViewWidth),
      ...getStyleValue("top", groupViewTop),
      ...getStyleValue("right", groupViewRight),
      ...getStyleValue("bottom", groupViewBottom),
      ...getStyleValue("left", groupViewLeft),
    };
  }, [
    groupViewHeight,
    groupViewWidth,
    groupViewTop,
    groupViewRight,
    groupViewBottom,
    groupViewLeft,
  ]);

  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("width", rectangleViewWidth),
      ...getStyleValue("right", rectangleViewRight),
      ...getStyleValue("left", rectangleViewLeft),
    };
  }, [rectangleViewWidth, rectangleViewRight, rectangleViewLeft]);

  const frameIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", frameIconWidth),
      ...getStyleValue("right", frameIconRight),
    };
  }, [frameIconWidth, frameIconRight]);

  return (
    <View style={[styles.dshbrdButtoncard, dSHBRDButtonCardStyle]}>
      <View style={[styles.dshbrdButtoncardChild, styles.frameIconPosition]} />
      <View style={[styles.rectangleParent, groupViewStyle]}>
        <View style={[styles.groupChild, rectangleView1Style]} />
        <Image
          style={[styles.frameIcon, styles.frameIconPosition, frameIconStyle]}
          resizeMode="cover"
          source={frame}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  dshbrdButtoncardChild: {
    width: "100%",
    right: "0%",
    left: "0%",
  },
  groupChild: {
    width: "96.63%",
    left: "3.37%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
  },
  frameIcon: {
    width: "98.88%",
    right: "1.12%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleParent: {
    height: "91.33%",
    width: "94.51%",
    top: "4.42%",
    right: "0.35%",
    bottom: "4.25%",
    left: "5.13%",
    position: "absolute",
  },
  dshbrdButtoncard: {
    width: 57,
    height: 57,
  },
});

export default DSHBRDButtonCard;
