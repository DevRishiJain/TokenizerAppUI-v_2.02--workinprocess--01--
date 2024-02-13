import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ContainerWrapper = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.frameGroupFlexBox}>
        <View style={[styles.layer1Wrapper, styles.frameGroupFlexBox]}>
          <View style={styles.layer1}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector2.png")}
            />
            <Text style={styles.text}>$</Text>
          </View>
        </View>
        <Text style={[styles.pleaseTyperThe, styles.pleaseTypo]}>
          Add funds to your Tokenizer Account and start using it today!
        </Text>
      </View>
      <View style={styles.frameContainer}>
        <View style={[styles.layer1Wrapper, styles.frameGroupFlexBox]}>
          <Image
            style={styles.layer1}
            resizeMode="cover"
            source={require("../assets/iconssuccessonbrd-01.png")}
          />
        </View>
        <Text style={[styles.pleaseTyperThe1, styles.pleaseTypo]}>
          Enjoy your Basic Plan
        </Text>
      </View>
      <View style={styles.groupWrapperSpaceBlock}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-3685.png")}
        />
      </View>
      <Text
        style={[styles.pleaseTyperThe2, styles.groupWrapperSpaceBlock]}
      >{`If we get all the info about your income, your first advance gets unlocked immediately.

If we don't get it, no worries. Just wait for that first paycheck to be deposited into your B9 account.

The more you deposit, the higher your Advance Limit will be. Get it up to $500!`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameGroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  pleaseTypo: {
    marginLeft: 16,
    opacity: 0.7,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorWhite,
  },
  groupWrapperSpaceBlock: {
    display: "none",
    marginTop: 16,
  },
  vectorIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  text: {
    top: "12.2%",
    left: "34%",
    fontSize: FontSize.size_7xl_4,
    lineHeight: 38,
    fontWeight: "900",
    fontFamily: FontFamily.montserratBlack,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  layer1: {
    height: 50,
    overflow: "hidden",
    width: 50,
  },
  layer1Wrapper: {
    justifyContent: "center",
  },
  pleaseTyperThe: {
    width: 229,
  },
  pleaseTyperThe1: {
    flex: 1,
  },
  frameContainer: {
    marginTop: 16,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameChild: {
    height: 54,
    width: 50,
  },
  pleaseTyperThe2: {
    color: Color.colorBlack,
    width: 239,
    opacity: 0.7,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    display: "none",
    textAlign: "left",
  },
  frameParent: {
    top: 457,
    left: 41,
    width: 295,
    position: "absolute",
  },
});

export default ContainerWrapper;
