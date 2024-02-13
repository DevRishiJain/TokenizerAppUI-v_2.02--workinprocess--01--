import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

export type INPUTfilled3Type = {
  iCONClose?: ImageSourcePropType;
  txt?: string;
  description?: string;
  enterYourPhone?: string;
  iCONClose1?: boolean;
  tEXTWhite5011?: boolean;

  /** Style props */
  propTop?: number | string;
  propFontSize?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const INPUTfilled3 = ({
  iCONClose,
  txt,
  description,
  enterYourPhone,
  iCONClose1,
  tEXTWhite5011,
  propTop,
  propFontSize,
}: INPUTfilled3Type) => {
  const iNPUTfilled1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const description1Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", propFontSize),
    };
  }, [propFontSize]);

  return (
    <View style={[styles.inputfilled, iNPUTfilled1Style]}>
      <Image
        style={styles.dividerIcon}
        resizeMode="cover"
        source={require("../assets/divider2.png")}
      />
      {!iCONClose1 && (
        <Image style={styles.iconclose} resizeMode="cover" source={iCONClose} />
      )}
      <View style={[styles.type, styles.typeFlexBox]}>
        <Text style={[styles.txt, styles.txtTypo]}>{txt}</Text>
        <Image
          style={styles.typeCursorIcon}
          resizeMode="cover"
          source={require("../assets/type-cursor.png")}
        />
      </View>
      <Text style={[styles.description, styles.descriptionTypo]}>
        Enter your password
      </Text>
      <Text
        style={[styles.description1, styles.descriptionTypo, description1Style]}
      >
        {description}
      </Text>
      {!tEXTWhite5011 && (
        <View style={[styles.textwhite5011, styles.typeFlexBox]}>
          <Text style={[styles.enterYourPhone, styles.txtTypo]}>
            {enterYourPhone}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  typeFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  txtTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    letterSpacing: -0.2,
  },
  descriptionTypo: {
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    left: 0,
    position: "absolute",
  },
  dividerIcon: {
    borderRadius: Border.br_12xs,
    maxWidth: "100%",
    height: 1,
    overflow: "hidden",
    left: 0,
    bottom: 21,
    right: 0,
    position: "absolute",
  },
  iconclose: {
    width: 44,
    height: 44,
    display: "none",
    bottom: 21,
    right: 0,
    position: "absolute",
  },
  txt: {
    fontSize: FontSize.size_mid,
    color: Color.colorWhite,
    lineHeight: 18,
  },
  typeCursorIcon: {
    width: 2,
    height: 22,
    display: "none",
  },
  type: {
    top: 40,
    alignItems: "center",
    overflow: "hidden",
  },
  description: {
    bottom: 60,
    lineHeight: 12,
    color: Color.neutralsNeutral900,
    opacity: 0.4,
  },
  description1: {
    bottom: 57,
    opacity: 0.5,
    color: Color.colorWhite,
    lineHeight: 18,
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
    display: "none",
  },
  inputfilled: {
    top: 384,
    left: 16,
    width: 343,
    height: 93,
    position: "absolute",
  },
});

export default INPUTfilled3;
