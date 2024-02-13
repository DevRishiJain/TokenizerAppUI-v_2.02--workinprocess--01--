import React, { useMemo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";
import { Border } from "../GlobalStyles";

export type BrandingBannerImageType = {
  brandingBannerImageBrandi?: ImageSourcePropType;

  /** Style props */
  brandingBannerIconPosition?: string;
  brandingBannerIconTop?: number | string;
  brandingBannerIconLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BrandingBannerImage = ({
  brandingBannerImageBrandi,
  brandingBannerIconPosition,
  brandingBannerIconTop,
  brandingBannerIconLeft,
}: BrandingBannerImageType) => {
  const brandingBannerIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", brandingBannerIconPosition),
      ...getStyleValue("top", brandingBannerIconTop),
      ...getStyleValue("left", brandingBannerIconLeft),
    };
  }, [
    brandingBannerIconPosition,
    brandingBannerIconTop,
    brandingBannerIconLeft,
  ]);

  return (
    <Image
      style={[styles.brandingbannerIcon, brandingBannerIconStyle]}
      resizeMode="cover"
      source={brandingBannerImageBrandi}
    />
  );
};

const styles = StyleSheet.create({
  brandingbannerIcon: {
    borderRadius: Border.br_xs,
    width: 310,
    height: 196,
    overflow: "hidden",
  },
});

export default BrandingBannerImage;
