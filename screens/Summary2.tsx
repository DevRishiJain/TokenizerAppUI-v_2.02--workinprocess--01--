import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import HEADERLogin from "../components/HEADERLogin";
import DSHBRDButton from "../components/DSHBRDButton";
import NAVIGATION1 from "../components/NAVIGATION1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import NavSecondary from "../components/NavSecondary";
import { Border } from "../GlobalStyles";

const Summary2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.summary}>
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption1.png")}
      />
      <HEADERLogin
        enterYourPhone="John BROWN"
        hEADERLoginPosition="absolute"
        hEADERLoginTop={74}
        hEADERLoginLeft={0}
        enterYourPhoneFontWeight="600"
        enterYourPhoneFontFamily="Montserrat-SemiBold"
      />
      <DSHBRDButton
        vector={require("../assets/vector.png")}
        cryptoWallet="Bank"
        dSHBRDButtonPosition="absolute"
        dSHBRDButtonTop={194}
        dSHBRDButtonLeft={36}
        dSHBRDButtonWidth={137}
        dSHBRDButtonHeight={137}
        vectorIconHeight="78.25%"
        vectorIconWidth="78.25%"
        vectorIconTop="8.73%"
        vectorIconRight="9.76%"
        vectorIconBottom="13.01%"
        vectorIconLeft="11.99%"
      />
      <DSHBRDButton
        vector={require("../assets/vector1.png")}
        cryptoWallet="Crypto Wallet"
        dSHBRDButtonPosition="absolute"
        dSHBRDButtonTop={352}
        dSHBRDButtonLeft={36}
        dSHBRDButtonWidth={137}
        dSHBRDButtonHeight={137}
        vectorIconHeight="82.19%"
        vectorIconWidth="73.63%"
        vectorIconTop="5.14%"
        vectorIconRight="5.82%"
        vectorIconBottom="12.67%"
        vectorIconLeft="20.55%"
      />
      <DSHBRDButton
        vector={require("../assets/vector.png")}
        cryptoWallet="NFT"
        dSHBRDButtonPosition="absolute"
        dSHBRDButtonTop={510}
        dSHBRDButtonLeft={36}
        dSHBRDButtonWidth={137}
        dSHBRDButtonHeight={137}
        vectorIconHeight="78.25%"
        vectorIconWidth="78.25%"
        vectorIconTop="8.73%"
        vectorIconRight="9.76%"
        vectorIconBottom="13.01%"
        vectorIconLeft="11.99%"
      />
      <DSHBRDButton2 />
      <DSHBRDButton
        vector={require("../assets/vector.png")}
        cryptoWallet="Marketplace"
        dSHBRDButtonPosition="absolute"
        dSHBRDButtonTop={352}
        dSHBRDButtonLeft={198}
        dSHBRDButtonWidth={137}
        dSHBRDButtonHeight={137}
        vectorIconHeight="78.25%"
        vectorIconWidth="78.25%"
        vectorIconTop="8.73%"
        vectorIconRight="9.76%"
        vectorIconBottom="13.01%"
        vectorIconLeft="11.99%"
      />
      <DSHBRDButton
        vector={require("../assets/vector.png")}
        cryptoWallet="Crypto Wallet"
        dSHBRDButtonPosition="absolute"
        dSHBRDButtonTop={510}
        dSHBRDButtonLeft={198}
        dSHBRDButtonWidth={137}
        dSHBRDButtonHeight={137}
        vectorIconHeight="78.25%"
        vectorIconWidth="78.25%"
        vectorIconTop="8.73%"
        vectorIconRight="9.76%"
        vectorIconBottom="13.01%"
        vectorIconLeft="11.99%"
      />
      <NAVIGATION1
        ellipse36={require("../assets/ellipse-361.png")}
        ellipse37={require("../assets/ellipse-361.png")}
        ellipse38={require("../assets/ellipse-361.png")}
        rectangle95={require("../assets/rectangle-95.png")}
        nAVIGATIONPosition="absolute"
        nAVIGATIONTop={716}
        nAVIGATIONLeft={-8}
      />
      <Pressable style={styles.buttonback} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/buttonback.png")}
        />
      </Pressable>
      <NavSecondary
        icon32pxlightuser={require("../assets/icon-32pxlightuser.png")}
        navSecondaryPosition="absolute"
        navSecondaryTop={22}
        navSecondaryLeft={226}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  buttonback: {
    position: "absolute",
    left: 30,
    top: 22,
    width: 48,
    height: 48,
  },
  summary: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Summary2;
