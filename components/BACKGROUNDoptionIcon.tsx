import * as React from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";

export type BACKGROUNDoptionIconType = {
  imageDimensions?: ImageSourcePropType;
};

const BACKGROUNDoptionIcon = ({
  imageDimensions,
}: BACKGROUNDoptionIconType) => {
  return (
    <Image
      style={styles.backgroundoptionIcon}
      resizeMode="cover"
      source={imageDimensions}
    />
  );
};

const styles = StyleSheet.create({
  backgroundoptionIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 812,
    overflow: "hidden",
  },
});

export default BACKGROUNDoptionIcon;
