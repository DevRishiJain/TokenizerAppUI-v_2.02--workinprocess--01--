import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

export type INPUTfilledType = {
  iCONeyeClosed?: ImageSourcePropType;
  txt?: string;
  description?: string;
  enterYourPhone?: string;
  showICONeyeClosed?: boolean;
  showTypeCursorIcon?: boolean;
  description1?: boolean;
  tEXTWhite5011?: boolean;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
  propOpacity?: number | string;
  propFontSize?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const INPUTfilled = ({
  iCONeyeClosed,
  txt,
  description,
  enterYourPhone,
  showICONeyeClosed,
  showTypeCursorIcon,
  description1,
  tEXTWhite5011,
  propTop,
  propLeft,
  propOpacity,
  propFontSize,
}: INPUTfilledType) => {
  const iNPUTfilledStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const iCONeyeClosedStyle = useMemo(() => {
    return {
      ...getStyleValue("opacity", propOpacity),
    };
  }, [propOpacity]);

  const descriptionStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", propFontSize),
    };
  }, [propFontSize]);

  return (
    <View style={[styles.inputfilled, iNPUTfilledStyle]}>
      <Image
        style={[styles.dividerIcon, styles.typePosition]}
        resizeMode="cover"
        source={require("../assets/divider2.png")}
      />
      {showICONeyeClosed && (
        <Image
          style={[
            styles.iconeyeclosed,
            styles.dividerIconPosition,
            iCONeyeClosedStyle,
          ]}
          resizeMode="cover"
          source={iCONeyeClosed}
        />
      )}
      <View style={[styles.type, styles.typeFlexBox]}>
        <Text style={[styles.txt, styles.txtTypo]}>{txt}</Text>
        {showTypeCursorIcon && (
          <Image
            style={styles.typeCursorIcon}
            resizeMode="cover"
            source={require("../assets/type-cursor.png")}
          />
        )}
      </View>
      <Text style={[styles.description, styles.descriptionTypo]}>
        Enter your password
      </Text>
      {!description1 && (
        <Text
          style={[
            styles.description1,
            styles.description1Position,
            descriptionStyle,
          ]}
        >
          {description}
        </Text>
      )}
      {!tEXTWhite5011 && (
        <View style={[styles.textwhite5011, styles.description1Position]}>
          <Text style={[styles.enterYourPhone, styles.txtTypo]}>
            {enterYourPhone}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  typePosition: {
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  dividerIconPosition: {
    bottom: 21,
    right: 0,
  },
  typeFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    letterSpacing: -0.2,
  },
  descriptionTypo: {
    lineHeight: 12,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    bottom: 60,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
  },
  description1Position: {
    display: "none",
    left: 0,
    position: "absolute",
  },
  dividerIcon: {
    borderRadius: Border.br_12xs,
    maxWidth: "100%",
    height: 1,
    bottom: 21,
    right: 0,
  },
  iconeyeclosed: {
    width: 44,
    height: 44,
    opacity: 0.3,
    position: "absolute",
  },
  txt: {
    fontSize: FontSize.size_mid,
    lineHeight: 18,
    color: Color.colorWhite,
  },
  typeCursorIcon: {
    width: 2,
    height: 22,
  },
  type: {
    top: 40,
    alignItems: "center",
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  description: {
    color: Color.neutralsNeutral900,
    opacity: 0.4,
    left: 0,
    lineHeight: 12,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    bottom: 60,
    position: "absolute",
  },
  description1: {
    opacity: 0.5,
    lineHeight: 12,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    bottom: 60,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
  },
  enterYourPhone: {
    fontSize: FontSize.size_2xs,
    lineHeight: 14,
    color: Color.colorGray_200,
    display: "flex",
    width: 347,
    alignItems: "center",
  },
  textwhite5011: {
    top: 72,
    justifyContent: "center",
    padding: Padding.p_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  inputfilled: {
    top: 407,
    left: 18,
    width: 343,
    height: 93,
    position: "absolute",
  },
});

export default INPUTfilled;
