import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type TEXTWhite501Type = {
  /** Style props */
  tEXTWhite5016Position?: string;
  tEXTWhite5016Top?: number | string;
  tEXTWhite5016Left?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TEXTWhite501 = ({
  tEXTWhite5016Position,
  tEXTWhite5016Top,
  tEXTWhite5016Left,
}: TEXTWhite501Type) => {
  const tEXTWhite5016Style = useMemo(() => {
    return {
      ...getStyleValue("position", tEXTWhite5016Position),
      ...getStyleValue("top", tEXTWhite5016Top),
      ...getStyleValue("left", tEXTWhite5016Left),
    };
  }, [tEXTWhite5016Position, tEXTWhite5016Top, tEXTWhite5016Left]);

  return (
    <View
      style={[
        styles.textwhite5016,
        styles.textwhite5016FlexBox,
        tEXTWhite5016Style,
      ]}
    >
      <Text style={[styles.enterYourPhone, styles.textwhite5016FlexBox]}>
        We'll text you a confirmation code
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textwhite5016FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  enterYourPhone: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.3,
    lineHeight: 25,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorGray_200,
    textAlign: "center",
    display: "flex",
    width: 361,
  },
  textwhite5016: {
    width: 375,
    flexDirection: "row",
    padding: Padding.p_8xs,
  },
});

export default TEXTWhite501;
